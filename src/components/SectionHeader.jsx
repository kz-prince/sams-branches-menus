export default function SectionHeader({ category }) {
  const items = category.items
  const allSamePrice = items.length > 0 && items.every((item) => item.price === items[0].price)

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-serif font-bold uppercase text-[26px] text-[var(--accent)] leading-tight">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z" />
          </svg>
          {category.name}
        </h2>
        {allSamePrice && (
          <span className="shrink-0 rounded-full bg-[var(--tint)] text-[var(--accent)] font-sans font-semibold text-xs px-3 py-1.5">
            AED {items[0].price} each
          </span>
        )}
      </div>
      <svg viewBox="0 0 360 8" className="w-full mt-2 text-[var(--accent)]" aria-hidden="true">
        <path
          d="M2 6 Q 20 1 40 6 T 80 6 T 120 6 T 160 6 T 200 6 T 240 6 T 280 6 T 320 6 T 358 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
