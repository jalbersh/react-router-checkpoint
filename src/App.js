import React from 'react'
import { Link } from 'react-router-dom'
//import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'

export const App = () => {
  return (
    <div>
      <Link to="/topnav"><TopNav /></Link>
    </div>
  )
}

export default App
//      <Link to="/login"><Login /></Link>
