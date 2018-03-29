import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'
import { userSignup,userLogout,userLogin } from './actions/auth.actions'

//export const App = () => {
class App extends Component {

  constructor(props) {
        super(props)
        this.props.history.push('/login')
  }

  render() {
      return (
        <div>
          <Link to="/topnav"><TopNav /></Link>
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
   console.log('in mapDispatchToProps')
   bindActionCreators(
      {
         userSignup,userLogout,userLogin
      }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//export default App
