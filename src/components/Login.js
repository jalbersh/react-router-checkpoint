import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/auth.actions'
import { USER_LOGGED_IN,TOGGLE } from '../utils/constants'
import store from '../utils/store'

class Login extends Component {

  constructor(props) {
      super(props)
      this.submitHandler = this.submitHandler.bind(this)
      this.loggedOn = this.loggedOn.bind(this)
      this.state = {email:'',password:''}
  }

  loggedOn(loggedInUser) {
        if (loggedInUser) {
            store.dispatch({type:USER_LOGGED_IN, user:loggedInUser})
            store.dispatch({type:TOGGLE, isOpen:true})
            this.props.history.push('/profile')
        }
  }

  submitHandler(e) {
        e.preventDefault()
        const target = e.target
        const email = target.email.value
        const password = target.password.value
        e.target.reset()
        store.dispatch(userLogin(email,password,this.loggedOn))
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form  onSubmit={this.submitHandler}>
              <FormGroup>
                <Label for="email-field">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.props.email}
                  onChange={e => this.setState({email: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.props.password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button className="mr-3" type="submit" color="primary">
                Submit
              </Button>
              <Link to="/signup">Not a member?</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError,
    user: state.auth.user,
    isOpen: state.auth.isOpen,
    auth: state.auth,
    logout: state.auth.logout
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
