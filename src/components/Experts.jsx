import React from 'react'
import laptop from '../Assets/img/laptop.jpg';

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-[20%] my-10 md:grid grid-cols-2 '>
        <div className='col-span-1 w-[90%]'>
            <img src={laptop} alt="" className='m-7 w-[90%]'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold m-2'>Learn from experts</h1>
          <p className='m-2 text-justify'>
            To use Polygon ID Mobile SDK, we have created a Polygon ID SDK Plugin. This plugin helps you communicate with our Polygon ID Platform.  The following steps illustrate how to do initial setup to get things started. 
          </p>
          <button className='bg-black text-white rounded p-2 md:p-3 display inline w-[30%]'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts;