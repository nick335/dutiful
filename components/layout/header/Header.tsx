'use client'
import React, { useState } from 'react'
import Logo from '@/public/logo.svg'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'
import { FiMenu } from "react-icons/fi";
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const hide = () => {
    setShowMenu(false)
  } 
  const show = () => {
    setShowMenu(true)
  }
  return (
    <header className='relative flex items-center paddingLayout py-4  lg:py-6 font-circular '>
      <Link href="/" className='lg:mr-auto'>
        <div className='lg:w-[7.5rem] w-[4.5rem]'>
          <ResponsiveImage 
            src={Logo}
            alt="Logo" 
            width={120}
            height={54}
            placeholder='empty'
          />
        </div>
      </Link>
      <Nav close={hide} isOpen={showMenu}/>
      <div className='ml-auto lg:ml-24 '>
        <Link href={'/login'} >
          <button className='outline-none border-none   text-base font-medium lg:text-xl  text-[#1E1E4B] capitalize mr-4 lg:mr-10'>
            Login
          </button>
        </Link>
        <Link href={'/signup'} >
          <button className='outline-none border-[2px] w-[5.125rem] h-[1.875rem] rounded-md border-[#603F8B]  text-base font-medium lg:text-xl lg:w-[10.625rem] lg:h-[3.6875rem] text-textHighlight capitalize '>
            sign up
          </button>
        </Link>  
      </div>
      <FiMenu className='text-2xl cursor-pointer text-textHighlight lg:hidden ml-4' onClick={show}/>
    </header>
  )
}

export default Header
