'use client'

export default function BotpressLauncher() {
  const toggleChat = () => {
    const botpress = (
      window as Window & {
        botpress?: { toggle?: () => void; open?: () => void }
      }
    ).botpress

    if (botpress?.toggle) botpress.toggle()
    else botpress?.open?.()
  }

  return (
    <button
      type="button"
      onClick={toggleChat}
      className="fixed bottom-[30px] right-6 z-[60] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#bf2227] p-0 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#bf2227]"
      aria-label="Open AI chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-1-1.73V6a2 2 0 0 1 2-2Z" />
      </svg>
    </button>
  )
}
