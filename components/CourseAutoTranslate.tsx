'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from './LanguageProvider'

const translatedAttributes = ['aria-label', 'alt', 'placeholder', 'title'] as const

export default function CourseAutoTranslate() {
  const markerRef = useRef<HTMLSpanElement>(null)
  const originalTextRef = useRef(new WeakMap<Text, string>())
  const originalAttributesRef = useRef(new WeakMap<Element, Map<string, string>>())
  const { locale, isRtl, t, href } = useLanguage()

  useEffect(() => {
    const root = markerRef.current?.parentElement
    if (!root) return

    root.dir = isRtl ? 'rtl' : 'ltr'
    root.classList.toggle('course-localized-rtl', isRtl)

    const translateText = (node: Text) => {
      const originals = originalTextRef.current
      if (!originals.has(node)) originals.set(node, node.nodeValue ?? '')
      const original = originals.get(node) ?? ''
      const value = original.trim().replace(/\s+/g, ' ')
      if (!value) return
      const projectCount = value.match(/^Showing (\d+)[–-](\d+) of (\d+) projects$/)
      const translated = locale === 'ar'
        ? projectCount
          ? `عرض ${projectCount[1]}–${projectCount[2]} من ${projectCount[3]} مشاريع`
          : t(value)
        : value
      const start = original.match(/^\s*/)?.[0] ?? ''
      const end = original.match(/\s*$/)?.[0] ?? ''
      node.nodeValue = `${start}${translated}${end}`
    }

    const translateElement = (element: Element) => {
      const attributeStore = originalAttributesRef.current
      let originals = attributeStore.get(element)
      if (!originals) {
        originals = new Map<string, string>()
        attributeStore.set(element, originals)
      }
      for (const attribute of translatedAttributes) {
        const current = element.getAttribute(attribute)
        if (current && !originals.has(attribute)) originals.set(attribute, current)
        const original = originals.get(attribute)
        if (original) {
          const value = original.trim().replace(/\s+/g, ' ')
          element.setAttribute(attribute, locale === 'ar' ? t(value) : original)
        }
      }
      if (element instanceof HTMLAnchorElement) {
        const current = element.getAttribute('href')
        if (current && !originals.has('href')) originals.set('href', current)
        const original = originals.get('href')
        if (original?.startsWith('/')) {
          element.setAttribute('href', locale === 'ar' ? href(original) : original.replace(/^\/ar(?=\/|$)/, '/'))
        }
      }
    }

    const translateTree = (target: Node) => {
      if (target.nodeType === Node.TEXT_NODE) translateText(target as Text)
      if (target.nodeType === Node.ELEMENT_NODE) translateElement(target as Element)
      const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT)
      let node = walker.nextNode()
      while (node) {
        if (node.nodeType === Node.TEXT_NODE) translateText(node as Text)
        else translateElement(node as Element)
        node = walker.nextNode()
      }
    }

    translateTree(root)
    const observer = new MutationObserver((records) => {
      for (const record of records) for (const node of record.addedNodes) translateTree(node)
    })
    observer.observe(root, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [href, isRtl, locale, t])

  return <>
    <style jsx global>{`
      .course-localized-rtl {
        text-align: right;
      }
      .course-localized-rtl .text-left {
        text-align: right !important;
      }
      .course-localized-rtl .text-right {
        text-align: left !important;
      }
      .course-localized-rtl .left-3 {
        left: auto !important;
        right: 0.75rem !important;
      }
      .course-localized-rtl svg.lucide-arrow-right,
      .course-localized-rtl svg.lucide-arrow-left,
      .course-localized-rtl svg.lucide-chevron-right,
      .course-localized-rtl svg.lucide-chevron-left {
        transform: scaleX(-1);
      }
      .course-localized-rtl input,
      .course-localized-rtl textarea,
      .course-localized-rtl select {
        text-align: right;
      }
    `}</style>
    <span ref={markerRef} hidden aria-hidden="true" />
  </>
}
