import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { CodeSphereCanvas } from "./canvas";
import Terminal from "./canvas/Terminal";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      setIsTablet(window.innerWidth >= 900 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen md:h-screen mx-auto overflow-hidden bg-transparent">
      {/* Desktop Layout - Side by Side */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full flex">
          {/* Left Half - CodeSphere & Title */}
          <div className="w-full md:w-1/2 h-full relative z-0">
            {/* 3D Canvas */}
            <div className="absolute inset-0 w-full h-full">
              <CodeSphereCanvas />
            </div>

            {/* Text Content */}
            <div
              className={`absolute inset-0 top-[80px] md:top-[120px] max-w-full ${styles.paddingX} flex flex-row items-start gap-3 md:gap-5 z-10 pointer-events-none`}
            >
              <div className="flex flex-col justify-center items-center mt-5 pointer-events-auto flex-shrink-0">
                <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#915EFF] animate-pulse" />
                <div className="w-1 h-40 md:h-80 violet-gradient" />
              </div>

              <div className="pointer-events-auto">
                <h1 className={`${styles.heroHeadText}`}>
                  Hi, I'm <span className="text-gray-700">Divyanshu</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-gray-500`}>
                  Passionate developer crafting innovative solutions
                  <br className="sm:block hidden" />
                  with code and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-px h-full bg-gradient-to-b from-[#915EFF] via-[#00d4ff] to-[#915EFF] opacity-50 z-20" />

          {/* Right Half - Terminal */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-8 z-10">
            <Terminal />
          </div>
        </div>
      )}

      {/* Mobile Layout - Stacked Vertically */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full flex flex-col overflow-y-auto">
          {/* Top Section - CodeSphere & Title */}
          <div className="w-full h-1/2 md:h-1/3 relative z-0 flex-shrink-0">
            {/* 3D Canvas */}
            <div className="absolute inset-0 w-full h-full">
              <CodeSphereCanvas />
            </div>

            {/* Text Content - Mobile Version */}
            <div
              className={`absolute inset-0 top-[40px] max-w-full ${styles.paddingX} flex flex-col items-center justify-center text-center z-10 pointer-events-none`}
            >
              <div className="flex flex-col items-center gap-2 pointer-events-auto">
                <div className="w-4 h-4 rounded-full bg-[#915EFF] animate-pulse" />
                <h1 className="font-black text-[#dfd9ff] text-[28px] xs:text-[36px] leading-tight">
                  Hi, I'm <span className="text-gray-700">Divyanshu</span>
                </h1>
                <p className="font-medium text-[14px] xs:text-[16px] text-gray-500 mt-2">
                  Passionate developer crafting
                  <br />
                  innovative solutions with
                  <br />
                  code and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Divider Line - Horizontal */}
          <div className="w-full h-px bg-gradient-to-r from-[#915EFF] via-[#00d4ff] to-[#915EFF] opacity-50 z-20 flex-shrink-0" />

          {/* Bottom Section - Terminal */}
          <div className="w-full h-1/2 md:h-2/3 flex items-center justify-center p-4 z-10 flex-shrink-0">
            <Terminal />
          </div>
        </div>
      )}

      {/* Scroll Indicator - Higher z-index */}
      <div className="absolute xs:bottom-6 sm:bottom-8 md:bottom-10 bottom-32 w-full flex justify-center items-center z-30">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[28px] xs:w-[32px] h-[56px] xs:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-white transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
