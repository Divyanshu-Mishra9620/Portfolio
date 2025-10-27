import React, { useEffect } from "react";
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
        className="relative bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-lg sm:w-[360px] w-full cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 border border-[#915EFF] border-opacity-30 hover:border-opacity-100 backdrop-blur-sm"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] rounded-lg blur opacity-0 hover:opacity-75 transition duration-500 -z-10" />

        <div className="relative w-full h-[230px] group">
          <img
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 border border-[#00d4ff] border-opacity-20"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#915EFF] to-[#915EFF]/60 hover:from-[#915EFF] hover:to-[#915EFF] transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-[#915EFF] border-opacity-50 hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(145,94,255,0.6)]"
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

            {deployed_link && (
              <div
                onClick={() => window.open(deployed_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#00d4ff] to-[#00d4ff]/60 hover:from-[#00d4ff] hover:to-[#00d4ff] transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-[#00d4ff] border-opacity-50 hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
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
          <h3 className="text-[#00d4ff] font-bold text-[20px] font-mono hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2">
            <span className="text-[#915EFF]">&gt;</span> {name}
          </h3>
          <p className="mt-2 text-gray-300 text-[14px] leading-relaxed font-mono opacity-80">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-mono px-2 py-1 rounded-md bg-gradient-to-r ${
                tag.color
              } bg-opacity-20 border ${
                tag.color.includes("blue")
                  ? "border-blue-500"
                  : tag.color.includes("green")
                  ? "border-green-500"
                  : tag.color.includes("pink")
                  ? "border-pink-500"
                  : "border-yellow-500"
              } border-opacity-50 transition-all hover:border-opacity-100 hover:shadow-lg hover:shadow-${
                tag.color.split("-")[1]
              }-500/20`}
            >
              <span className="text-[#915EFF]">$</span> {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    const handleResize = () => {};

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToNextProject = (projectName) => {
    const currentIndex = projects.findIndex((p) => p.name === projectName);
    if (currentIndex < projects.length - 1) {
      const nextProjectElement = document.querySelector(
        `#project-${projects[currentIndex + 1].name}`
      );
      if (nextProjectElement) {
        nextProjectElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#00d4ff]" />
          <p className="text-[#00d4ff] font-mono text-sm uppercase tracking-widest">
            &gt; portfolio.projects()
          </p>
        </div>
        <h2 className={`${styles.sectionHeadText} font-black text-white`}>
          <span className="text-[#00d4ff]">{"<"}</span> Works{" "}
          <span className="text-[#915EFF]">{"/"}</span>
          <span className="text-[#00d4ff]">{">"}</span>
        </h2>
        <p className="text-[#00d4ff] font-mono text-xs mt-2 opacity-70">
          {/* Interactive project showcase with live previews */}
        </p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] font-mono"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            id={`project-${project.name}`}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="mb-12"
          >
            <div className="hidden lg:block relative">
              <div className="lg:grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <ProjectCard index={index} {...project} />
                </div>

                <div className="absolute top-0 left-1/2 w-1/2 h-full flex items-center pointer-events-none">
                  <svg
                    className="absolute left-0 top-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
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

                <div>
                  <ProjectTerminal
                    projectName={project.name}
                    githubLink={project.source_code_link}
                    liveLink={project.deployed_link}
                    isMobile={false}
                    onNext={
                      index < projects.length - 1
                        ? () => handleScrollToNextProject(project.name)
                        : null
                    }
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:hidden relative">
              <div className="md:grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <ProjectCard index={index} {...project} />
                </div>

                <div className="absolute top-0 left-1/2 w-1/2 h-full flex items-center pointer-events-none">
                  <svg
                    className="absolute left-0 top-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
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

                <div>
                  <ProjectTerminal
                    projectName={project.name}
                    githubLink={project.source_code_link}
                    liveLink={project.deployed_link}
                    isMobile={true}
                    onNext={
                      index < projects.length - 1
                        ? () => handleScrollToNextProject(project.name)
                        : null
                    }
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden flex flex-col gap-6 relative">
              <div>
                <ProjectCard index={index} {...project} />
              </div>

              <div className="flex justify-center h-8 pointer-events-none">
                <svg width="40" height="32" style={{ overflow: "visible" }}>
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

              <div>
                <ProjectTerminal
                  projectName={project.name}
                  githubLink={project.source_code_link}
                  liveLink={project.deployed_link}
                  isMobile={true}
                  onNext={
                    index < projects.length - 1
                      ? () => handleScrollToNextProject(project.name)
                      : null
                  }
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
