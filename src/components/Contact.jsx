import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
          <div className="w-full h-full">
            <EarthCanvas />
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
