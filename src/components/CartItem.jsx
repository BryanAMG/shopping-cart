export function CartItem({ thumbnail, title, quantity, price, children }) {
  return (
    <li className='flex flex-col gap-2 border-b border-sky-200 pb-2 text-white'>
      <div>
        <img
          src={thumbnail}
          alt={title}
          className='aspect-video w-full rounded-sm'
        />
        <strong>
          {title} - <span className='text-gray-500'>${price}</span>
        </strong>
      </div>
      <div className='flex justify-center gap-2'>
        <span>Qty : {quantity} </span>
        {children}
      </div>
    </li>
  )
}
