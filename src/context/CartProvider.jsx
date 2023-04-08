import { createContext, useEffect, useReducer } from 'react'
import { CART_ACTIONS, cartReducer, initialCart } from '../reducers/cartReducer'

export const CartContext = createContext()

function useCartReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  useEffect(() => {
    window.localStorage.setItem('productsCard', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = (id) =>
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: { id }
    })

  const clearCart = () =>
    dispatch({
      type: CART_ACTIONS.CLEAN_CART
    })

  return { cart, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
