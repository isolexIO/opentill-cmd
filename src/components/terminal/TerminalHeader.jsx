export default function TerminalHeader() {
  return (
    <div
      className="flex items-center border-b pb-4 mb-5"
      style={{ borderColor: "#008e76", backdropFilter: "blur(2px)" }}
    >
      {/* Token icon placeholder (cyan circle as SVG) */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
        style={{ filter: "drop-shadow(0 0 5px #14f1ff)", background: "rgba(20,241,255,0.1)", border: "1px solid #14f1ff" }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#14f1ff">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#14f1ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="m-0 font-bold text-lg tracking-wide" style={{ color: "#14f1ff" }}>
          openTILL LITEPAPER TERMINAL v1.0 [DRAFT]
        </h2>
        <span className="text-sm" style={{ color: "#008e76" }}>
          The Blueprint for Merchant Sovereignty
        </span>

        {/* Social links */}
        <div className="flex flex-row gap-3 mt-1 items-center">
          <a
            href="https://explorer.solana.com/address/HduiwhPVavapx13moQDcg5Tk7YNyGoR3S8n94SZhL5o4"
            target="_blank" rel="noopener" title="View on Solana Explorer"
            className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <svg width="18" height="14" viewBox="0 0 397.7 311.7" fill="#14F1FF">
              <path d="M64.4 237.6c2.1-3.2 5.6-5.1 9.4-5.1h318.8c3.8 0 7.3 1.9 9.4 5.1l-33.1 52.3c-2.1 3.2-5.6 5.1-9.4 5.1H40.7c-3.8 0-7.3-1.9-9.4-5.1l33.1-52.3zm0-112.7c2.1-3.2 5.6-5.1 9.4-5.1h318.8c3.8 0 7.3 1.9 9.4 5.1l-33.1 52.3c-2.1 3.2-5.6 5.1-9.4 5.1H40.7c-3.8 0-7.3-1.9-9.4-5.1l33.1-52.3zm0-112.8c2.1-3.2 5.6-5.1 9.4-5.1h318.8c3.8 0 7.3 1.9 9.4 5.1l-33.1 52.3c-2.1 3.2-5.6 5.1-9.4 5.1H40.7c-3.8 0-7.3-1.9-9.4-5.1l33.1-52.3z"/>
            </svg>
          </a>

          <a href="https://x.com/openTILL_SMPF" target="_blank" rel="noopener" title="X (Twitter)"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#1DA1F2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.36l4.713 6.231 5.171-6.231z"/>
            </svg>
          </a>

          <a href="https://t.me/+TkWQAgyhHVk0YWEx" target="_blank" rel="noopener" title="Telegram"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#26A5E4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z"/>
            </svg>
          </a>

          <a href="https://discord.gg/WXuYRmzf7d" target="_blank" rel="noopener" title="Discord"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#5865F2">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.74 11.74 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}