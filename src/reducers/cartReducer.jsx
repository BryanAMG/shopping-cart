export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAN_CART: 'CLEAN_CART'
}

export const initialCart =
  JSON.parse(window.localStorage.getItem('productsCard')) || []

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = payload
      const productIndex = state.findIndex((item) => item.id === id)
      if (productIndex === -1) return [...state, { ...payload, quantity: 1 }]
      const newproducts = structuredClone(state)
      newproducts[productIndex].quantity += 1
      return newproducts
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = payload
      return state.filter((product) => product.id !== id)
    }
    case CART_ACTIONS.CLEAN_CART: {
      return []
    }
  }
  return state
}
