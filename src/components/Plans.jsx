import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5'>
            <div className='shadow-xl h-[400px] my-2 hover:scale-105 duration-500 rounded'>One</div>
            <div className='shadow-xl h-[400px] my-2 bg-gray-100 hover:scale-105 duration-500 rounded'>Two</div>
            <div className='shadow-xl h-[400px] my-2 hover:scale-105 duration-500 rounded'>Three</div>
        </div>
    </div>
  )
}

export default Plans;