import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { IoIosMoon, IoMdDownload } from "react-icons/io";

import { MdSunny } from "react-icons/md";
import resume from "../../public/resume.pdf";

const Navbar = ({ isDarkMode, setisDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Niraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        isDarkMode ? "bg-primary" : "bg-secondary"
      } `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-contain rounded-full"
          />
          <p className="hidden sm:flex text-white text-[18px] font-bold cursor-pointer">
  Niraj &nbsp;
  <span className="hidden sm:block">| Software Developer</span>
</p>
        </Link>
        <div className="flex gap-5 lg:ml-56">
          <button
            className="flex items-center justify-center gap-2 font-medium text-[18px] bg-[#915EFF]  hover:bg-[#920EFF] h-9 w-28  rounded-xl"
            onClick={handleResumeDownload}
          >
            <IoMdDownload /> Resume
          </button>
          <p className="flex bg-slate-700 h-9 w-20 rounded-xl">
            <button
              onClick={() => setisDarkMode(false)}
              className={`${
                !isDarkMode ? "bg-[#915EFF]" : ""
              } flex w-[50%] items-center gap-2 font-medium text-[18px] px-2 py-1 rounded-tl-xl rounded-bl-xl transition delay-150 ease-in-out`}
            >
              <MdSunny />
            </button>
            <button
              onClick={() => setisDarkMode(true)}
              className={`${
                isDarkMode ? "bg-[#915EFF]" : ""
              } flex w-[50%] items-center gap-2 font-medium text-[18px] px-2 py-1 rounded-tr-xl rounded-br-xl transition delay-150 ease-in-out`}
            >
              <IoIosMoon />
            </button>
          </p>
        </div>
        <ul className="max-md:hidden sm:flex flex-row gap-10 list-none hidden">
          {navLinks.map((link) => (
            <li
              className={`font-medium cursor-pointer text-[18px] hover:text-white ${
                isDarkMode
                  ? `${active === link.title ? "text-white" : "text-secondary"}`
                  : `${active === link.title ? "text-white" : "text-black"}`
              } `}
              key={link.id}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
