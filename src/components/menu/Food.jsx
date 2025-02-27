import React from 'react'
import useCartStore from '../../sotre/useCartStorage'

function Food ({ name, description, content, url, price }) {
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div className='food flex flex-col md:flex-row w-full'>
      <div className='content-image left md:w-6/12 w-12/12 h-[300px] md:h-[500px] relative'>
        <img src={url} alt={name} className='w-full h-full' />
        <span className='price absolute md:top-[-30px] top-[10px] right-[10px] md:right-[-30px] text-2xl md:text-4xl font-light bg-red-700 border-4 text-white h-[100px] w-[100px] md:h-[150px] md:w-[150px] text-center flex justify-center items-center rounded-full'>
          S/ {price}
        </span>
      </div>
      <div className='right w-12/12 md:w-6/12 h-full m-auto flex md:gap-5 gap-2 flex-col p-6 md:p-12 order-2 md:order-none'>
        <span className='font-bold text-xs md:text-lg leading-8 text-gray-600 tracking-widest bg-gray-50 px-2 w-fit rounded-md'>
          {name}
        </span>
        <span className='font-light text-gray-100 text-xs md:text-sm'>
          {description}
        </span>
        <span className='font-bold leading-8 text-gray-300 tracking-widest text-sm'>
          CONTENIDO:
        </span>
        <span className='font-light text-yellow-100 text-xs md:text-sm'>
          {content}
        </span>
        <button
          className='flex items-center justify-center bg-yellow-200 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-yellow-300 transition duration-300 w-fit'
          onClick={() => addToCart({ name, price, url })}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-1'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5 5a3 3 0 016 0h8a1 1 0 110 2h-1.17l-1.083 4H7.253l-1.084-4H5a1 1 0 110-2zm6 1a2 2 0 00-2 2h4a2 2 0 00-2-2z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M14 11a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h8a3 3 0 003-3v-3a1 1 0 00-1-1zm-1 5H6v-2h7v2z'
              clipRule='evenodd'
            />
          </svg>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default Food
