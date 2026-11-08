import { Link } from 'react-router-dom'
import { getBrands, getLanding } from '../services/menuService'
import BrandLogo from '../components/BrandLogo'
import useBodyTheme from '../hooks/useBodyTheme'

const LANDING_BG = '#F7EFE4'
const LANDING_TEXT = '#4A2A1A'
const LANDING_MUTED = '#7A5A48'

export default function Landing() {
  const brands = getBrands()
  const landing = getLanding()

  useBodyTheme(LANDING_BG, LANDING_TEXT)

  return (
    <div className="px-5 py-8">
      <p
        className="fade-up font-sans font-semibold text-xs uppercase tracking-[0.28em]"
        style={{ color: LANDING_MUTED }}
      >
        {landing.eyebrow}
      </p>
      <h1 className="fade-up font-serif font-bold text-[38px] leading-tight mt-2" style={{ '--delay': '70ms' }}>
        {landing.title}
      </h1>
      <p className="fade-up font-sans text-[15px] mt-2" style={{ color: LANDING_MUTED, '--delay': '140ms' }}>
        {landing.subtitle}
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {brands.map((brand, i) => (
          <Link
            key={brand.id}
            to={`/${brand.id}`}
            className="fade-up press-scale flex items-center gap-4 rounded-[24px] p-[18px]"
            style={{
              background: brand.theme.tint,
              border: `1px solid ${brand.theme.tintBorder}`,
              '--delay': `${210 + i * 70}ms`,
            }}
          >
            <BrandLogo brand={brand} size={88} />
            <div className="flex-1 min-w-0">
              <p className="font-serif font-bold text-[21px] leading-tight" style={{ color: brand.theme.text }}>
                {brand.name}
              </p>
              <p className="font-serif italic text-sm mt-0.5" style={{ color: brand.theme.muted }}>
                {brand.tagline}
              </p>
              <p className="font-sans font-semibold text-sm mt-1.5" style={{ color: brand.theme.accent }}>
                View menu →
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="fade-up mt-6 rounded-[18px] border-[1.5px] border-dashed p-4 text-center"
        style={{ borderColor: LANDING_TEXT, '--delay': '350ms' }}
      >
        <p className="font-sans text-sm" style={{ color: LANDING_TEXT }}>
          {landing.note}
        </p>
      </div>

      <p className="fade-up font-sans text-xs text-center mt-6 mb-4" style={{ color: LANDING_MUTED, '--delay': '420ms' }}>
        {landing.footer}
      </p>
    </div>
  )
}
