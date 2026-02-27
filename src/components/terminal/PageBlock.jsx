export default function PageBlock({ page }) {
  return (
    <div
      className="my-3 rounded-xl p-4"
      style={{
        border: "1px solid rgba(20,241,255,0.25)",
        background: "rgba(0,0,0,0.86)",
        boxShadow: "0 0 22px rgba(20,241,255,0.06)",
        whiteSpace: "normal",
      }}
    >
      <h1
        className="text-base font-bold mb-2 tracking-wide"
        style={{ color: "#14f1ff", margin: "0 0 8px 0" }}
      >
        {page.title}
      </h1>

      {page.meta && (
        <div className="text-sm mb-3" style={{ color: "rgba(0,142,118,0.9)" }}>
          {page.meta}
        </div>
      )}

      {(page.body || []).map((line, i) => (
        <p key={i} className="my-2 text-sm leading-relaxed" style={{ color: "rgba(0,255,204,0.92)" }}>
          {line}
        </p>
      ))}

      {Array.isArray(page.bullets) && page.bullets.length > 0 && (
        <ul className="mt-2 ml-5 list-disc text-sm" style={{ color: "rgba(0,255,204,0.92)" }}>
          {page.bullets.map((b, i) => (
            <li key={i} className="my-1.5">
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs" style={{ color: "#008e76" }}>
        Tip:{" "}
        <a
          href="https://ipfs.io/ipns/k51qzi5uqu5dgaqxrofaep6t6xvv0x7y0pkuyp9by69r0s9fl2h4dbbvf7uab5"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#14f1ff", textDecoration: "underline" }}
        >
          DOWNLOAD MANIFESTO
        </a>{" "}
        opens the full PDF with charts/visuals.
      </div>
    </div>
  );
}