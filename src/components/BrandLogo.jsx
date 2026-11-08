export default function BrandLogo({ brand, size = 64 }) {
  const { logo, theme, name } = brand

  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        loading="eager"
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
    )
  }

  const words = name.split(' ')
  const firstLine = words[0]
  const secondLine = words.slice(1).join(' ')

  return (
    <div
      className="rounded-full flex flex-col items-center justify-center shrink-0 text-center px-1"
      style={{ width: size, height: size, background: theme.card, border: `2px solid ${theme.accent}` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme.accent}
        strokeWidth="1.4"
        style={{ width: size * 0.32, height: size * 0.32 }}
        aria-hidden="true"
      >
        <path d="M12 3c4 2 7 6 7 10a7 7 0 0 1-14 0c0-4 3-8 7-10Z" />
        <path d="M12 7v12" />
      </svg>
      <span
        className="font-serif font-bold uppercase leading-tight"
        style={{ color: theme.accent, fontSize: Math.max(size * 0.1, 8) }}
      >
        {firstLine}
      </span>
      {secondLine && (
        <span
          className="font-serif font-bold uppercase leading-tight"
          style={{ color: theme.accent, fontSize: Math.max(size * 0.1, 8) }}
        >
          {secondLine}
        </span>
      )}
    </div>
  )
}
