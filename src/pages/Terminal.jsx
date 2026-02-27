import { useState, useEffect, useRef } from "react";
import TerminalOutput from "../components/terminal/TerminalOutput";
import TerminalHeader from "../components/terminal/TerminalHeader";
import { whitepaperPages, fileSystem } from "../components/terminal/terminalData";

const INITIAL_OUTPUT = [{ type: "text", content: "--------------------------------------------------\nType HELP for available commands." }];

export default function Terminal() {
  const [outputItems, setOutputItems] = useState(INITIAL_OUTPUT);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState(["C:", "openTILL"]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputItems]);

  const focusInput = () => inputRef.current?.focus();

  function getCurrentDir(path) {
    let dir = fileSystem;
    for (let part of path) dir = dir[part];
    return dir;
  }

  function addText(content) {
    setOutputItems(prev => [...prev, { type: "text", content }]);
  }

  function addPage(pageKey) {
    const p = whitepaperPages[pageKey];
    if (!p) {
      addText("PAGE NOT FOUND. Type PAGES to list available pages.");
      return;
    }
    setOutputItems(prev => [...prev, { type: "page", pageKey, page: p }]);
  }

  function handleCommand(cmd) {
    const parts = cmd.trim().split(" ");
    const action = (parts[0] || "").toUpperCase();
    const targetRaw = parts.slice(1).join(" ").trim();
    const target = targetRaw.toUpperCase();
    const dir = getCurrentDir(currentPath);

    addText(`${currentPath.join("\\")}\\> ${cmd}`);

    if (action === "RUN" && target === "OPENTILL") {
      addText(">> AUTHORIZING CLOUD-NATIVE INTERFACE...");
      setTimeout(() => { window.open("https://node1.opentill.io/", "_blank"); }, 800);
      return;
    }

    switch (action) {
      case "HELP":
        addText(
          `DIR                - List directory\nCD [DIR]           - Change directory\nCD ..              - Go back\nLOAD [FILE]        - Read file\nPAGES              - List whitepaper pages\nPAGE [NAME]        - Render a whitepaper page\nRUN openTILL       - Launch platform\nDOWNLOAD MANIFESTO - Open institutional PDF\nCLS                - Clear screen`
        );
        break;

      case "DIR":
        addText(` Directory of ${currentPath.join("\\")}\n----------------------------------\n` +
          Object.entries(dir).map(([k, v]) =>
            `${k.padEnd(26)} <${typeof v === "string" ? "FILE" : "DIR "}>`
          ).join("\n")
        );
        break;

      case "CD":
        if (target === "..") {
          if (currentPath.length > 2) setCurrentPath(prev => prev.slice(0, -1));
        } else {
          const found = Object.keys(dir).find(k => k.toUpperCase() === target && typeof dir[k] !== "string");
          if (found) setCurrentPath(prev => [...prev, found]);
          else addText("DIRECTORY NOT FOUND.");
        }
        break;

      case "LOAD": {
        const fileName = Object.keys(dir).find(k => k.toUpperCase() === target && typeof dir[k] === "string");
        if (fileName) addText("--------------------------------------------------\n" + dir[fileName] + "\n--------------------------------------------------");
        else addText("FILE NOT FOUND.");
        break;
      }

      case "PAGES": {
        const keys = Object.keys(whitepaperPages);
        addText("AVAILABLE PAGES\n----------------------------------\n" + keys.map(k => " " + k).join("\n") + "\n----------------------------------\nUse: PAGE [NAME]");
        break;
      }

      case "PAGE":
        if (!target) { addText("USAGE: PAGE [NAME]  | Type PAGES to list options."); break; }
        addText("--------------------------------------------------");
        addPage(target);
        break;

      case "DOWNLOAD":
        if (target === "MANIFESTO") {
          addText("OPENING DOCUMENT... PLEASE WAIT.");
          setTimeout(() => { window.open("openTILL_SMPF_Whitepaper_FINAL.pdf", "_blank"); }, 500);
        } else {
          addText("UNKNOWN DOWNLOAD TARGET.");
        }
        break;

      case "CLS":
        setOutputItems(INITIAL_OUTPUT);
        break;

      default:
        if (cmd.trim() !== "") addText("UNKNOWN COMMAND.");
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputValue);
      setInputValue("");
    }
  }

  return (
    <div
      className="min-h-screen bg-black text-[#00ffcc] font-mono relative overflow-x-hidden"
      onClick={focusInput}
      style={{ fontFamily: '"Courier New", monospace' }}
    >
      {/* Background image */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          filter: "saturate(0.9) contrast(1.05)",
        }}
      />
      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 50% 35%, rgba(0,0,0,0.35), rgba(0,0,0,0.88) 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-4 min-h-screen text-base">
        <TerminalHeader />

        <TerminalOutput outputItems={outputItems} />

        {/* Input line */}
        <div className="flex items-center pb-20 mt-1">
          <span className="mr-2 font-bold" style={{ color: "#14f1ff" }}>
            {currentPath.join("\\")}{"\\>"}
          </span>
          <span className="relative flex-1">
            <span className="whitespace-pre">{inputValue}</span>
            <span
              className="inline-block w-2.5 align-bottom ml-0.5"
              style={{
                height: "1.2em",
                background: "currentColor",
                animation: "dosblink 1s steps(1) infinite",
                verticalAlign: "bottom",
              }}
            />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={onKeyDown}
              className="absolute opacity-0 pointer-events-none w-full"
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />
          </span>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Footer */}
      <div
        className="fixed bottom-0 left-0 w-full z-20 text-sm px-5 py-2 border-t"
        style={{
          color: "#008e76",
          backgroundColor: "rgba(0,0,0,0.75)",
          borderColor: "#111",
          backdropFilter: "blur(4px)",
        }}
      >
        © 2026 ISOLEX CORPORATION |{" "}
        <a href="https://app.isolex.io" target="_blank" rel="noopener" style={{ color: "#14f1ff" }}>
          app.isolex.io
        </a>
      </div>

      <style>{`
        @keyframes dosblink { 0%{opacity:1;} 50%{opacity:0;} 100%{opacity:1;} }
      `}</style>
    </div>
  );
}