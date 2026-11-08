export default function ListItem({ item, index = 0 }) {
  const hasPhoto = Boolean(item.image)
  const hasNutrition =
    item.kcal != null && item.protein != null && item.carbs != null && item.fat != null

  return (
    <div
      className="fade-up rounded-[20px] border border-[var(--line)] bg-[var(--card)] p-3.5"
      style={{ '--delay': `${index * 70}ms` }}
    >
      <div className="flex items-start gap-3">
        {hasPhoto && (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`w-[84px] h-[84px] rounded-full object-cover shrink-0 ${item.soldOut ? 'grayscale opacity-60' : ''}`}
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-serif font-medium text-base leading-tight">{item.name}</p>
            <p className="font-serif font-bold text-xl text-[var(--accent)] leading-tight shrink-0">
              AED {item.price}
            </p>
          </div>
          {item.desc && (
            <p className="font-serif italic text-[13px] text-[var(--muted)] mt-1">{item.desc}</p>
          )}
          {item.soldOut && (
            <span className="inline-block mt-1.5 rounded-full bg-[var(--line)] text-[var(--text)] text-[11px] font-sans font-semibold px-2 py-0.5">
              Sold out
            </span>
          )}
        </div>
      </div>
      {hasNutrition && (
        <div className="grid grid-cols-4 gap-2 mt-3">
          {[
            { value: item.kcal, label: 'kcal' },
            { value: item.protein, label: 'protein' },
            { value: item.carbs, label: 'carbs' },
            { value: item.fat, label: 'fat' },
          ].map((n) => (
            <div key={n.label} className="rounded-xl bg-[var(--tint)] text-center py-1.5">
              <div className="font-sans font-semibold text-[13px] text-[var(--text)]">{n.value}</div>
              <div className="font-sans text-[10px] text-[var(--muted)]">{n.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
