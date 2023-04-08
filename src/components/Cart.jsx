import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'
import { useState, useMemo } from 'react'

export function Cart() {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const { cart, clearCart, addToCart } = useCart()
  const totalMount = useMemo(() => {
    return cart.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    )
  }, [cart])
  return (
    <>
      <button
        onClick={() => setIsOpenCart(!isOpenCart)}
        className={` ${
          isOpenCart ? 'fixed' : 'absolute'
        } right-5 top-5 z-50 flex h-8  w-8 items-center justify-center  rounded-full bg-sky-500 text-white transition hover:scale-110`}
      >
        <CartIcon />
      </button>

      <aside
        className={`fixed ${
          isOpenCart ? 'right-0' : '-right-full'
        } top-0 z-40 h-screen w-52  overflow-y-auto bg-black px-4 pb-4 pt-14 transition-all duration-500  scrollbar-thin scrollbar-track-gray-100  scrollbar-thumb-slate-500 scrollbar-thumb-rounded-full `}
      >
        <ul className='flex flex-col gap-3 '>
          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <CartItem key={product.id} {...product}>
                  <button
                    className='rounded-md bg-slate-900 px-2'
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </CartItem>
              ))}
            </>
          ) : (
            <p className='text-white'> No hay objetos </p>
          )}
        </ul>
        <div className='flex items-center justify-between text-white '>
          <button
            className='mt-2 rounded-md p-1 text-white hover:outline hover:outline-2 hover:outline-slate-400'
            onClick={clearCart}
          >
            <ClearCartIcon />
          </button>
          <span>Total : ${totalMount}</span>
        </div>
      </aside>
    </>
  )
}
