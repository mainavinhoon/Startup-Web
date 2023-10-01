"use client"
import React, { useState } from 'react';
import Image from 'next/image'
// import Logo from '@/public/Logo.svg';
import Link from 'next/link'
import './navbar.css'
import { AiOutlineSearch, AiFillHome, AiOutlineLogin  } from "react-icons/ai"
import { MdEmojiEvents, MdNotifications } from "react-icons/md";
import { FaWpexplorer } from "react-icons/fa";
import { BsFillChatDotsFill ,BsFillSignpostFill } from "react-icons/bs";

 const Navbar = () => {
  // const [isSearchVisible, setSearchVisible] = useState(false);

  // const toggleSearch = () => {
  //   setSearchVisible(!isSearchVisible);
  // };
  
  return (
    <>
       <nav className=' bg-green-400 flex items-center   '>
        <div>
       <Image className=' mx-20 rounded-lg' src={"/ayush-logo.png"} alt='Logo' width={60} height={40}/> 
       </div>

       <div className='middle'>
        <ul className=' flex items-center text-sm ml-[250px] p-8 space-x-6 ;'>
          <li>
            <Link href="/">
              <AiFillHome size={20} className=' ml-3'/>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Events">
              <MdEmojiEvents size={20} className=' ml-3'/>
              Events
            </Link>
          </li>
          <li>
            <Link href="/Explore">
              <FaWpexplorer size={20} className=' ml-3'/>
              Explore
            </Link>
          </li>
          <li>
            <Link href="/Notifications">
              <MdNotifications size={20} className='ml-8'/>
             Notifications
            </Link>
          </li>
          <li>
            <Link href="/Message">
              <BsFillChatDotsFill size={20} className='ml-4'/>
              Message
            </Link>
          </li>
          <li>
            <Link href="/Login">
              <AiOutlineLogin size={20} className='ml-3'/>
              Login
            </Link>
          </li>
          <li>
            <Link href="/SignUp">
              <BsFillSignpostFill size={20} className='ml-3'/>
              Sign Up
            </Link>
          </li>
        </ul>
       </div>
       {/* <div className=" ml-[60px] " onClick={toggleSearch}>
          <i className={`fas fa-search ${isSearchVisible ? 'active' : ''} rounded-lg`}></i>
        </div> */}
        {/* <div className={`search-field ${isSearchVisible ? 'active' : ''}`}> */}
              
          {/* <input type="text" placeholder="Search" /> */}

           
          {/* <button className=' rounded-lg bg-slate-200 m-3' onClick={toggleSearch}>Search</button> */}
        {/* </div> */}

        <div>
            <AiOutlineSearch size="25"/>
            
        </div>
        <div className='m-3'>
        <input type='text' placeholder='Search' className='hidden md:inline-flex bg-transparent text-sm placeholder:to-black/70 dark:placeholder-white/75'/>
        </div>
       </nav>
    
         
    </>
  ) 
}

export default Navbar;