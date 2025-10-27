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
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 -z-10" />

    <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg p-6 min-h-[280px] flex justify-center items-center flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 border border-[#915EFF] border-opacity-30 group-hover:border-opacity-100 backdrop-blur-sm">
      <div className="mb-4 p-4 rounded-lg bg-gradient-to-br from-[#915EFF]/20 to-[#00d4ff]/20 border border-[#915EFF] border-opacity-50 transition-transform duration-300 group-hover:scale-110">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 object-contain filter brightness-110"
        />
      </div>

      <h3 className="text-[#00d4ff] text-[18px] font-bold text-center font-mono group-hover:text-[#915EFF] transition-colors duration-300">
        <span className="text-[#915EFF]">{">"}</span> {title}
      </h3>

      <div className="mt-3 w-full h-px bg-gradient-to-r from-[#915EFF] via-[#00d4ff] to-transparent opacity-50" />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#00d4ff]" />
          <p className="text-[#00d4ff] font-mono text-sm uppercase tracking-widest">
            &gt; developer.profile()
          </p>
        </div>
        <h2 className={`${styles.sectionHeadText} font-black text-white`}>
          <span className="text-[#00d4ff]">{"<"}</span> About{" "}
          <span className="text-[#915EFF]">{"/"}</span>
          <span className="text-[#00d4ff]">{">"}</span>
        </h2>
        <p className="text-[#00d4ff] font-mono text-xs mt-2 opacity-70">
          {/* Full-stack developer profile */}
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px] font-mono"
      >
        As a full-stack developer, I work across the stack — React, Next.js,
        Node.js, Express, MongoDB, Django, and WebSockets to deliver complete
        end to end solutions. Whether it’s a real time chat app, a scalable
        e-commerce platform, or a secure authentication system, I bring ideas to
        life with efficiency and impact.
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
