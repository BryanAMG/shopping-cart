import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

const initialCart =
  JSON.parse(window.localStorage.getItem('productsCard')) || []

export function CartProvider({ children }) {
  const [cart, setCart] = useState(initialCart)
  useEffect(() => {
    window.localStorage.setItem('productsCard', JSON.stringify(cart))
  }, [cart])
  const addToCart = (product) => {
    const index = cart.findIndex((p) => p.id === product.id)
    if (index === -1) return setCart([...cart, { ...product, quantity: 1 }])
    const newproducts = [...cart] // o structuredClone(cart)
    newproducts[index].quantity += 1
    setCart(newproducts)
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id))
  }

  const clearCart = () => {
    if (!cart) return
    setCart([])
  }

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
