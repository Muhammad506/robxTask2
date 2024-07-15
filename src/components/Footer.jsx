import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0F062C] text-white font-sans min-h-screen">
      <main className="flex-1 py-12 px-8 text-start justify-center">
        <div className="border-y border-gray-600">
          <div className="pt-10 flex flex-col lg:flex-row md:space-x-8 items-start">
            <div className="w-full lg:w-2/5 lg:w-40%">
              <img
                className="w-60 p-2 lg:ml-10"
                src="navbar.png"
                alt=""
              />
              <p className="text-lg mb-8 p-2 lg:ml-10 font-serif">
                Intelliwriter is an AI-powered tool crafted to streamline and
                elevate your writing experience. Whether you’re a content
                creator, marketer, student, or business owner, Intelliwriter is
                designed to transform and enhance your content creation process.
              </p>
              <div className="text-white flex justify-start lg::justify-start space-x-4 mb-8 md:mb-0 md:ml-10">
              <a href="https://twitter.com/intelliwriter1" className="text-gray-300 hover:text-white">
                <FaTwitter className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg"/>
              </a>
              <a href="https://www.linkedin.com/company/intelliwriter.io/" className="text-gray-300 hover:text-white">
                <FaLinkedin className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg"/>
              </a>
              <a href="https://www.facebook.com/Intelliwriter.io/" className="text-gray-300 hover:text-white">
                <FaFacebookF className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg"/>
              </a>
              <a href="https://www.instagram.com/intelliwriter_/" className="text-gray-300 hover:text-white">
                <FaInstagram className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg"/>
              </a>
            </div>
            </div>

           
            <div className="flex flex-col md:flex-row justify-center md:space-x-8 mt-8 md:mt-0">
              <div className="text-left mb-8 md:pl-10 leading-loose">
                <h2 className="text-xl font-semibold mb-4">General</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      APIs
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left mb-8 md:pl-10 leading-loose">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Bypass AI
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Social Content
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Blog Content
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Website Content
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Marketing Content
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Image Generator
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Voice Generator
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Text Generator
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Chatting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left mb-8 md:pl-10 leading-loose">
                <h2 className="text-xl font-semibold mb-4 text-nowrap">
                  Important Links
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Ada Compliance
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Become an affiliate
                    </a>
                  </li>
                  <li>
                    <a href="blank" className="text-gray-300 hover:text-white">
                      Free AI tools
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center text-center text-gray-500">
        <div className="text-pink-500">Intelliwriter.io</div> © All rights
        reserved.
      </footer>
    </div>
  );
};

export default Footer;
