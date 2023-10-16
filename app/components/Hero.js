import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mt-10'>
        <div className='flex max-w-7xl w-full mx-auto pt-32 pb-5'>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-7xl font-black text-gray-800 mb-5'>Aprende de manera <span className='text-green-400'>efectiva</span> y <span className='text-blue-400'>divertida</span>.</h2>
                <p className='text-3xl mb-5 text-gray-800'>Domina tus materias con flashcards y cuestionarios personalizados.</p>
                <div className='flex gap-4 flex-wrap'>
                  <button className='px-5 py-3 bg-green-400 text-white rounded-full shadow-lg'>
                    Prueba Gratis
                  </button>
                  <button className='px-5 py-3 bg-blue-400 text-white rounded-full shadow-lg'>
                    Resgistrarse
                  </button>
                </div>
            </div>
            <div className='w-full lg:w-1/2'></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#4ade80" fill-opacity="1" d="M0,96L34.3,112C68.6,128,137,160,206,165.3C274.3,171,343,149,411,165.3C480,181,549,235,617,218.7C685.7,203,754,117,823,101.3C891.4,85,960,139,1029,149.3C1097.1,160,1166,128,1234,122.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Hero