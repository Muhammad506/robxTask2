import React, { useState, useEffect } from "react";

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
      className={`p-5 fixed w-full transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-white"
          : "bg-[#00003b] backdrop-filter backdrop-blur-md"
      }`}
    >
      <div className="text-white flex justify-between items-center">
        <div className="flex items-center">
          <a href="blank">
            <img
              className="w-24 lg:w-36 pl-2 lg:pl-6"
              src="./navbar.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="block lg:hidden">
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto mt-2 lg:mt-0`}
        >
          <a className="p-2 lg:px-4" href="About">
            About
          </a>
          <div className="relative group">
            <span className="p-2 lg:px-4 cursor-pointer">
              AI Tools
              <svg
                className="w-5 h-5 ml-1 text-white inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 10a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 00-6 0 1 1 0 01-2 0zM7 7a3 3 0 116 0 1 1 0 11-2 0 1 1 0 00-2 0H9a1 1 0 00-2 0 1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="absolute hidden bg-black text-white shadow-lg group-hover:block mt-1 py-2 rounded-lg z-10 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-wrap">
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 1
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 2
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 3
                </a>
              </div>
              <div className="flex flex-wrap">
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 1
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 2
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 3
                </a>
              </div>
              <div className="flex flex-wrap">
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 1
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 2
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 3
                </a>
              </div>
              <div className="flex flex-wrap">
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 1
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 2
                </a>
                <a href="blank" className="block px-4 py-2 w-full sm:w-1/3">
                  Tool 3
                </a>
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
          <a href="blank">
            <button className="text-white rounded-full p-2 lg:px-4 bg-gradient-to-r from-[#471c7c] to-[#7628d6]">
              Register
            </button>
          </a>
          <a href="blank">
            <button className="text-white border border-white rounded-full px-4 py-2 mt-2 lg:mt-0 lg:ml-2">
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
