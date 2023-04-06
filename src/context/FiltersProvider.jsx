import { createContext, useState } from 'react'

export const filterContext = createContext()

export default function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filters }
    newFilters[name] = value
    setFilters(newFilters)
  }

  return (
    <filterContext.Provider
      value={{
        filters,
        handleChange
      }}
    >
      {children}
    </filterContext.Provider>
  )
}
