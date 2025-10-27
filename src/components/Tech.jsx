import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#00d4ff]" />
          <p className="text-[#00d4ff] font-mono text-sm uppercase tracking-widest">
            &gt; system.loadTechnologies()
          </p>
        </div>
        <h2 className="text-5xl font-black text-white font-mono">
          <span className="text-[#00d4ff]">{"<"}</span> Skills{" "}
          <span className="text-[#915EFF]">{"/"}</span>
          <span className="text-[#00d4ff]">{">"}</span>
        </h2>
        <p className="text-[#00d4ff] font-mono text-xs mt-2 opacity-70">
          {/* Technologies & tools I work with */}
        </p>
      </div>

      <div
        id="tech-section"
        className="flex flex-row flex-wrap justify-center gap-10 p-8 rounded-lg border border-[#915EFF] border-opacity-30 bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-sm"
      >
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 transition-transform duration-300 hover:scale-110 group relative flex items-center justify-center"
            key={technology.name}
            title={technology.name}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500" />

            <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#915EFF] border-opacity-30 group-hover:border-opacity-100 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain filter brightness-100 group-hover:brightness-125 transition-all duration-300"
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#00d4ff] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
