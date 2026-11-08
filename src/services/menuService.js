import menu from '../data/menu.json'

export function getBrands() {
  return menu.brands
}

export function getBrand(id) {
  return menu.brands.find((brand) => brand.id === id)
}
