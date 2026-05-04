import React from 'react'

const Features = () => {
  return (
    <>
    <section className='container mx-auto my-9 px-4 md:px-6'>
      <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-9 lg:space-x-14'>
        
        {/* Left side */}
        <div className='md:w-1/2'>
          <h1 className='text-3xl md:text-4xl font-bold pb-6 text-gray-900'>
            What is different about Manage?
          </h1>
          <p className='text-gray-600 leading-relaxed max-w-sm'>
            Manage provides all the functionality your team needs, without the complexity. 
            Our software is tailor-made for modern digital product teams.
          </p>
        </div>

        {/* Right side - Features */}
        <div className='flex flex-col md:w-1/2 space-y-8 my-4 md:my-8'>
          
          {/* Feature 1 */}
          <div>
            <div className='flex items-center gap-4 mb-3'>
              <div className='bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm min-w-[68px] text-center'>
                01
              </div>
              <h2 className='text-xl font-bold text-gray-900'>
                Track company-wide progress
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed pl-0 md:pl-[84px]'>
              See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className='flex items-center gap-4 mb-3'>
              <div className='bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm min-w-[68px] text-center'>
                02
              </div>
              <h2 className='text-xl font-bold text-gray-900'>
                Advanced built-in reports
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed pl-0 md:pl-[84px]'>
              Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div>
            <div className='flex items-center gap-4 mb-3'>
              <div className='bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm min-w-[68px] text-center'>
                03
              </div>
              <h2 className='text-xl font-bold text-gray-900'>
                Everything you need in one place
              </h2>
            </div>
            <p className='text-gray-600 leading-relaxed pl-0 md:pl-[84px]'>
              Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
            </p>
          </div>
         
        </div>
      </div>
    </section>
    </>
  )
}

export default Features