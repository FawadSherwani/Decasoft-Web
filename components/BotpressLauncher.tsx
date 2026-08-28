type BotpressLauncherProps = {
  isReady: boolean
  isLoading: boolean
  onToggle: () => void
}

export default function BotpressLauncher({ isReady, isLoading, onToggle }: BotpressLauncherProps) {
  return (
    <button
      dir="ltr"
      data-floating-control="chat"
      id="bp-toggle-chat"
      type="button"
      onClick={onToggle}
      className="group fixed bottom-[30px] z-[60] flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#bf2227] p-0 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#bf2227]"
      style={{ right: '1.5rem', left: 'auto', contain: 'layout style' }}
      aria-label="Open AI chat"
      aria-busy={isLoading}
      title={isReady ? 'Open AI chat' : isLoading ? 'AI chat is loading' : 'Load AI chat'}
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        {isLoading ? 'Loading chat…' : 'Chat with AI'}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-1-1.73V6a2 2 0 0 1 2-2Z" />
      </svg>
    </button>
  )
}
