"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch, AiFillHome, AiOutlineLogin } from 'react-icons/ai';
import { MdEmojiEvents, MdNotifications } from 'react-icons/md';
import { FaWpexplorer } from 'react-icons/fa';
import { BsFillChatDotsFill, BsFillSignpostFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation'; // Import the useRouter function for Server Components
import './navbar.css';


const Navbar = (props) => {
  const router = useRouter(); // Get the current route



  // Function to determine if a link is active based on the href
  const isLinkActive = (href) => router.pathname === href;
  let isLoggedIn = props.isLoggedIn;
  let setisLoggedIn = props.setisLoggedIn;
 

  return (
    <  >
      <nav className={' bg-slate-200 flex items-center rounded-xl border  border-zinc-400'}>
        <div>
          <Image className=' mx-20 rounded-lg' src={"/ayush-logo.png"} alt='Logo' width={40} height={20}/> 
        </div>

        <div className='middle '>
          <ul className='text-black flex items-center  text-sm ml-[250px] p-3 space-x-6'>
            <li>
              <Link href='/'>
                <AiFillHome size={20} className={`ml-3 ${isLinkActive('/') ? 'active': ''}`} />
                Home
              </Link>
            </li>
            <li>
              <Link href='/Events'>
                <MdEmojiEvents size={20} className={`ml-3 ${isLinkActive('/Events') ? 'active' : ''}`} />
                Events
              </Link>
            </li>
            <li>
              <Link href='/Explore'>
                <FaWpexplorer size={20} className={`ml-3 ${isLinkActive('/Explore') ? 'active' : ''}`} />
                Explore
              </Link>
            </li>
            <li>
              <Link href='/Notifications'>
                <MdNotifications size={20} className={`ml-8 ${isLinkActive('/Notifications') ? 'active' : ''}`} />
                Notifications
              </Link>
            </li>
            <li>
              <Link href='/Message'>
                <BsFillChatDotsFill size={20} className={`ml-4 ${isLinkActive('/Message') ? 'active' : ''}`} />
                Message
              </Link>
            </li>

            { !setisLoggedIn &&
            <li>
              <Link href='/Login'>
                <AiOutlineLogin size={20} className={`ml-3 ${isLinkActive('/Login') ? 'active' : ''}`} />
                Login
              </Link>

               
             

            </li>
             }

            { !setisLoggedIn &&
            <li>
             
              <Link href='/SignUp'>
                <BsFillSignpostFill size={20} className={`ml-3 ${isLinkActive('/SignUp') ? 'active' : ''}`} />
                Sign Up
              </Link>
                
            </li>
               }

            { setisLoggedIn &&
            <li>
             
              <Link href='/LogOut'>
                <BsFillSignpostFill size={20} className={`ml-3 ${isLinkActive('/SignUp') ? 'active' : ''}`} />
                Log Out
              </Link>
                
            </li>
            
               }

        { setisLoggedIn &&
            <li>
             
              <Link href='/LogOut'>
                <BsFillSignpostFill size={20} className={`ml-3 ${isLinkActive('/SignUp') ? 'active' : ''}`} />
                Profile
              </Link>
                
            </li>
            
               }
          </ul>
        </div>
       
        
        <div className=' ml-auto pr-2 flex gap-x-3'>
        <div className=' cursor-pointer'>
          <AiOutlineSearch size="25"/>
        </div>
          <input type='text' placeholder='Search' className=' max-w-max border border-gray-600 rounded bg-white text-sm placeholder:to-black/70 dark:placeholder-white/75'/>
        </div>
      </nav>
    </>
  ) 
}

export default Navbar;
