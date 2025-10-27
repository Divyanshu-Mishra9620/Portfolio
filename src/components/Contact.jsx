import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ContactTerminal from "./canvas/ContactTerminal";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name?.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name?.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.message?.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message?.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_j14d0fv",
        "template_30fnly8",
        {
          from_name: form.name,
          to_name: "Divyanshu Mishra",
          from_email: form.email,
          to_email: "dvbeast465@gmail.com",
          message: form.message,
        },
        "4DsVrmRmczHS3ChaA"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setErrors({ submit: "Something went wrong. Please try again." });
        }
      );
  };

  const handleTerminalSubmit = (terminalFormData) => {
    return new Promise((resolve, reject) => {
      emailjs
        .send(
          "service_j14d0fv",
          "template_30fnly8",
          {
            from_name: terminalFormData.name,
            to_name: "Divyanshu Mishra",
            from_email: terminalFormData.email,
            to_email: "dvbeast465@gmail.com",
            message: terminalFormData.message,
          },
          "4DsVrmRmczHS3ChaA"
        )
        .then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="show"
          animate="show"
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="w-full h-full relative group rounded-lg overflow-hidden border border-[#915EFF] border-opacity-30 group-hover:border-opacity-100 bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-sm transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500 -z-10" />

            <div className="w-full h-full flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-4/5 h-4/5 filter drop-shadow-lg"
              >
                <defs>
                  <radialGradient id="earthGradient">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#0080ff" />
                    <stop offset="100%" stopColor="#001a4d" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="url(#earthGradient)"
                  filter="url(#glow)"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <motion.circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#915EFF"
                  strokeWidth="2"
                  opacity="0.5"
                  animate={{
                    r: [85, 95, 85],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1"
                  opacity="0.3"
                  animate={{
                    r: [90, 100, 90],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <circle cx="130" cy="70" r="3" fill="#915EFF" opacity="0.7" />
                <circle cx="60" cy="120" r="2" fill="#00d4ff" opacity="0.7" />
                <circle cx="100" cy="50" r="2.5" fill="#915EFF" opacity="0.6" />
              </svg>
            </div>

            <div className="absolute top-4 left-4 text-[#00d4ff] font-mono text-xs opacity-70">
              &gt; earth.ping()
            </div>
            <div className="absolute bottom-4 right-4 text-[#915EFF] font-mono text-xs opacity-70">
              Status: [<span className="text-green-400 animate-pulse">●</span>]
              Connected
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("up", "tween", 0.3, 1)}
          initial="show"
          animate="show"
          className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto"
        >
          <ContactTerminal onSubmit={handleTerminalSubmit} isMobile={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
