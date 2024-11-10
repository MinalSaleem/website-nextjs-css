"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>

      <div className='header-inner'>
        
        <div className={`nav-links ${isOpen ? 'nav-open' : 'nav-closed'}`}>
          <Link href='/' className='nav-link'>
            Home
          </Link>
          <Link href='/menu' className='nav-link'>
            Menu
          </Link>
          <Link href='/about' className='nav-link'>
            About Us
          </Link>
          <Link href='/contact' className='nav-link'>
            Contact Us
          </Link>
        </div>

        <div className='hamburger-icon'>
          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>

        <div className='order-button-container'>
          <button className='order-button'>
            Order Now
          </button>
        </div>
      </div>

    </div>
  );
}