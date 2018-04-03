import React, {Component} from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'

class UserProfile extends Component {

  constructor(props) {
      super(props)
      this.state={user: this.props.user}
      this.setProfile = this.setProfile.bind(this)
  }

  setProfile(newUser) {
        this.setState({user: newUser})
  }

  render() {
      const user = this.props.user
      return (
        <div>
          <Container>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <h1 className="text-center">User Profile Page</h1>
              </Col>
            </Row>
            <Row style={{marginTop: 20}}>
              <Col>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Company: {user.company}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>Address: {user.address}</h3>
              </Col>
            </Row>
          </Container>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(UserProfile)

//              <Col>
//                <img src="http://via.placeholder.com/350x450" alt="profile" />
//              </Col>
