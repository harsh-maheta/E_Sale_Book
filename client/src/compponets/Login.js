import React from 'react'
import Rightnav from './Rightnav'
import Leftnav from './Leftnav'
import './login_css.css'

const Login = () => {
  return (
    <div className="login_container">
        <Leftnav/>
        <Rightnav/>
    </div>
  )
}

export default Login