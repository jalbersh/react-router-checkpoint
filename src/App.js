import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'
//import { bindActionCreators } from 'redux'
//import { userSignup,userLogout,userLogin } from './actions/auth.actions'

class App extends Component {

  constructor(props) {
        super(props)
        this.props.history.push('/login')
  }

  render() {
//      console.log('in App.render',this.props)
//      if (!this.props.auth.logout) {
          return (
            <div>
              <Link to="/login"><TopNav history={this.props.history} /></Link>
            </div>
          )
//      } else {
//          return (
//            <div>
//            </div>
//          )
//      }
  }
}

//const mapDispatchToProps = dispatch => {
//   bindActionCreators(
//      {
//         userSignup,userLogout,userLogin
//      }, dispatch)
//}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    auth: state.auth,
    isOpen: state.isOpen,
    logout: state.auth.logout
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
