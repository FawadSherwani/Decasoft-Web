import Script from 'next/script'
import BotpressLauncher from './BotpressLauncher'

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
            const setImportant = (element, property, value) => {
              element?.style.setProperty(property, value, 'important')
            }

            const applyLauncherStyles = () => {
              document
                .querySelectorAll('iframe.bpClose[title*="Botpress"], iframe.bpClose[src*="botpress"]')
                .forEach((frame) => {
                  setImportant(frame, 'width', '35px')
                  setImportant(frame, 'height', '35px')
                  setImportant(frame, 'min-width', '35px')
                  setImportant(frame, 'min-height', '35px')
                  setImportant(frame, 'max-width', '35px')
                  setImportant(frame, 'max-height', '35px')
                  setImportant(frame, 'bottom', '30px')
                  setImportant(frame, 'opacity', '0')
                  setImportant(frame, 'pointer-events', 'none')
                })

              document.querySelectorAll('.bpFabWrapper').forEach((wrapper) => {
                setImportant(wrapper, 'bottom', '30px')
                setImportant(wrapper, 'margin-bottom', '0')
              })

              document
                .querySelectorAll('.bpFab, .bpFabContainer, button[class*="bpFab"]')
                .forEach((launcher) => {
                  setImportant(launcher, 'width', '35px')
                  setImportant(launcher, 'height', '35px')
                  setImportant(launcher, 'min-width', '35px')
                  setImportant(launcher, 'min-height', '35px')
                  setImportant(launcher, 'max-width', '35px')
                  setImportant(launcher, 'max-height', '35px')
                  setImportant(launcher, 'padding', '0')
                })

              document.querySelectorAll('.bpFabIcon, .bpFabImage').forEach((icon) => {
                setImportant(icon, 'width', '18px')
                setImportant(icon, 'height', '18px')
              })
            }

            const configureWebchat = () => {
              window.botpress?.config({
                configuration: { color: '#bf2227' }
              })
              applyLauncherStyles()
            }

            const observer = new MutationObserver(applyLauncherStyles)
            observer.observe(document.body, {
              attributes: true,
              attributeFilter: ['class'],
              childList: true,
              subtree: true
            })

            let attempts = 0
            const waitForBotpress = window.setInterval(() => {
              attempts += 1
              applyLauncherStyles()

              if (window.botpress?.on) {
                window.clearInterval(waitForBotpress)
                window.botpress.on('webchat:initialized', configureWebchat)
                configureWebchat()
              } else if (attempts >= 100) {
                window.clearInterval(waitForBotpress)
              }
            }, 100)
          })()
        `}
      </Script>
      <BotpressLauncher />
    </>
  )
}
