"use client"
import React, { useState } from 'react';
import Image from 'next/image'
// import Logo from '@/public/Logo.svg';
import Link from 'next/link'
import './Navbar.css'

 const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  return (
    <>
       <nav className='nav-bg py-2 px-3'>
        <div>
       <Image className='logo-set' src={"/logo-in-black.svg"} alt='Logo' width={60} height={40}/> </div>

       <div className='middle'>
        <ul className='middle-flex '>
          <li>
            <Link href="/">
              Home
            </Link>
          </li><li>
            <Link href="/">
              Events
            </Link>
          </li><li>
            <Link href="/">
              Explore
            </Link>
          </li><li>
            <Link href="/">
              Notifications
            </Link>
          </li><li>
            <Link href="/">
              Message
            </Link>
          </li>
        </ul>
       </div>
       <div className="search-icon" onClick={toggleSearch}>
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