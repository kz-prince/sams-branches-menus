import { useEffect } from 'react'

export default function useBodyTheme(bg, text) {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = bg
    document.body.style.color = text
    return () => {
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
    }
  }, [bg, text])
}
