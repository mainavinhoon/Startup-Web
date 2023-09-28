"use client"
import React from 'react'
import "./login.css"
import Templete from '@/componenets/userlogin/Templete'

 const Login = ({setIsLoggedIn}) => {
  return (
    <>
    <div className='w-[fix fit-content] bg-[blueviolet] relative text-center text-[150px] rounded-[10px]'>Login page</div>
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