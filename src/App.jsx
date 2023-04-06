import Products from './components/Products'
import Filters from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { products as initialState } from './mocks/products.json'
import { useState } from 'react'

export default function App() {
  const [products] = useState(initialState)
  const { filterProducts, setFilters } = useFilters({ products })
  // console.log('render', filterProducts)

  return (
    <>
      <header className='mb-4  border-b-4  pb-2 text-3xl font-bold text-white'>
        <h1>Shopping Car 🛒 </h1>
      </header>
      <Filters setFilters={setFilters} />
      <Products products={filterProducts} />
    </>
  )
}
