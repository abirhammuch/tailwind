
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../assets/logo.svg'
import React from 'react'

const Header = () => {
  const humberger = () => {
    const menu = document.querySelector('#menu')
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
  }
  return (

    <nav className='container m-auto mb-border-b-2 border-gray-300'>
      <div className='flex flex-row justify-between items-center py-5'>
        <div className='flex items-center space-x-2'>
          <img src={Logo} alt='logo'  />
        </div>
        <div className='hidden md:flex  space-x-3'>
          <div className='cursor-pointer hover:text-gray-400'>Pricing</div>
          <div className='cursor-pointer hover:text-gray-400'>Products</div>
          <div className='cursor-pointer hover:text-gray-400'>About Us</div>
          <div className='cursor-pointer hover:text-gray-400'>Careers</div>
          <div className='cursor-pointer hover:text-gray-400'>Community</div>
        </div>

        <div className='hidden md:block bg-amber-600 text-white px-4 py-2 rounded-full cursor-pointer'>
          get started
        </div>
        <HiMenu className='md:hidden flex text-2xl cursor-pointer mr-8 ' onClick={humberger}/>
      </div>
      <div>
        <div className='hidden flex-col items-end mr-30 space-y-4  space-x-3'id='menu'>
          <div className='cursor-pointer hover:text-gray-400'>Pricing</div>
          <div className='cursor-pointer hover:text-gray-400'>Products</div>
          <div className='cursor-pointer hover:text-gray-400'>About Us</div>
          <div className='cursor-pointer hover:text-gray-400'>Careers</div>
          <div className='cursor-pointer hover:text-gray-400'>Community</div>
        </div>
      </div>

    </nav>
    
  )
}

export default Header
