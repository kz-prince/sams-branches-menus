export default function GridItem({ item, index = 0 }) {
  return (
    <div className="fade-up flex flex-col items-center text-center gap-1" style={{ '--delay': `${index * 70}ms` }}>
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`w-[104px] h-[104px] rounded-full object-cover border-[3px] border-[var(--card)] ${item.soldOut ? 'grayscale opacity-60' : ''}`}
        />
        {item.soldOut && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-[var(--card)] text-[var(--text)] text-[11px] font-sans font-semibold px-2 py-0.5 border border-[var(--line)]">
            Sold out
          </span>
        )}
      </div>
      <p className="font-serif font-medium text-[15px] leading-tight">{item.name}</p>
      <p className="font-serif italic text-xs text-[var(--muted)] leading-tight">{item.desc}</p>
      <p className="font-serif font-bold text-[22px] text-[var(--accent)] leading-tight">AED {item.price}</p>
    </div>
  )
}
