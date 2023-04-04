import Products from './components/Products'
import { products } from './mocks/products.json'

export default function App() {
  return <Products products={products} />
}
