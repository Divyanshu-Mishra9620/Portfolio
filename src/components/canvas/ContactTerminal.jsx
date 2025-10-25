import { useRef, useEffect, useState } from "react";

const ContactTerminal = ({ onSubmit, isMobile }) => {
  const contentRef = useRef(null);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "> Welcome to Contact Terminal",
    "> Type 'help' to see available commands",
    "",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const addOutput = (lines) => {
    if (Array.isArray(lines)) {
      setOutput((prev) => [...prev, ...lines]);
    } else {
      setOutput((prev) => [...prev, lines]);
    }
  };

  const processCommand = (cmd) => {
    addOutput(`$ ${cmd}`);

    if (cmd === "help") {
      addOutput([
        "Available commands:",
        "  contact    - Start contact form Divyanshu Mishra",
        "  status     - Show current form data",
        "  reset      - Clear form data",
        "  submit      - Submit contact form",
        "  clear      - Clear terminal",
        "  help       - Show this help message",
        "",
      ]);
    } else if (cmd === "contact") {
      if (!formData.name) {
        setCurrentStep("name");
        addOutput([
          "> Starting contact form wizard...",
          "> What's your name?",
          "",
        ]);
      } else if (!formData.email) {
        setCurrentStep("email");
        addOutput([
          `> Name set to: ${formData.name}`,
          "> Now, what's your email address?",
          "",
        ]);
      } else if (!formData.message) {
        setCurrentStep("message");
        addOutput([
          `> Email set to: ${formData.email}`,
          "> What's your message? (minimum 10 characters)",
          "",
        ]);
      } else {
        addOutput([
          `> Name: ${formData.name}`,
          `> Email: ${formData.email}`,
          `> Message: ${formData.message}`,
          "> All fields complete! Type 'submit' to send.",
          "",
        ]);
      }
    } else if (cmd === "status") {
      addOutput([
        "Current form data:",
        `  Name: ${formData.name || "(not set)"}`,
        `  Email: ${formData.email || "(not set)"}`,
        `  Message: ${
          formData.message
            ? formData.message.substring(0, 50) + "..."
            : "(not set)"
        }`,
        "",
      ]);
    } else if (cmd === "reset") {
      setFormData({ name: "", email: "", message: "" });
      setCurrentStep(null);
      addOutput(["> Form data cleared!", ""]);
    } else if (cmd === "submit") {
      if (!formData.name || !formData.email || !formData.message) {
        addOutput([
          "✗ Please fill all fields before submitting.",
          "> Type 'contact' to start the wizard.",
          "",
        ]);
      } else {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(formData.email)) {
          addOutput([
            "✗ Invalid email format.",
            "> Please provide a valid email address.",
            "",
          ]);
          return;
        }

        if (formData.message.trim().length < 10) {
          addOutput(["✗ Message must be at least 10 characters.", ""]);
          return;
        }

        setIsProcessing(true);
        addOutput([
          "> Sending message...",
          "> Validating form data...",
          "> Connecting to server...",
        ]);

        onSubmit(formData)
          .then(() => {
            addOutput([
              "✓ Message sent successfully!",
              "> Thank you for reaching out!",
              "> I'll get back to you soon.",
              "",
            ]);
            setFormData({ name: "", email: "", message: "" });
            setCurrentStep(null);
            setIsProcessing(false);
          })
          .catch((error) => {
            addOutput([
              "✗ Error sending message.",
              `> ${error.message || "Something went wrong. Please try again."}`,
              "",
            ]);
            setIsProcessing(false);
          });
      }
    } else if (cmd === "clear") {
      setOutput([
        "> Welcome to Contact Terminal",
        "> Type 'help' to see available commands",
        "",
      ]);
    } else if (cmd === "") {
    } else if (currentStep) {
      if (currentStep === "name") {
        if (cmd.length < 2) {
          addOutput(["> Name must be at least 2 characters.", ""]);
        } else {
          setFormData({ ...formData, name: cmd });
          setCurrentStep("email");
          addOutput([
            `✓ Name set to: ${cmd}`,
            "> Now, what's your email address?",
            "",
          ]);
        }
      } else if (currentStep === "email") {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(cmd)) {
          addOutput(["> Please enter a valid email address.", ""]);
        } else {
          setFormData({ ...formData, email: cmd });
          setCurrentStep("message");
          addOutput([
            `✓ Email set to: ${cmd}`,
            "> What's your message? (minimum 10 characters)",
            "",
          ]);
        }
      } else if (currentStep === "message") {
        if (cmd.length < 10) {
          addOutput(["> Message must be at least 10 characters.", ""]);
        } else {
          setFormData({ ...formData, message: cmd });
          setCurrentStep(null);
          addOutput([
            `✓ Message set!`,
            "> Form complete! Type 'submit' to send your message.",
            "> Or type 'status' to review, 'reset' to start over.",
            "",
          ]);
        }
      }
    } else {
      addOutput([
        `✗ Unknown command: '${cmd}'. Type 'help' for available commands.`,
        "",
      ]);
    }
  };

  return (
    <div
      className={`w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg border border-[#915EFF] border-opacity-50 overflow-hidden flex flex-col ${
        isMobile ? "h-[400px]" : "h-[500px]"
      }`}
    >
      <div className="bg-slate-950 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-[#915EFF] border-opacity-30">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-[#00d4ff] font-mono text-xs md:text-sm ml-2 truncate">
          contact@DivyanshuMishra:~/portfolio
        </span>
      </div>

      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto p-3 md:p-4 font-mono text-xs md:text-sm space-y-1"
      >
        {output.map((line, index) => {
          let lineColor = "text-[#00d4ff]";

          if (line.startsWith("$")) {
            lineColor = "text-[#a8e6cf]";
          } else if (line.includes("✓")) {
            lineColor = "text-[#00ff00]";
          } else if (line.includes("✗")) {
            lineColor = "text-[#ff6b6b]";
          } else if (line.startsWith(">")) {
            lineColor = "text-[#ffd3b6]";
          } else if (
            line.includes("Name:") ||
            line.includes("Email:") ||
            line.includes("Message:")
          ) {
            lineColor = "text-[#915EFF]";
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

      <div className="bg-slate-950 px-3 md:px-4 py-3 border-t border-[#915EFF] border-opacity-30 flex items-center gap-2">
        <span className="text-[#00d4ff] font-mono text-xs md:text-sm flex-shrink-0">
          $
        </span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            currentStep
              ? `Enter ${currentStep}...`
              : "Type command or 'help'..."
          }
          enterKeyHint="send"
          className="flex-1 bg-transparent text-[#00d4ff] font-mono text-xs md:text-sm outline-none placeholder-[#00d4ff] placeholder-opacity-50"
          disabled={isProcessing}
          autoFocus
        />
      </div>
    </div>
  );
};

export default ContactTerminal;
