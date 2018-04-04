import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'

class App extends Component {

  constructor(props) {
        super(props)
        this.props.history.push('/login')
  }

  render() {
          return (
            <div>
              <Link to="/login"><TopNav history={this.props.history} /></Link>
            </div>
          )
  }
}

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
