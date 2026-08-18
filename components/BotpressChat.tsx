'use client'

import Script from 'next/script'
import { useCallback, useState } from 'react'
import BotpressLauncher from './BotpressLauncher'

declare global {
  interface Window {
    botpress?: {
      init: (config: typeof botpressConfig) => void | Promise<void>
      on: (event: string, callback: () => void) => void
      toggle: () => void
    }
    __decasoftBotpressInitialized?: boolean
  }
}

const botpressConfig = {
  botId: 'e6c4fabb-08b4-4bc3-bc8d-d12f35a88734',
  clientId: 'e94be6cb-4df1-488d-b981-0c8230a19447',
  configuration: {
    version: 'v2',
    botName: 'DECASOFT',
    botAvatar: '',
    color: '#bf2227',
    website: {},
    email: {},
    phone: {},
    termsOfService: {},
    privacyPolicy: {},
    feedbackEnabled: true,
    footer: '[⚡ by Botpress](https://botpress.com/?from=webchat)',
    allowFileUpload: true,
    soundEnabled: true,
    conversationHistory: true,
    homePageEnabled: true,
    welcomeHeading: 'Hi there, how can we help?',
    welcomeSubtitle: 'Tap a starting point or ask in your own words.',
    conversationStartersEnabled: true,
    conversationStarters: [
      { id: 'get_quote', text: 'Get a quote', title: 'Get a quote', icon: 'wallet', enabled: true },
      {
        id: 'book_consultation', text: 'Book consultation', title: 'Book consultation',
        icon: 'calendar', enabled: true,
      },
      {
        id: 'services_faq', text: 'Our services', title: 'Our services',
        icon: 'sparkles', enabled: true,
      },
      { id: 'start_project', text: 'Start a project', title: 'Start a project', enabled: true },
    ],
    conversationStartersDisplayStyle: 'cards',
    citationsEnabled: true,
    agentPresenceEnabled: true,
  },
}

export default function BotpressChat() {
  const [isReady, setIsReady] = useState(false)

  const initializeBotpress = useCallback(() => {
    const botpress = window.botpress

    if (!botpress) return

    botpress.on('webchat:initialized', () => setIsReady(true))

    if (!window.__decasoftBotpressInitialized) {
      window.__decasoftBotpressInitialized = true
      void botpress.init(botpressConfig)
    }
  }, [])

  const toggleChat = useCallback(() => {
    if (isReady) window.botpress?.toggle()
  }, [isReady])

  return (
    <>
      <Script
        id="botpress-webchat"
        src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
        strategy="afterInteractive"
        onReady={initializeBotpress}
      />
      <BotpressLauncher isReady={isReady} onToggle={toggleChat} />
    </>
  )
}
