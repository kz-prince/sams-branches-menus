import { Link } from 'react-router-dom'

export default function BackLink() {
  return (
    <Link
      to="/"
      className="press-scale inline-flex items-center gap-1.5 rounded-full h-11 px-4 font-sans font-semibold text-sm bg-[var(--card)] border border-[var(--line)] text-[var(--text)]"
    >
      ← All kitchens
    </Link>
  )
}
