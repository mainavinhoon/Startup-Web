"use client"
import React, { useState } from 'react';
import Image from 'next/image'
// import Logo from '@/public/Logo.svg';
import Link from 'next/link'
import './navbar.css'

 const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  return (
    <>
       <nav className=' bg-[blueviolet] flex items-center  '>
        <div>
       <Image className='logo-set' src={"/logo-in-black.svg"} alt='Logo' width={60} height={40}/> 
       </div>

       <div className='middle'>
        <ul className=' flex items-center ml-[250px] p-8  gap-8 ;'>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              Events
            </Link>
          </li>
          <li>
            <Link href="/">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/">
             Notifications
            </Link>
          </li>
          <li>
            <Link href="Message">
              Message
            </Link>
          </li>
          <li>
            <Link href="/Login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/SignUp">
              Sign Up
            </Link>
          </li>
        </ul>
       </div>
       <div className=" ml-[60px] " onClick={toggleSearch}>
          <i className={`fas fa-search ${isSearchVisible ? 'active' : ''}`}></i>
        </div>
        <div className={`search-field ${isSearchVisible ? 'active' : ''}`}>
          <input type="text" placeholder="Search" />
          <button onClick={toggleSearch}>Search</button>
        </div>
       </nav>
    
         
    </>
  ) 
}

export default Navbar;