import { Navigate, useParams } from 'react-router-dom'
import { getBrand } from '../services/menuService'

export default function BrandMenu() {
  const { brandId } = useParams()
  const brand = getBrand(brandId)

  if (!brand) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{brand.name}</h1>
      {brand.categories.map((category) => (
        <div key={category.id} className="mb-4">
          <h2 className="text-lg font-medium mb-2">{category.name}</h2>
          <ul className="space-y-1">
            {category.items.map((item) => (
              <li key={item.id}>
                {item.name} — ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
