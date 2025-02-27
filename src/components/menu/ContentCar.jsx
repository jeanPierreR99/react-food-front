import React, { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import CardCar from './CardCar'
import useCartStore from '../../sotre/useCartStorage'

function ContentCar ({ visible, setVisible }) {
  const { cart, clearCart } = useCartStore()
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConfirm = () => {
    setIsModalOpen(true)
  }

  const confirmPurchase = () => {
    clearCart()
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        className={`fixed overflow-y-auto md:max-h-[100vh] delay-200 duration-300 ${
          visible ? 'md:right-[15px]' : '-right-[650px]'
        } top-0 z-[999] bg-[#2b272787] backdrop-blur-sm w-full md:w-[350px] h-auto flex flex-col p-2 pb-10`}
      >
        <div className='flex tracking-widest relative gap-2 justify-center items-center py-2 text-yellow-300'>
          <FaShoppingBag className='text-3xl' />
          <span>Carrito</span>
          <button
            className='absolute left-0 top-0 text-gray-300 text-xl'
            onClick={() => setVisible(false)}
          >
            x
          </button>
        </div>

        {cart.length > 0 ? (
          cart.map((item, index) => <CardCar key={index} {...item} />)
        ) : (
          <p className='text-yellow-50 text-center my-4'>
            Tu carrito está vacío.
          </p>
        )}

        <span className='text-yellow-50 my-2 text-sm font-bold tracking-widest'>
          TOTAL: S/ {total.toFixed(2)}
        </span>

        <button
          className='bg-yellow-200 hover:bg-yellow-300 tracking-widest rounded-md py-1 text-gray-800 font-semibold'
          onClick={handleConfirm}
        >
          CONFIRMAR
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm text-center'>
            <h2 className='text-lg font-bold text-gray-800'>
              ✅ ¡Compra confirmada!
            </h2>
            <p className='text-gray-600 my-2'>
              Gracias por tu compra. Tu pedido está en camino. 🚀
            </p>
            <button
              onClick={confirmPurchase}
              className='bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded-md text-gray-800 font-semibold mt-4'
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContentCar
