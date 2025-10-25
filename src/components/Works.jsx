import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, externalLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectTerminal from "./canvas/ProjectTerminal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
      >
        <div className="relative w-full h-[230px] group">
          <img
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {/* GitHub Repository Icon */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
              role="button"
              aria-label={`View ${name} GitHub repository`}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(source_code_link, "_blank");
                }
              }}
            >
              <img
                src={github}
                alt="GitHub repository"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>

            {/* Live Demo Icon */}
            {deployed_link && (
              <div
                onClick={() => window.open(deployed_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg"
                role="button"
                aria-label={`View ${name} live demo`}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open(deployed_link, "_blank");
                  }
                }}
              >
                <img
                  src={externalLink}
                  alt="Live demo"
                  className="w-5 h-5 object-contain invert"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] hover:text-purple-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-md bg-opacity-10 backdrop-blur-sm transition-transform hover:scale-110`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects with Interactive Terminals */}
      <div className="mt-20 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="mb-12"
          >
            {/* Desktop: Side by side layout with connecting line */}
            <div className="hidden lg:block relative">
              <div className="lg:grid lg:grid-cols-2 gap-8 items-start">
                {/* Project Card */}
                <div>
                  <ProjectCard index={index} {...project} />
                </div>

                {/* Connecting Line - Desktop */}
                <div className="absolute top-0 left-1/2 w-1/2 h-full flex items-center pointer-events-none">
                  <svg
                    className="absolute left-0 top-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    {/* Animated dashed line */}
                    <motion.path
                      d="M 0 60 Q 100 120 200 60"
                      stroke="#915EFF"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="10,5"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -15 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Glowing circle at end */}
                    <motion.circle
                      cx="200"
                      cy="60"
                      r="5"
                      fill="#00d4ff"
                      animate={{
                        r: [5, 8, 5],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </svg>
                </div>

                {/* Interactive Terminal */}
                <div>
                  <ProjectTerminal
                    projectName={project.name}
                    githubLink={project.source_code_link}
                    liveLink={project.deployed_link}
                    isMobile={false}
                  />
                </div>
              </div>
            </div>

            {/* Tablet: Side by side with adjusted layout */}
            <div className="hidden md:block lg:hidden relative">
              <div className="md:grid md:grid-cols-2 gap-6 items-start">
                {/* Project Card */}
                <div>
                  <ProjectCard index={index} {...project} />
                </div>

                {/* Connecting Line - Tablet */}
                <div className="absolute top-0 left-1/2 w-1/2 h-full flex items-center pointer-events-none">
                  <svg
                    className="absolute left-0 top-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    {/* Animated dashed line */}
                    <motion.path
                      d="M 0 50 Q 60 100 120 50"
                      stroke="#915EFF"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="8,4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -12 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Glowing circle at end */}
                    <motion.circle
                      cx="120"
                      cy="50"
                      r="3"
                      fill="#00d4ff"
                      animate={{
                        r: [3, 5, 3],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </svg>
                </div>

                {/* Interactive Terminal */}
                <div>
                  <ProjectTerminal
                    projectName={project.name}
                    githubLink={project.source_code_link}
                    liveLink={project.deployed_link}
                    isMobile={true}
                  />
                </div>
              </div>
            </div>

            {/* Mobile: Stacked layout with vertical connecting line */}
            <div className="md:hidden flex flex-col gap-6 relative">
              {/* Project Card */}
              <div>
                <ProjectCard index={index} {...project} />
              </div>

              {/* Connecting Line - Mobile (Vertical) */}
              <div className="flex justify-center h-8 pointer-events-none">
                <svg width="40" height="32" style={{ overflow: "visible" }}>
                  {/* Animated vertical dashed line */}
                  <motion.line
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="32"
                    stroke="#915EFF"
                    strokeWidth="2"
                    strokeDasharray="5,3"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -8 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Animated dots along the line */}
                  <motion.circle
                    cx="20"
                    cy="16"
                    r="2"
                    fill="#00d4ff"
                    animate={{
                      cy: [0, 32, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
              </div>

              {/* Interactive Terminal */}
              <div>
                <ProjectTerminal
                  projectName={project.name}
                  githubLink={project.source_code_link}
                  liveLink={project.deployed_link}
                  isMobile={true}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
