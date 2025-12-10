import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600" />
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
            &gt; system.loadTechnologies()
          </p>
        </div>
        <h2 className="text-5xl font-black text-white font-mono">
          <span className="text-gray-400">{"<"}</span> Skills{" "}
          <span className="text-white">{"/"}</span>
          <span className="text-gray-400">{">"}</span>
        </h2>
        <p className="text-gray-400 font-mono text-xs mt-2 opacity-70"></p>
      </div>

      <div
        id="tech-section"
        className="flex flex-row flex-wrap justify-center gap-10 p-8 rounded-lg border border-white border-opacity-30 bg-black backdrop-blur-sm"
      >
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 transition-transform duration-300 hover:scale-110 group relative flex items-center justify-center"
            key={technology.name}
            title={technology.name}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500" />

            <div className="relative w-full h-full rounded-lg overflow-hidden border border-white border-opacity-30 group-hover:border-opacity-100 bg-black flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/30">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain filter brightness-100 group-hover:brightness-125 transition-all duration-300"
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
