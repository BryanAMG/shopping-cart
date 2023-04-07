import { useState, createContext, useEffect, useMemo } from 'react'

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
  const totalMount = useMemo(() => {
    return cart.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    )
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalMount,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
