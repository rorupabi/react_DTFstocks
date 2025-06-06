import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className=' w-full bg-white py-16 px-4'>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="a laptop image" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00ad76] font-bold '>DATA ANALYTICS DASHBOARD </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Cenrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tempora quaerat placeat asperiores eligendi velit nemo explicabo temporibus quo tempore sed rerum quod voluptatibus ullam neque, voluptates ipsam necessitatibus aut!</p>
          <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:bg-gray-700 duration-150'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics