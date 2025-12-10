import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="xs:w-[250px] w-full relative group"
  >
    <div className="relative bg-black rounded-lg p-6 min-h-[280px] flex justify-center items-center flex-col transition-all duration-300 hover:shadow-lg hover:shadow-white/20 border border-white border-opacity-30 group-hover:border-white backdrop-blur-sm">
      <div className="mb-4 p-4 rounded-lg bg-black border border-white border-opacity-30 transition-transform duration-300 group-hover:scale-110">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 object-contain filter brightness-110"
        />
      </div>

      <h3 className="text-white text-[18px] font-bold text-center font-mono group-hover:text-gray-300 transition-colors duration-300">
        <span className="text-white">{">"}</span> {title}
      </h3>

      <div className="mt-3 w-full h-px bg-white opacity-20" />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600" />
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
            &gt; developer.profile()
          </p>
        </div>
        <h2 className={`${styles.sectionHeadText} font-black text-white`}>
          <span className="text-gray-400">{"<"}</span> About{" "}
          <span className="text-white">{"/"}</span>
          <span className="text-gray-400">{">"}</span>
        </h2>
        <p className="text-gray-400 font-mono text-xs mt-2 opacity-70"></p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px] font-mono"
      >
        I’m a Full-Stack & AI Engineer who loves building systems that are fast,
        scalable, and intelligent. I work across the entire stack :- Next.js,
        Node.js, Django, PostgreSQL, WebSockets, and modern AI tooling like
        LangChain, vector databases, and LLM APIs. I enjoy solving real
        engineering problems: real-time communication, search & indexing, RAG
        architectures, authentication, system design, caching, and performance
        optimization. I’ve built projects ranging from an AI-powered farmer
        assistant (RAG + CV + geospatial analysis) to real-time chat and
        ride-booking platforms, scalable ecommerce systems, and AI chat-based
        health assistants. My goal is simple: Build products that feel fast,
        smart, and meaningful.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
