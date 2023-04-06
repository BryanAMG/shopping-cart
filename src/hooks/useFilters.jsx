import { useContext } from 'react'
import { filterContext } from '../context/FiltersProvider'

export function useFilters() {
  const { filters, handleChange } = useContext(filterContext)
  // tendremos que memorizarlo :V
  const filterProducts = (products) =>
    products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })

  return {
    filters,
    filterProducts,
    handleChange
  }
}
