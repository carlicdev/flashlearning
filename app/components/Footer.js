import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='w-full mt-[50px]'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#60a5fa" fill-opacity="1" d="M0,96L34.3,122.7C68.6,149,137,203,206,186.7C274.3,171,343,85,411,64C480,43,549,85,617,122.7C685.7,160,754,192,823,181.3C891.4,171,960,117,1029,112C1097.1,107,1166,149,1234,154.7C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
      <div className='w-full bg-blue-400 py-5'>
        <div className='max-w-7xl mx-auto w-full flex flex-wrap'>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <div className='flex'>
              <Logo />
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'></div>
          <div className='w-full md:w-1/2 lg:w-1/4'></div>
          <div className='w-full md:w-1/2 lg:w-1/4'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer