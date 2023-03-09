import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
            <div className='text-3xl font-bold'>
                WsCube Tech
            </div>
            <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
            <ul className='hidden md:flex text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>Resource</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header