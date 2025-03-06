import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-14 md:px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/*single*/}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-24 mx-auto mt-[-3rem] bg-white' src={single} alt="single image" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className=' text-center text-4xl font-bold'>$149</p>
          <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>

        {/*double*/}
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-24 mx-auto mt-[-3rem] bg-white' src={double} alt="double image" />
          <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
          <p className=' text-center text-4xl font-bold'>$219</p>
          <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted Users</p>
            <p className='py-2 border-b mx-8'>Send up to 3 GB</p>
          </div>
          <button className='bg-[#000000] text-[#00ad76] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>

        {/*triple*/}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-24 mx-auto mt-[-3rem] bg-white' src={triple} alt="triple image" />
          <h2 className='text-2xl font-bold text-center py-8'>Many Users</h2>
          <p className=' text-center text-4xl font-bold'>$459</p>
          <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>12 TB Storage</p>
            <p className='py-2 border-b mx-8'>6 Granted Users</p>
            <p className='py-2 border-b mx-8'>Send up to 8 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
