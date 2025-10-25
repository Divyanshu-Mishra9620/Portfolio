import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedTechs, setLoadedTechs] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tech-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleBallLoad = (techName) => {
    setLoadedTechs((prev) => new Set([...prev, techName]));
  };

  return (
    <div
      id="tech-section"
      className="flex flex-row flex-wrap justify-center gap-10"
      style={{ willChange: "transform" }}
    >
      {technologies.map((technology, index) => (
        <div
          className="w-28 h-28 transition-transform duration-300 hover:scale-110"
          key={technology.name}
          title={technology.name}
          style={{
            contain: "layout style paint",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          {isVisible || loadedTechs.has(technology.name) ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
