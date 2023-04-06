import { useMemo, useId } from 'react'
import { products } from '../mocks/products.json'
import { useFiltersData } from '../context/FiltersProvider'

export default function Filters() {
  const { handleChange, filters: filtersForm } = useFiltersData()

  // indentificador unico en toda la aplicación
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const { category, minPrice } = filtersForm

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    []
  )

  // const categories = useMemo(
  //   () =>
  //     products
  //       .filter((product, index, array) => {
  //         return (
  //           array.findIndex((p) => p.category === product.category) === index
  //         )
  //       })
  //       .map((p) => p.category),
  //   []
  // )
  return (
    <section className='my-4 flex flex-col items-center justify-between gap-4 text-white md:flex-row [&>div]:flex [&>div]:items-center [&>div]:gap-3'>
      <div>
        <label htmlFor='minPrice'>Precio a partir de </label>
        <input
          type='range'
          onChange={handleChange}
          id={minPriceFilterId}
          name='minPrice'
          min={0}
          step={10}
          max={1000}
          value={minPrice}
          className='h-2 appearance-none rounded-lg bg-[#000000c1]'
        />
        <span> ${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoria</label>
        <select
          id={categoryFilterId}
          name='category'
          value={category}
          onChange={handleChange}
          className='rounded-md border-2 bg-[#000000c1] text-white  outline-none'
        >
          <option value='all'>Todas</option>
          {categories.map((category) => (
            <option key={category} value={category} className='capitalize'>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
