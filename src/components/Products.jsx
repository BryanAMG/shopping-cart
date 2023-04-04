import { AddToCartIcon } from './Icons'

export default function Products({ products }) {
  return (
    <main className='flex w-full items-center justify-center '>
      <ul className='grid gap-4 text-white md:grid-cols-2 '>
        {products.slice(0, 10).map((product) => (
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
            <button className='rounded-lg bg-slate-500 px-4 py-2 hover:bg-slate-600'>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
