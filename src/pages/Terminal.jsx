import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TerminalOutput from "../components/terminal/TerminalOutput";
import TerminalHeader from "../components/terminal/TerminalHeader";
import MobileCommandBar from "../components/terminal/MobileCommandBar";
import { whitepaperPages, fileSystem } from "../components/terminal/terminalData";

const WHITEPAPER_URL = "/openTill Whitepaper Final.pdf";

const INITIAL_OUTPUT = [
  {
    type: "text",
    content:
      "--------------------------------------------------\n" +
      "openTILL SMPF WHITEPAPER TERMINAL v3.0\n" +
      "Structured Merchant Participation Framework\n" +
      "Powered by $DUC\n" +
      "--------------------------------------------------\n" +
      "Type HELP for available commands."
  }
];

export default function Terminal() {
  const [outputItems, setOutputItems] = useState(INITIAL_OUTPUT);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState(["C:", "openTILL"]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const pullStartY = useRef(null);
  const [pullDistance, setPullDistance] = useState(0);
  const PULL_THRESHOLD = 80;

  const pageAliases = useMemo(
    () => ({
      DISCLAIMER: "LEGAL",
      LEGAL: "LEGAL",
      INTRO: "INTRODUCTION",
      INTRODUCTION: "INTRODUCTION",
      MISSION: "MISSION",
      VISION: "VISION",
      ECOSYSTEM: "ECOSYSTEM",
      POS: "POS_PLATFORM",
      PLATFORM: "POS_PLATFORM",
      FEATURES: "FEATURES",
      SMPF: "SMPF",
      CHIPS: "CHIPS",
      CHIP: "CHIPS",
      CUSTOMERS: "CUSTOMER_MODEL",
      CUSTOMER: "CUSTOMER_MODEL",
      SECURITY: "SECURITY",
      COMPLIANCE: "SECURITY",
      TOKEN: "TOKENOMICS",
      TOKENOMICS: "TOKENOMICS",
      ALLOCATION: "ALLOCATION",
      DISTRIBUTION: "ALLOCATION",
      CONCLUSION: "CONCLUSION",
      SUMMARY: "CONCLUSION",
    }),
    []
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = (params.get("page") || "").toUpperCase();
    if (!page) return;

    const resolvedPage = pageAliases[page] || page;
    const p = whitepaperPages[resolvedPage];
    if (p) {
      setOutputItems(prev => {
        const last = prev[prev.length - 1];
        if (last?.type === "page" && last.pageKey === resolvedPage) return prev;
        return [
          ...prev,
          { type: "text", content: "--------------------------------------------------" },
          { type: "page", pageKey: resolvedPage, page: p }
        ];
      });
    }
  }, [location.search, pageAliases]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputItems]);

  const focusInput = () => inputRef.current?.focus();

  function getCurrentDir(path) {
    let dir = fileSystem;
    for (const part of path) dir = dir?.[part];
    return dir || {};
  }

  function addText(content) {
    setOutputItems(prev => [...prev, { type: "text", content }]);
  }

  function addPage(pageKey) {
    const resolvedPage = pageAliases[pageKey] || pageKey;
    const p = whitepaperPages[resolvedPage];

    if (!p) {
      addText("PAGE NOT FOUND. Type PAGES to list available whitepaper sections.");
      return;
    }

    navigate(`?page=${resolvedPage}`, { replace: false });
    setOutputItems(prev => [...prev, { type: "page", pageKey: resolvedPage, page: p }]);
  }

  function normalizeTarget(raw) {
    return raw.replace(/\s+/g, "_").replace(/-/g, "_").toUpperCase();
  }

  function openWhitepaper() {
    addText("OPENING FINAL WHITEPAPER PDF...");
    setTimeout(() => {
      window.open(WHITEPAPER_URL, "_blank", "noopener,noreferrer");
    }, 400);
  }

  function handleCommand(rawCmd) {
    const cmd = rawCmd.trim();
    const parts = cmd.split(" ");
    const action = (parts[0] || "").toUpperCase();
    const targetRaw = parts.slice(1).join(" ").trim();
    const target = normalizeTarget(targetRaw);
    const dir = getCurrentDir(currentPath);

    addText(`${currentPath.join("\\")}\\> ${cmd}`);

    if (!cmd) return;

    if (action === "RUN" && (target === "OPENTILL" || target === "PLATFORM")) {
      addText(">> AUTHORIZING CLOUD-NATIVE COMMERCE INTERFACE...");
      setTimeout(() => {
        window.open("https://node1.opentill.io/", "_blank", "noopener,noreferrer");
      }, 800);
      return;
    }

    if (action === "OPEN" && (target === "WHITEPAPER" || target === "PDF")) {
      openWhitepaper();
      return;
    }

    if (action === "DOWNLOAD" && (target === "WHITEPAPER" || target === "PDF")) {
      openWhitepaper();
      return;
    }

    switch (action) {
      case "HELP":
        addText(
          "AVAILABLE COMMANDS\n" +
          "--------------------------------------------------\n" +
          "HELP                 - Show command list\n" +
          "DIR                  - List current directory\n" +
          "CD [DIR]             - Change directory\n" +
          "CD ..                - Move up one directory\n" +
          "LOAD [FILE]          - Read a file from current directory\n" +
          "PAGES                - List whitepaper sections\n" +
          "PAGE [NAME]          - Render a whitepaper section\n" +
          "OPEN WHITEPAPER      - Open final PDF\n" +
          "DOWNLOAD WHITEPAPER  - Open final PDF\n" +
          "RUN openTILL         - Launch platform\n" +
          "STATUS               - Platform overview\n" +
          "CLS                  - Clear terminal\n" +
          "--------------------------------------------------\n" +
          "Examples:\n" +
          "PAGE SMPF\n" +
          "PAGE TOKENOMICS\n" +
          "PAGE ALLOCATION\n" +
          "LOAD ABSTRACT.TXT"
        );
        break;

      case "STATUS":
        addText(
          "openTILL SYSTEM STATUS\n" +
          "--------------------------------------------------\n" +
          "DOCUMENT:  Final SMPF Whitepaper\n" +
          "TOKEN:     Digital Utility Credit ($DUC)\n" +
          "MODEL:     Structured Merchant Participation Framework\n" +
          "MODULES:   POS | CHIPS | TOKENOMICS | REWARDS | SECURITY\n" +
          "NETWORK:   Merchant | Consumer | Ambassador | Builder\n" +
          "STATE:     READY"
        );
        break;

      case "DIR": {
        const entries = Object.entries(dir);
        if (!entries.length) {
          addText(` Directory of ${currentPath.join("\\")}\n----------------------------------\n<EMPTY>`);
          break;
        }

        addText(
          ` Directory of ${currentPath.join("\\")}\n` +
            "----------------------------------\n" +
            entries
              .map(([k, v]) => `${k.padEnd(26)} <${typeof v === "string" ? "FILE" : "DIR "}>`)
              .join("\n")
        );
        break;
      }

      case "CD":
        if (target === "..") {
          if (currentPath.length > 2) {
            setCurrentPath(prev => prev.slice(0, -1));
          } else {
            addText("ALREADY AT ROOT DIRECTORY.");
          }
          break;
        } else {
          const found = Object.keys(dir).find(
            k => normalizeTarget(k) === target && typeof dir[k] !== "string"
          );
          if (found) {
            setCurrentPath(prev => [...prev, found]);
          } else {
            addText("DIRECTORY NOT FOUND.");
          }
        }
        break;

      case "LOAD": {
        const fileName = Object.keys(dir).find(
          k => normalizeTarget(k) === target && typeof dir[k] === "string"
        );
        if (fileName) {
          addText("--------------------------------------------------\n" + dir[fileName] + "\n--------------------------------------------------");
        } else {
          addText("FILE NOT FOUND.");
        }
        break;
      }

      case "PAGES": {
        const keys = Object.keys(whitepaperPages);
        addText(
          "AVAILABLE WHITEPAPER SECTIONS\n" +
            "----------------------------------\n" +
            keys.map(k => " " + k).join("\n") +
            "\n----------------------------------\n" +
            "Use: PAGE [NAME]"
        );
        break;
      }

      case "PAGE":
        if (!target) {
          addText("USAGE: PAGE [NAME]  | Type PAGES to list available sections.");
          break;
        }
        addText("--------------------------------------------------");
        addPage(target);
        break;

      case "CLS":
        setOutputItems(INITIAL_OUTPUT);
        navigate("", { replace: true });
        break;

      default:
        addText("UNKNOWN COMMAND. Type HELP.");
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputValue);
      setInputValue("");
    }
  }

  function onTouchStart(e) {
    if (window.scrollY === 0) pullStartY.current = e.touches[0].clientY;
  }

  function onTouchMove(e) {
    if (pullStartY.current === null) return;
    const delta = e.touches[0].clientY - pullStartY.current;
    if (delta > 0) setPullDistance(Math.min(delta, PULL_THRESHOLD + 20));
  }

  function onTouchEnd() {
    if (pullDistance >= PULL_THRESHOLD) {
      handleCommand("CLS");
    }
    pullStartY.current = null;
    setPullDistance(0);
  }

  return (
    <div
      className="min-h-screen bg-black text-[#00ffcc] font-mono relative overflow-x-hidden"
      onClick={focusInput}
      style={{ fontFamily: '"Courier New", monospace' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {pullDistance > 0 && (
        <div
          className="fixed top-0 left-0 w-full flex items-center justify-center z-50 text-xs transition-all"
          style={{
            height: `${pullDistance}px`,
            color: "#14f1ff",
            background: "rgba(0,0,0,0.6)",
            opacity: pullDistance / PULL_THRESHOLD,
          }}
        >
          {pullDistance >= PULL_THRESHOLD ? "↑ Release to clear terminal" : "↓ Pull to clear"}
        </div>
      )}

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a172f6f971ae630e926921/07230f1fc_ducsinarow.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          filter: "saturate(0.9) contrast(1.05)",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(0,0,0,0.35), rgba(0,0,0,0.88) 70%)",
        }}
      />

      <div
        className="relative z-10 max-w-5xl mx-auto px-4 text-base"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 1rem)" }}
      >
        <TerminalHeader />
        <TerminalOutput outputItems={outputItems} />

        <div
          className="flex items-center mt-1"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 7rem)" }}
        >
          <span className="mr-2 font-bold" style={{ color: "#14f1ff" }}>
            {currentPath.join("\\")}{"\\>"}
          </span>

          <span className="relative flex-1 min-w-0">
            <span className="whitespace-pre-wrap break-all">{inputValue}</span>
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
              className="absolute inset-0 opacity-0 w-full h-full"
              autoComplete="off"
              spellCheck={false}
              autoFocus
              inputMode="text"
            />
          </span>
        </div>

        <div ref={bottomRef} />
      </div>

      <MobileCommandBar onCommand={handleCommand} />

      <div
        className="fixed bottom-0 left-0 w-full z-20 text-xs border-t"
        style={{
          color: "#008e76",
          backgroundColor: "rgba(0,0,0,0.85)",
          borderColor: "#111",
          backdropFilter: "blur(4px)",
          paddingLeft: "calc(env(safe-area-inset-left) + 1.25rem)",
          paddingRight: "calc(env(safe-area-inset-right) + 1.25rem)",
          paddingTop: "0.3rem",
          paddingBottom: "calc(env(safe-area-inset-bottom) + 0.3rem)",
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-1">
          <span>
            © 2026 ISOLEX CORPORATION |{" "}
            <a
              href="https://app.isolex.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#14f1ff" }}
            >
              app.isolex.io
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes dosblink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}