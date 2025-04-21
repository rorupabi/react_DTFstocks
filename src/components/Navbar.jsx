import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white'>
      <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>DtF.</h1>
      <ul className=' hidden md:flex '>
        <li className=' p-4 cursor-pointer font-semibold text-white hover:text-gray-300 duration-800'>Home</li>
        <li className=' p-4 cursor-pointer font-semibold text-white hover:text-gray-300 duration-800'>Company</li>
        <li className=' p-4 cursor-pointer font-semibold text-white hover:text-gray-300 duration-800'>Resources</li>
        <li className=' p-4 cursor-pointer font-semibold text-white hover:text-gray-300 duration-800'>About</li>
        <li className=' p-4 cursor-pointer font-semibold text-white hover:text-gray-300 duration-800'>Contact</li>
      </ul>
      <div onClick={handleNav} className=' block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={!nav ? 'fixed lg:hidden left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4'>DtF.</h1>
        <ul className=' uppercase p-4'>
          <li className=' p-4 border-b border-gray-600 cursor-pointer text-white hover:text-gray-800 font-semibold'>Home</li>
          <li className=' p-4 border-b border-gray-600 cursor-pointer text-white hover:text-gray-800 font-semibold'>Company</li>
          <li className=' p-4 border-b border-gray-600 cursor-pointer text-white hover:text-gray-800 font-semibold'>Resources</li>
          <li className=' p-4 border-b border-gray-600 cursor-pointer text-white hover:text-gray-800 font-semibold'>About</li>
          <li className=' p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar