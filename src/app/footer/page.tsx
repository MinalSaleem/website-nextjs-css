import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


export default function Footer() {
    return (
      <div className='footer-main'>

        <div className='footer-content'>
            
            <div className='footer-section'>

                <div className='footer-image-container'>
                    <Image src="/contact2.png" alt="Logo" width={150} height={150} 
                    className='footer-image' />
                </div>
  
                <div className='footer-contact-info'>

                    <h3 className='footer-title'>Contact Us</h3>
                      
                    <p className='footer-item'>
                        <FaPhoneAlt className='icon' size={24} /><span className='footer-span'>+92 123456</span>
                    </p>
                    <p className='footer-item'>
                        <MdEmail className='icon' size={24} /><span className='footer-span'>email@gmail.com</span>
                    </p>
                    <p className='footer-item'>
                        <IoLocation size={24} className='icon'/>
                    </p>
                </div>
            </div>
  
              <div className='footer-join-us'>
                  <h1 className='footer-join-title'>Join Us</h1>
                  <div className='footer-icons'>

                    <Link href="https://github.com/MinalSaleem" target="_blank" rel="noopener noreferrer" >
                      <FaLinkedinIn className='social-icon' color='dark-blue'/></Link>

                      
                    <Link href="https://www.linkedin.com/in/minalsaleem" target="_blank" rel="noopener noreferrer" >
                      <FaGithub className='social-icon'/></Link>
                  </div>
              </div>
          </div>
  
          <div className='footer-bottom'>
              <FaRegCopyright /><p>Copyright Rimel 2022. All rights reserved</p>
          </div>
      </div>
    )
  }