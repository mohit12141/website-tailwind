import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[24px]'>Learn With Us</div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] text-white md:p-[24px]'>
                I'm a 
                <Typed
                    className='pl-3'
                    strings={['Web Developer', 'Java Developer', 'Software Developer']}
                    typeSpeed={100} loop={true} backSpeed={50}
                />
            </div>
            <button className='bg-black text-white rounded p-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner;