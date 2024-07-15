import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { SiBloglovin } from "react-icons/si";
import { FaRegShareSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiVoiceprintFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbTextCaption } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaImage } from "react-icons/fa";
import { MdVoiceChat } from "react-icons/md";
import { GiMeshBall } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` z-50 px-5 py-4  fixed w-full transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-white"
          : "bg-[#00003b] backdrop-filter backdrop-blur-md"
      }`}
    >
      <div className="text-white flex flex-col lg:flex-row justify-between items-center">
        <div className="flex lg:flex-col md:flex-row md:w-full lg:w-1/5 justify-between">
          <div className="flex items-center justify-between w-2/4 md:w-1/5 lg:w-2/4">
            <a href="blank">
              <img
                className="w-9/12 md:w-full pl-2 lg:pl-6"
                src="./navbar.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="block lg:hidden self-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "hidden" : "flex"
          }  flex-col lg:flex-row md:flex-row md:self-center self-start md:w-full lg:w-4/5  mt-2 lg:mt-0 lg:text-lg md:text-sm`}
        >
          <div className="flex flex-col md:flex-row w-full justify-center self-center md:items-center">
            <a className="p-2 lg:px-4" href="About">
              About
            </a>
            <div className="relative group">
              <span className="p-2 lg:px-4 cursor-pointer">AI Tools</span>
              <div className="absolute hidden bg-black text-white shadow-lg group-hover:block mt-1 w-auto text-nowrap rounded-lg">
                <div className="flex flex-row px-14 pr-20 py-14">
                  <ul className="pr-20 grid gap-10">
                    <li className="flex items-center gap-4">
                      <SiBloglovin className="size-7" />
                      <p>Blog Content</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <CgWebsite className="size-7" />
                      <p>Website</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <RiVoiceprintFill className="size-7" />
                      <p>AI Voice Generator</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <FaYoutube className="size-7" />
                      <p>Youtube Content</p>{" "}
                    </li>
                  </ul>
                  <ul className="pr-20 grid gap-10">
                    <li className="flex items-center gap-4">
                      <FaRegShareSquare className="size-7" />
                      <p>Social Media</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <FaBook className="size-7" />
                      <p>Course Builder</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <TbTextCaption className="size-7" />
                      <p>Image Caption Generator</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <SiChatbot className="size-7" />
                      <p>
                        <Link to="/Register">AI Chat</Link>
                      </p>{" "}
                    </li>
                  </ul>
                  <ul className="grid gap-10">
                    <li className="flex items-center gap-4">
                      <SiGooglemarketingplatform className="size-7" />
                      <p>Marketing</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <FaImage className="size-7" />
                      <p>AI Image Generator</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <MdVoiceChat className="size-7" />
                      <p>Speech Content</p>{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <GiMeshBall className="size-7" />
                      <p>Free AI Tools</p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a className="p-2 lg:px-4" href="Bypass AI">
              Bypass AI
            </a>
            <a className="p-2 lg:px-4" href="APIs">
              APIs
            </a>
            <a className="p-2 lg:px-4" href="Pricing">
              Pricing
            </a>
            <a className="p-2 lg:px-4" href="Blogs">
              Blogs
            </a>
            <a className="p-2 lg:px-4" href="Home">
              Become an Affiliate
            </a>
          </div>
          <div className="flex pr-10 gap-4 text-lg justify-evenly md:justify-center items-center md:text-sm lg:text-base">
            <NavLink
              className="text-white rounded-full p-2 px-6 bg-gradient-to-r from-[#471c7c] to-[#7628d6]"
              to="/Register"
            >
              <button>Register</button>
            </NavLink>

            <NavLink
              className="text-white border-2 border-white rounded-full px-6 py-2 lg:mt-0 lg:ml-2"
              to="/login"
            >
              <button>Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
