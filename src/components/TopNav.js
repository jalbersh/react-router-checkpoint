import React, { Component } from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import store from '../utils/store'
import { userLogout } from '../actions/auth.actions'
import { bindActionCreators } from 'redux'
import { TOGGLE } from '../utils/constants'

class TopNav extends Component {
  constructor(props) {
      super(props);
      this.state = {isOpen: false}
      this.toggle = this.toggle.bind(this)
      this.getMenu = this.getMenu.bind(this)
      this.logout = this.logout.bind(this)
  }

  toggle() {
      store.dispatch({type:TOGGLE, isOpen:!this.state.auth.isOpen})
  }

  logout() {
      store.dispatch(userLogout())
//      this.props.history.push('/')
  }

  getMenu(open) {
     if (!open) {
            return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </NavItem>
            </Nav>)
     }
     else
     {
            return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/login" onClick={this.logout} className="nav-link">LogOut</NavLink>
                </NavItem>
            </Nav>)
     }
  }

  render() {
    const open = this.props.auth.isOpen
//    console.log('TopNav.render',open,this.props)
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={open} navbar>
                {this.getMenu(open)}
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.auth.isOpen,
    user: state.auth.user,
    auth: state.auth,
    logout: state.auth.logout
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
