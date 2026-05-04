import HomeImage from '../assets/illustration-intro.svg'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-16 md:py-24'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-16 md:gap-12'>
        
        {/* Left side - Text Content */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
            Bring everyone together to build better products.
          </h1>
          <p className='text-gray-500 text-lg max-w-lg mx-auto md:mx-0 mb-8'>
            Manage makes it simple for software teams to plan day-to-day tasks 
            while keeping the larger team goals in view.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105'>
              Get Started
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className='flex-1'>
          <img 
            src={HomeImage} 
            alt='Team collaboration illustration' 
            className='w-full h-auto'
          />
        </div>

      </div>

      {/* Optional: Stats Section */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-100'>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-900'>10k+</h3>
          <p className='text-gray-500'>Companies</p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-900'>50k+</h3>
          <p className='text-gray-500'>Users</p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-900'>30+</h3>
          <p className='text-gray-500'>Countries</p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-900'>99%</h3>
          <p className='text-gray-500'>Satisfaction</p>
        </div>
      </div>
    </section>
  )
}

export default Hero