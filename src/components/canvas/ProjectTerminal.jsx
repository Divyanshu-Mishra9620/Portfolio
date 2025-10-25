import { useRef, useEffect, useState } from "react";

const ProjectTerminal = ({
  projectName,
  githubLink,
  liveLink,
  isMobile,
  onNext,
}) => {
  const contentRef = useRef(null);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    `> Welcome to ${projectName} terminal`,
    "> Type 'github' to visit repository",
    ...(liveLink ? ["> Type 'live' to visit live demo"] : []),
    "> Type 'help' for more commands",
    "",
  ]);
  const [isWaitingForInput, setIsWaitingForInput] = useState(true);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [output]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(command.toLowerCase().trim());
      setCommand("");
    }
  };

  const processCommand = (cmd) => {
    // Add the command to output
    setOutput((prev) => [...prev, `$ ${cmd}`]);

    // Process the command
    if (cmd === "github") {
      setOutput((prev) => [
        ...prev,
        "> Navigating to GitHub repository...",
        "",
      ]);
      setTimeout(() => {
        window.open(githubLink, "_blank");
      }, 300);
    } else if (cmd === "live") {
      if (liveLink) {
        setOutput((prev) => [...prev, "> Navigating to live demo...", ""]);
        setTimeout(() => {
          window.open(liveLink, "_blank");
        }, 300);
      } else {
        setOutput((prev) => [
          ...prev,
          "✗ No live demo available for this project",
          "",
        ]);
      }
    } else if (cmd === "next") {
      if (onNext) {
        setOutput((prev) => [...prev, "> Scrolling to next project...", ""]);
        setTimeout(() => {
          onNext();
        }, 300);
      } else {
        setOutput((prev) => [...prev, "✗ No next project available", ""]);
      }
    } else if (cmd === "help") {
      setOutput((prev) => [
        ...prev,
        "Available commands:",
        "  github  - Open GitHub repository",
        ...(liveLink ? ["  live    - Open live demo"] : []),
        "  next    - Scroll to next project",
        "  help    - Show this help message",
        "  clear   - Clear terminal",
        "",
      ]);
    } else if (cmd === "clear") {
      setOutput([
        `> Welcome to ${projectName} terminal`,
        "> Type 'github' to visit repository",
        ...(liveLink ? ["> Type 'live' to visit live demo"] : []),
        "> Type 'help' for more commands",
        "",
      ]);
    } else if (cmd === "") {
      // Empty command, do nothing
    } else {
      setOutput((prev) => [
        ...prev,
        `✗ Unknown command: '${cmd}'. Type 'help' for available commands.`,
        "",
      ]);
    }
  };

  return (
    <div
      className={`w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg border border-[#915EFF] border-opacity-50 overflow-hidden flex flex-col ${
        isMobile ? "h-[300px]" : "h-[350px]"
      }`}
    >
      {/* Terminal Header */}
      <div className="bg-slate-950 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-[#915EFF] border-opacity-30">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-[#00d4ff] font-mono text-xs md:text-sm ml-2 truncate">
          project@{projectName.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      {/* Terminal Content */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto p-3 md:p-4 font-mono text-xs md:text-sm space-y-1"
      >
        {output.map((line, index) => {
          let lineColor = "text-[#00d4ff]";

          if (line.startsWith("$")) {
            lineColor = "text-[#a8e6cf]"; // Green for commands
          } else if (line.includes("✓") || line.includes("Navigating")) {
            lineColor = "text-[#00ff00]"; // Green for success
          } else if (line.includes("✗")) {
            lineColor = "text-[#ff6b6b]"; // Red for error
          } else if (line.startsWith(">")) {
            lineColor = "text-[#ffd3b6]"; // Orange for instructions
          }

          return (
            <div
              key={index}
              className={`${lineColor} whitespace-pre-wrap break-words leading-relaxed`}
            >
              {line}
            </div>
          );
        })}
      </div>

      {/* Terminal Input */}
      <div className="bg-slate-950 px-3 md:px-4 py-3 border-t border-[#915EFF] border-opacity-30 flex items-center gap-2">
        <span className="text-[#00d4ff] font-mono text-xs md:text-sm flex-shrink-0">
          $
        </span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type command..."
          enterKeyHint="send"
          className="flex-1 bg-transparent text-[#00d4ff] font-mono text-xs md:text-sm outline-none placeholder-[#00d4ff] placeholder-opacity-50"
          autoFocus
        />
      </div>
    </div>
  );
};

export default ProjectTerminal;
