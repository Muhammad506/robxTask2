import React from "react";

const IntelliWriterPage = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen ">
      <main className="flex-1 py-12 px-8 text-center  justify-center">
        <div className="flex">
          <div className=" w-1/3 justify-start items-start text-start">
            <img className="w-60 p-2 ml-10" src="navbar.png" alt=""></img>
            <p className="text-lg mb-8 p-2 ml-10 font-serif">
              Intelliwriter is an AI-powered tool crafted to streamline and
              elevate your writing experience. Whether you’re a content creator,
              marketer, student, or business owner, Intelliwriter is designed to
              transform and enhance your content creation process.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="blank" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="blank" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="blank" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="blank" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-8">
            <div className="text-left mb-8">
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
            <div className="text-left mb-8">
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
            <div className="text-left mb-8">
              <h2 className="text-xl font-semibold mb-4">Important Links</h2>
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
      </main>
      <footer className="py-4 text-center text-gray-500">
        Intelliwriter.io © All rights reserved.
      </footer>
    </div>
  );
};

export default IntelliWriterPage;
