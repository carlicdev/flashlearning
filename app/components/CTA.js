import React from 'react'
import Logo from './Logo'

const CTA = () => {
  return (
    <div className='max-w-7xl w-full mx-auto flex flex-col p-10 pb-20 border border-gray-200 rotate-3 shadow-xl my-[150px]'>
        <div className='flex mb-10 '>
            <Logo />
        </div>
        <h4 className='text-5xl font-black text-gray-800 mb-10 text-center mt-10'>Aprender nunca fue tan divertido. </h4>
        <div className='flex gap-4 flex-wrap justify-center'>
          <button className='px-5 py-3 bg-green-400 text-white rounded-full shadow-lg'>
            Prueba Gratis
          </button>
          <button className='px-5 py-3 bg-blue-400 text-white rounded-full shadow-lg'>
            Resgistrarse
          </button>
        </div>
    </div>
  )
}

export default CTA