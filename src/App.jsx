import Products from './components/Products'
import Filters from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { products as initialState } from './mocks/products.json'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartProvider'

export default function App() {
  const { filterProducts } = useFilters()
  // console.log('render', filterProducts)
  const newProducts = filterProducts(initialState)
  return (
    <>
      <CartProvider>
        <Cart />
        <header className='mb-4  border-b-4  pb-2 text-3xl font-bold text-white'>
          <h1>Shopping Cart 🛒 </h1>
        </header>
        <Filters />
        <Products products={newProducts} />
      </CartProvider>
    </>
  )
}
