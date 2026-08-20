'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function CourseCaptcha({ onVerify, resetKey }: { onVerify: (token: string) => void; resetKey: number }) {
  const { locale } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<number | null>(null)
  const [error, setError] = useState(false)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const render = () => {
    const grecaptcha = (window as any).grecaptcha
    if (!grecaptcha || !containerRef.current || !siteKey || widgetRef.current !== null) return
    grecaptcha.ready(() => {
      if (!containerRef.current || widgetRef.current !== null) return
      try {
        widgetRef.current = grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => { onVerify(token); setError(false) },
          'expired-callback': () => onVerify(''),
          'error-callback': () => { onVerify(''); setError(true) },
          theme: 'light',
        })
      } catch { setError(true) }
    })
  }

  useEffect(() => { render() }, [locale, siteKey])
  useEffect(() => {
    const grecaptcha = (window as any).grecaptcha
    if (grecaptcha && widgetRef.current !== null) grecaptcha.reset(widgetRef.current)
    onVerify('')
  }, [resetKey])

  if (!siteKey) return <p className="text-xs text-red-500">Captcha is not configured.</p>
  return (
    <div className="min-h-[78px] overflow-x-auto">
      <Script src={`https://www.google.com/recaptcha/api.js?render=explicit&hl=${locale}`} strategy="afterInteractive" onReady={render} onError={() => setError(true)} />
      <div ref={containerRef} />
      {error && <p className="mt-2 text-xs text-red-500">Captcha could not load. Please try again.</p>}
    </div>
  )
}
