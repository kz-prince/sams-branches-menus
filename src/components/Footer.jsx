export default function Footer({ brand }) {
  const { footerNote, footerSub, allergyNote, instagram } = brand

  if (!footerNote && !footerSub && !allergyNote && !instagram) {
    return null
  }

  return (
    <div className="mt-6 mb-8 rounded-[18px] border-[1.5px] border-dashed border-[var(--accent)] p-4 text-center">
      {footerNote && <p className="font-serif font-bold text-lg text-[var(--accent)]">{footerNote}</p>}
      {footerSub && <p className="font-sans text-[13px] text-[var(--muted)] mt-1">{footerSub}</p>}
      {allergyNote && <p className="font-sans text-xs text-[var(--muted)] mt-2">{allergyNote}</p>}
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 font-sans font-semibold text-sm text-[var(--accent)] underline"
        >
          Follow us on Instagram
        </a>
      )}
    </div>
  )
}
