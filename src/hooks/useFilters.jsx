import { useFiltersData } from '../context/FiltersProvider'

export function useFilters({ products }) {
  const { filters, setFilters } = useFiltersData()
  // tendremos que memorizarlo :V
  const filterProducts = products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    )
  })

  return {
    filters,
    filterProducts,
    setFilters
  }
}
