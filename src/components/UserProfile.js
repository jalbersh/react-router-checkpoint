import React, {Component} from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'

//const UserProfile = (props) => {
class UserProfile extends Component {

  constructor(props) {
      super(props)
      console.log('up props', props)
      this.state={user: this.props.user}
      this.setProfile = this.setProfile.bind(this)
  }

  setProfile(newUser) {
        console.log('in setProfile with',newUser)
        this.setState({user: newUser})
  }

  render() {
      console.log('userProps-render:props',this.props)
      console.log('userProps-render:state',this.state)
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
                <img src="http://via.placeholder.com/350x450" alt="profile" />
              </Col>
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
//export default UserProfile;
