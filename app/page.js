"use client"
import React from "react"
import HomePage from "@/pages/home/Home"
import Navbar from "@/componenets/navbar/Navbar"
import Login from "@/pages/login/Login"
import SignUp from "@/pages/signUP/SignUp"

 const Home = () => {
  return (
  <>
    <Navbar/>
    <HomePage/>
    <Login/>
    <SignUp/>
  </>
  ) 
}
export default Home;