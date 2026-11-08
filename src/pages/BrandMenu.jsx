import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getBrand } from '../services/menuService'
import useBodyTheme from '../hooks/useBodyTheme'
import BackLink from '../components/BackLink'
import BrandLogo from '../components/BrandLogo'
import SectionHeader from '../components/SectionHeader'
import GridItem from '../components/GridItem'
import ListItem from '../components/ListItem'
import Footer from '../components/Footer'

export default function BrandMenu() {
  const { brandId } = useParams()
  const brand = getBrand(brandId)

  useBodyTheme(brand?.theme.bg ?? '#F7EFE4', brand?.theme.text ?? '#4A2A1A')

  useEffect(() => {
    document.title = brand ? `${brand.name} · Menu` : "Sam's Kitchens"
  }, [brand])

  if (!brand) {
    return <Navigate to="/" replace />
  }

  const { theme } = brand

  const themeVars = {
    '--bg': theme.bg,
    '--card': theme.card,
    '--line': theme.line,
    '--accent': theme.accent,
    '--text': theme.text,
    '--muted': theme.muted,
    '--tint': theme.tint,
    '--tintBorder': theme.tintBorder,
  }

  let itemIndex = 0

  return (
    <div className="px-5 py-6" style={themeVars}>
      <BackLink />

      <div className="flex flex-col items-center text-center mt-6">
        <BrandLogo brand={brand} size={104} />
        <h1 className="font-serif font-bold text-[34px] text-[var(--accent)] leading-tight mt-3">
          {brand.name}
        </h1>
        <p className="font-serif italic text-sm text-[var(--muted)] mt-1">{brand.tagline}</p>
      </div>

      {brand.categories.length === 0 ? (
        <div className="mt-8 rounded-[20px] border border-[var(--line)] bg-[var(--card)] p-6 text-center">
          <p className="font-serif font-medium text-base text-[var(--text)]">
            Menu coming soon — ask our team at the counter.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-7">
          {brand.categories.map((category) => (
            <div key={category.id}>
              <SectionHeader category={category} />
              {brand.layout === 'grid' ? (
                <div className="grid grid-cols-3 gap-[10px]">
                  {category.items.map((item) => {
                    const i = itemIndex++
                    return <GridItem key={item.id} item={item} index={i} />
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {category.items.map((item) => {
                    const i = itemIndex++
                    return <ListItem key={item.id} item={item} index={i} />
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <Footer brand={brand} />
    </div>
  )
}
