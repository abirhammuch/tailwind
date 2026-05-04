import logo from '../assets/logo-white.svg'
import instagram from '../assets/icon-instagram.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'  
import pinterest from '../assets/icon-pinterest.svg'
import youtube from '../assets/icon-youtube.svg'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white w-full overflow-x-hidden'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-8 py-8 max-w-full overflow-x-hidden'>
        
        {/* Left side - Logo & Social */}
        <div className='flex flex-col items-center space-y-6'>
          <img src={logo} alt="Logo" className='mt-5'/>
          <div className='flex space-x-4'>
            <img src={facebook} alt="Facebook" className='cursor-pointer hover:opacity-70' />
            <img src={instagram} alt="Instagram" className='cursor-pointer hover:opacity-70' />
            <img src={twitter} alt="Twitter" className='cursor-pointer hover:opacity-70' />
            <img src={pinterest} alt="Pinterest" className='cursor-pointer hover:opacity-70' />
            <img src={youtube} alt="YouTube" className='cursor-pointer hover:opacity-70' />
          </div>
        </div>

        {/* Middle 1 - Navigation */}
        <div className='flex flex-col items-center space-y-3'>
          <a href="#" className='hover:text-orange-500'>Home</a>
          <a href="#" className='hover:text-orange-500'>Pricing</a>
          <a href="#" className='hover:text-orange-500'>Products</a>
          <a href="#" className='hover:text-orange-500'>About Us</a>
        </div>

        {/* Middle 2 - Navigation */}
        <div className='flex flex-col items-center space-y-3'>
          <a href="#" className='hover:text-orange-500'>Careers</a>
          <a href="#" className='hover:text-orange-500'>Community</a>
          <a href="#" className='hover:text-orange-500'>Privacy Policy</a>
        </div>

        {/* Right side - Newsletter */}
        <div className='flex flex-col items-center space-y-4'>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input 
              type="email" 
              placeholder="Update in your inbox" 
              className='text-black px-6 py-3 rounded-full w-full sm:w-auto text-white'
            />
            <button className='bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600'>
              Go
            </button>
          </div>
          <p className='text-gray-400 text-sm pt-4'>Copyright © 2026. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer