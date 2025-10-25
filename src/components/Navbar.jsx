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
          ? "bg-primary backdrop-blur-sm bg-opacity-90 shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Divyanshu Mishra Logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Divyanshu Mishra &nbsp;
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-300 hover:scale-110 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="relative z-50 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "Close menu" : "Open menu"}
              className="w-[28px] h-[28px] object-contain cursor-pointer transition-transform hover:scale-110"
            />
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {toggle && (
          <div
            className="sm:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setToggle(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } sm:hidden p-6 black-gradient fixed top-20 right-0 mx-4 my-2 min-w-[200px] z-40 rounded-xl transition-all duration-300 ease-in-out shadow-2xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium text-[16px] cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-2 w-full`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`} className="block py-2">
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
