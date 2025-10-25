import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
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

    // Clear error for this field when user starts typing
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

  // Handle terminal form submission
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
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Form and Terminal Container */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Contact Form */}
        {/* <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-100 p-6 md:p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            noValidate
          >
            {success && (
              <div className="bg-green-500 bg-opacity-10 border border-green-500 text-green-500 px-4 py-3 rounded-lg animate-pulse">
                Thank you! I will get back to you as soon as possible.
              </div>
            )}

            {errors.submit && (
              <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                {errors.submit}
              </div>
            )}

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-purple-500"
                }`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-purple-500"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 resize-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-purple-500"
                }`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 hover:shadow-lg hover:shadow-purple-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black-100"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div> */}

        {/* Interactive Contact Terminal */}
        <motion.div
          variants={slideIn("up", "tween", 0.3, 1)}
          className="flex-1 hidden lg:block"
        >
          <ContactTerminal onSubmit={handleTerminalSubmit} isMobile={false} />
        </motion.div>
      </div>

      {/* 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
