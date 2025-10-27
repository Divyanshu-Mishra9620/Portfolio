import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(to br, #1a1a2e 0%, #0f3460 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(145, 94, 255, 0.3)",
        border: "1px solid rgba(145, 94, 255, 0.5)",
        borderRadius: "0.5rem",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(145, 94, 255, 0.5)",
      }}
      date={
        <span className="font-mono text-[#00d4ff] font-bold">
          {">"} {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow:
          "0 0 20px rgba(145, 94, 255, 0.8), inset 0 0 20px rgba(0, 212, 255, 0.2)",
        border: "2px solid rgba(145, 94, 255, 0.6)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="w-[60%] h-[60%] object-contain filter brightness-110"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#00d4ff] text-[24px] font-bold font-mono">
          <span className="text-[#915EFF]">{"$"}</span> {experience.title}
        </h3>
        <p
          className="text-[#00d4ff] text-[16px] font-semibold font-mono opacity-80"
          style={{ margin: 0 }}
        >
          @ {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] pl-1 tracking-wider leading-relaxed font-mono"
          >
            <span className="text-[#915EFF] mr-2">#</span> {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#00d4ff]" />
          <p className="text-[#00d4ff] font-mono text-sm uppercase tracking-widest text-center">
            &gt; career.timeline()
          </p>
        </div>
        <h2
          className={`${styles.sectionHeadText} font-black text-white text-center`}
        >
          <span className="text-[#00d4ff]">{"<"}</span> Experience{" "}
          <span className="text-[#915EFF]">{"/"}</span>
          <span className="text-[#00d4ff]">{">"}</span>
        </h2>
        <p className="text-[#00d4ff] font-mono text-xs mt-2 opacity-70 text-center">
          {/* Work history and achievements */}
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
