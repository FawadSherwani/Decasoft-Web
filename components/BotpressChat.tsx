import Script from 'next/script'

const botpressConfigUrl = process.env.BOTPRESS_CONFIG_URL

export default function BotpressChat() {
  if (!botpressConfigUrl) return null

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src={botpressConfigUrl}
        strategy="afterInteractive"
      />
      <Script id="botpress-brand-theme" strategy="afterInteractive">
        {`
          (() => {
            const applyBrandTheme = () => {
              window.botpress?.config({
                configuration: { color: '#bf2227' }
              })
            }

            if (window.botpress?.on) {
              window.botpress.on('webchat:initialized', applyBrandTheme)
              setTimeout(applyBrandTheme, 1000)
            }
          })()
        `}
      </Script>
    </>
  )
}
