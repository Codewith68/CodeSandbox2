import { Terminal } from "@xterm/xterm";
import { useLayoutEffect, useRef } from "react";
import { FitAddon } from "@xterm/addon-fit";
import { AttachAddon } from "@xterm/addon-attach";
import "@xterm/xterm/css/xterm.css";
import { useParams } from "react-router-dom";
import { useEditorsocketStore } from "../../../store/editorSocketStore";

export const BrowserTerminal = () => {
  const { projectId: projectIDfromURL } = useParams();
  const { editorSocket } = useEditorsocketStore();

  const terminalRef = useRef(null);
useLayoutEffect(() => {
  if (!terminalRef.current || !projectIDfromURL) return;

  const term = new Terminal({
    cursorBlink: true,
    fontFamily: "Fira Code, monospace",
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
    scrollback: 1000,
    theme: {
      background: "#282a36",
      foreground: "#f8f8f2",
    },
  });

  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(terminalRef.current);

  // 🔥 IMPORTANT: delay fit
  setTimeout(() => {
    fitAddon.fit();
  }, 50);

  const resizeObserver = new ResizeObserver(() => {
    fitAddon.fit();
  });

  resizeObserver.observe(terminalRef.current);

  const ws = new WebSocket(
    `ws://localhost:4000/terminal?projectID=${projectIDfromURL}`
  );

  ws.onopen = () => {
    term.loadAddon(new AttachAddon(ws));
    editorSocket?.emit("GetContainerPort", projectIDfromURL);
  };

  return () => {
    resizeObserver.disconnect();
    ws.close();
    term.dispose();
  };
}, [projectIDfromURL]);


  return (
    <div
      ref={terminalRef}
      className="terminal-container"
      style={{
        height: "100%",   
        width: "100%",
        overflow: "hidden",
      }}
    />
  );
};
