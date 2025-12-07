import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-6 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700"
          : "bg-slate-950/90 backdrop-blur-sm border-b border-slate-800"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 transition-all hover:scale-105 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="Divyanshu Mishra Logo"
              className="relative w-10 h-10 object-contain brightness-110"
            />
          </div>
          <p className="text-white text-[20px] font-bold cursor-pointer flex font-mono group-hover:text-[#915EFF] transition-colors">
            <span className="text-[#915EFF]">{"<"}</span>
            dev
            <span className="text-[#915EFF]">{"/"}</span>
            <span className="text-[#00d4ff]">{">"}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-gray-300"
              } hover:text-white text-[17px] font-mono font-semibold cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="flex items-center gap-1">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#915EFF]">
                  {">"}
                </span>
                {link.title}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#915EFF] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}

          <li>
            <a
              href="https://docs.google.com/document/d/1crSgkLvDzAUBp4ZKHvKUNv08xdSJH2KOvZ4B7P2OgLU/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-mono font-bold text-[15px] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 group/resume"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover/resume:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="relative z-50 focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded-lg p-1 text-white hover:text-[#915EFF] transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "Close menu" : "Open menu"}
              className="w-[32px] h-[32px] object-contain cursor-pointer transition-transform hover:scale-110 invert brightness-150"
            />
          </button>
        </div>

        {toggle && (
          <div
            className="sm:hidden fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setToggle(false)}
            aria-hidden="true"
          />
        )}

        <div
          className={`${
            toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } sm:hidden p-6 fixed top-20 right-0 mx-4 my-2 min-w-[220px] z-40 rounded-lg transition-all duration-300 ease-in-out shadow-xl bg-slate-900/95 border border-slate-700 backdrop-blur-md`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-gray-300"
                } font-mono font-semibold text-[17px] cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-2 w-full`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${link.id}`}
                  className="flex items-center gap-2 py-2"
                >
                  <span className="text-[#915EFF]">{">"}</span>
                  {link.title}
                </a>
              </li>
            ))}

            <li className="w-full pt-2 border-t border-slate-700">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setToggle(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-mono font-bold text-[15px] rounded-lg transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
