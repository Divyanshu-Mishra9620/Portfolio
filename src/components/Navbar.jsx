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
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-slate-950 to-slate-900 backdrop-blur-md bg-opacity-95 shadow-lg shadow-purple-500/20 border-b border-[#915EFF] border-opacity-30"
          : "bg-gradient-to-b from-slate-950 to-transparent border-b border-[#915EFF] border-opacity-20"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 transition-all hover:scale-105 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] rounded blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <img
              src={logo}
              alt="Divyanshu Mishra Logo"
              className="relative w-9 h-9 object-contain"
            />
          </div>
          <p className="text-[#00d4ff] text-[18px] font-bold cursor-pointer flex font-mono group-hover:text-[#915EFF] transition-colors">
            <span className="text-[#915EFF]">{"<"}</span>
            dev
            <span className="text-[#915EFF]">{"/"}</span>
            <span className="text-[#00d4ff]">{">"}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#00d4ff]" : "text-gray-300"
              } hover:text-[#00d4ff] text-[16px] font-mono font-medium cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="flex items-center gap-1">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {">"}
                </span>
                {link.title}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00d4ff] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="relative z-50 focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded-lg p-1 text-[#00d4ff] hover:text-[#915EFF] transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "Close menu" : "Open menu"}
              className="w-[28px] h-[28px] object-contain cursor-pointer transition-transform hover:scale-110 invert brightness-150"
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
          } sm:hidden p-6 fixed top-20 right-0 mx-4 my-2 min-w-[200px] z-40 rounded-lg transition-all duration-300 ease-in-out shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-950 border border-[#915EFF] border-opacity-50 backdrop-blur-md`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#00d4ff]" : "text-gray-300"
                } font-mono font-medium text-[16px] cursor-pointer transition-all duration-200 hover:text-[#00d4ff] hover:translate-x-2 w-full`}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
