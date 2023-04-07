import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export default function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='flex w-full items-center justify-center px-4 '>
      <ul className='grid gap-4 text-white md:grid-cols-2 '>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li
              key={product.id}
              className='flex flex-col items-center gap-4 bg-black p-4 shadow-sm'
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className='aspect-video w-full rounded-lg object-cover'
              />
              <div>
                <strong className='text-lg'>
                  {product.title} -{' '}
                  <span className='opacity-80'>${product.price}</span>
                </strong>
              </div>
              <button
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product.id)
                    : addToCart(product)
                }}
                className={`relative rounded-lg ${
                  isProductInCart
                    ? 'bg-red-700 hover:bg-red-800  hover:outline-cyan-500'
                    : 'bg-slate-500  hover:bg-slate-600 hover:outline-blue-500 '
                } px-4 py-2  outline outline-0  hover:outline-2 `}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
