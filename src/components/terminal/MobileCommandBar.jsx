export default function MobileCommandBar({ onCommand }) {
  const buttons = [
    { label: "HELP", cmd: "HELP" },
    { label: "DIR", cmd: "DIR" },
    { label: "PAGES", cmd: "PAGES" },
    { label: "CLS", cmd: "CLS" },
    { label: "RUN", cmd: "RUN openTILL" },
    { label: "PRESALE", cmd: "PRESALE" },
  ];

  return (
    <div
      className="fixed z-20 w-full flex flex-row gap-2 px-3 overflow-x-auto"
      style={{
        bottom: "calc(env(safe-area-inset-bottom) + 1.8rem)",
        backgroundColor: "rgba(0,0,0,0.82)",
        borderTop: "1px solid #14f1ff22",
        backdropFilter: "blur(6px)",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "calc(env(safe-area-inset-left) + 0.75rem)",
        paddingRight: "calc(env(safe-area-inset-right) + 0.75rem)",
        scrollbarWidth: "none",
      }}
    >
      {buttons.map(({ label, cmd }) => (
        <button
          key={label}
          onPointerDown={e => { e.preventDefault(); e.stopPropagation(); onCommand(cmd); }}
          className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded border transition-all active:scale-95"
          style={{
            color: "#14f1ff",
            borderColor: "#14f1ff44",
            background: "rgba(20,241,255,0.07)",
            fontFamily: '"Courier New", monospace',
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}