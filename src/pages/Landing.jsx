import { Link } from 'react-router-dom'
import { getBrands } from '../services/menuService'

export default function Landing() {
  const brands = getBrands()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Choose your kitchen</h1>
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li key={brand.id}>
            <Link to={`/${brand.id}`} className="underline">
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
