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
import store from '../store'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props)
    this.state={email: this.props.email, password: this.props.password}
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(e) {
        e.preventDefault()
        const target = e.target
        const email = target.email.value
        const password = target.password.value
        console.log('email',email,' password',password)
        e.target.reset()
        store.dispatch(userLogin(email,password))
   }

  render() {
//    const { history, user, isLoading } = this.props
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
                  value={this.state.email}
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
                  value={this.state.password}
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

//    const mapDispatchToProps = dispatch => {
//        console.log('in mapDispatchToProps')
//            bindActionCreators(
//            {
//                addMessageInAPI,fetchMessagesInAPI,updateMessagesInAPI
//            }, dispatch)
//    }

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
