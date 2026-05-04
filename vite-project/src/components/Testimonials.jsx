
import Anisha from '../assets/avatar-anisha.png'
import Ali from '../assets/avatar-ali.png'
import Richard from '../assets/avatar-richard.png'
import React from 'react'

const Testimonials = () => {
  return (
   <>
   <section className='container m-auto my-9'>
    <div>
      <h1 className='text-3xl font-bold  mb-9 flex justify-center'>What's Different About  Manage?</h1>

      <div className='flex flex-col items-center md:flex md:flex-row md:space-x-9'>
        <div className='flex flex-col  items-center text-center mb-8 md:mb-2 w-1/2 bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300'>
          <img src={Anisha} alt="" />
          <h3 className='mb-2 text-2xl font-bold'>Anisha Li</h3>
          <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
        </div>
        <div className='hidden md:flex flex-col items-center text-center mb-8 md:mb-2 w-1/2 bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300'>
          <img src={Ali} alt="" />
          <h3 className='mb-2 text-2xl font-bold'>Ali Bravo</h3>
          <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
        </div>
        <div className='hidden md:flex w-1/2 flex-col items-center text-center mb-8 md:mb-2 bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300'>
          <img src={Richard} alt="" />
          <h3 className='mb-2 text-2xl font-bold'>Richard Watts</h3>
          <p>“Manage has helped us streamline our processes and improve communication across teams. It’s been a game-changer for our organization.”</p>
        </div>

      </div>
      <div className='flex justify-center'>
        <button className='bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 cursor-pointer'>Get Started</button>
      </div>
    </div>
   </section>
   </>
  )
}

export default Testimonials
