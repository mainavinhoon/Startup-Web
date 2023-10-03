"use client"
import React from 'react'
import "./login.css"
import Templete from '@/componenets/userlogin/Templete'


 const Login = ({setIsLoggedIn}) => {
  return (
    <>
      <Templete

    title="Welcome Back"
    desc1="You are at the login page of UniteUp"
    desc2="Enter Your Login Details"
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}


    />
    </>
  )
}

export default Login;