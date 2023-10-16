import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 bg-white'>
      <div className='max-w-7xl w-full mx-auto flex border-b border-gray-200 py-4'>
        <div className='ml-0 mr-auto'>
          <Logo />
        </div>

        <div className='mr-0 ml-auto'>
          <button className='px-7 py-3 bg-blue-400 text-white rounded-full shadow-lg'>
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar