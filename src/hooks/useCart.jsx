import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

export function useCart() {
  const dataCart = useContext(CartContext)
  if (dataCart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return dataCart
}
