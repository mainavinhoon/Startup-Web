"use client"
import React from 'react'
import Navbar from '@/componenets/navbar/Navbar'
import Feed from '@/componenets/feed/Feed'
import Profile from '@/componenets/profile/Profile'
const HomePage = () => {
  return (
    <div className='flex'>

    <Profile/>
    <Feed/>
    </div>
  )
}

export default HomePage;