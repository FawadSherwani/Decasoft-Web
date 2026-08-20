export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale)

export function localizeHref(href: string, _locale: Locale) {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  const cleanHref = href.replace(/^\/(en|ar)(?=\/|$)/, '') || '/'
  return cleanHref
}

export function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|ar)(?=\/|$)/, '') || '/'
}
