import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const charIndexRef = useRef(0);
  const lineIndexRef = useRef(0);
  const timerRef = useRef(null);

  const commands = [
    "$ Welcome to my portfolio",
    "$ npm install awesome-skills --global",
    "$ > Building amazing web experiences",
    "$ git commit -m 'Full Stack Developer'",
    "$ ✓ React | Node.js | Three.js",
    "$ ✓ MongoDB | PostgreSQL | Web3",
    "$ ls -la /projects",
    "$ portfolio/",
    "  ├── e-commerce/",
    "  ├── chatty/",
    "  └── health-assistant/",
    "$ Ready to collaborate? Let's build!",
  ];

  useEffect(() => {
    const typeNextCharacter = () => {
      const currentLineIndex = lineIndexRef.current;

      if (currentLineIndex >= commands.length) {
        setIsTyping(false);
        return;
      }

      const currentCommand = commands[currentLineIndex];
      const charIndex = charIndexRef.current;

      if (charIndex < currentCommand.length) {
        setDisplayedText((prev) => prev + currentCommand[charIndex]);
        charIndexRef.current += 1;
        timerRef.current = setTimeout(typeNextCharacter, 40);
      } else {
        setDisplayedText((prev) => prev + "\n");
        charIndexRef.current = 0;
        lineIndexRef.current += 1;
        timerRef.current = setTimeout(typeNextCharacter, 300);
      }
    };

    timerRef.current = setTimeout(typeNextCharacter, 300);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full h-full backdrop-blur-md pointer-events-auto"
    >
      {/* Terminal Container */}
      <div className="bg-black bg-opacity-70 h-full w-full rounded-lg border-2 border-[#915EFF] border-opacity-50 overflow-hidden shadow-2xl shadow-purple-500/20 flex flex-col">
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-[#915EFF] to-[#00d4ff] bg-opacity-20 px-3 xs:px-4 py-2 xs:py-3 flex items-center gap-2 xs:gap-3 border-b border-[#915EFF] border-opacity-30 flex-shrink-0">
          <div className="flex gap-1 xs:gap-2">
            <div className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-green-500 opacity-80" />
          </div>
          <span className="text-gray-300 text-xs xs:text-sm font-mono ml-2">
            terminal@divyanshu ~ portfolio
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-3 xs:p-4 md:p-6 font-mono text-xs xs:text-sm flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#915EFF]">
          <div className="text-[#00d4ff] whitespace-pre-wrap break-words leading-relaxed">
            {displayedText}
            {isTyping && <span className="animate-pulse">▊</span>}
          </div>
        </div>

        {/* Terminal Footer - Status Line */}
        {!isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-3 xs:px-4 md:px-6 py-2 xs:py-3 bg-black bg-opacity-50 border-t border-[#915EFF] border-opacity-30 text-[#00d4ff] text-xs font-mono flex items-center justify-between flex-shrink-0"
          >
            <span>Status: Ready</span>
            <span className="flex items-center gap-1 xs:gap-2">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-green-500 animate-pulse" />
              Active
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
