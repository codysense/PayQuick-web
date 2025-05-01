import PageTemplates from "../common/PageTemplates"
import Login from "../components/login"
import logo from "../images/logo.png"
import React from 'react'

const SignIn = () => {
  const login = <Login logo={logo}/>
    return (
    
    <div><PageTemplates  pageContent={login}/></div>
  )
}

export default SignIn
