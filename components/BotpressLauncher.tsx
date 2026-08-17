export default function BotpressLauncher() {
  return (
    <button
      id="bp-toggle-chat"
      type="button"
      className="group fixed bottom-[30px] right-6 z-[60] flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#bf2227] p-0 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#bf2227]"
      aria-label="Open AI chat"
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        AI Agent
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
