import Script from 'next/script'
import BotpressLauncher from './BotpressLauncher'

const botpressConfig = {
  botId: 'e6c4fabb-08b4-4bc3-bc8d-d12f35a88734',
  clientId: 'e94be6cb-4df1-488d-b981-0c8230a19447',
  toggleChatId: 'bp-toggle-chat',
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
  return (
    <>
      <Script src="https://cdn.botpress.cloud/webchat/v5.0/inject.js" strategy="afterInteractive" />
      <Script id="botpress-config" strategy="afterInteractive">
        {`window.botpress.init(${JSON.stringify(botpressConfig)})`}
      </Script>
      <BotpressLauncher />
    </>
  )
}
