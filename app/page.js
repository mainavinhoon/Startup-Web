"use client"
import React from "react"
import HomePage from "./Home/Page"
import Login from "./Login/page"
import SignUp from "./SignUp/page"
import './globals.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Explore from "./Explore/page"
import Notifications from "./Notifications/page"
import Message from "./Message/page"
import Events from "./Events/Page"

 const Home = () => {

const [isLoggedin, setisLoggedin] = useState(false)
  return (
  <>
    <BrowserRouter>
{/* 
    <Routes>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="/Notifiactions" element={<Notifications/>}/>
      <Route path="/Message" element={<Message/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes> */}
      
       <HomePage/>
    </BrowserRouter>
 
      
  </>
  ) 
} 
export default Home;