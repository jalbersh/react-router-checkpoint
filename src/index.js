import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App';
import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div>
              <Route path="/" component={App} />
              <Route path="/topnav" component={TopNav}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile" component={UserProfile}/>
        </div>
    </Router>
 </Provider>,
  document.getElementById('root')
);
