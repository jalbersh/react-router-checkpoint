import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import TopNav from './components/TopNav'
import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'
import store from './utils/store'
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css'

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <div>
                      <Route path="/" component={App} />
                      <Route exact path="/topnav" component={TopNav}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/signup" component={Signup}/>
                      <Route exact path="/profile" component={UserProfile}/>
                </div>
            </Router>
        </Provider>,
  document.getElementById('root')
);
