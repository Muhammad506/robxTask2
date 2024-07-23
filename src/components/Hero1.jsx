import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Hero1 = () => {
  return (
    <main className=" bg-gradient-to-t from-[#0F062C] to-[#7D28E9]">
      <div
        style={{
          backgroundImage: `url('hero_bg.png') `,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" pt-16 min-h-screen flex flex-col items-center justify-center text-white font-sans">
          <div className="text-center px-5 md:px-20 md:mt-24 mt-10">
            <div className="inline-block items-center justify-center border border-white rounded-2xl p-3 md:p-4 md:pr-10 md:pl-10 font-bold bg-[#1E0A45]">
              AI Expert in Image, Voice, and Content Creation with{" "}
              <span className="text-[#F64DFD] ml-2">Intelli GPT-4.</span>
            </div>
          </div>

          <div className="text-center text-white mt-8 md:mt-11 md:px-20">
            <h1 className="text-2xl md:text-7xl font-bold ">
              Platform for Crafting Content
            </h1>
            <h2 className="mt-4 md:mt-8 font-bold inline-flex items-center text-center justify-center w-full md:w-2/5 md:rounded-xl text-4xl md:text-4xl md:text-nowrap lg:text-6xl md:p-6 p-3 md:px-20 bg-[#4D0663]">
            <div className='App h-[60px]'>
      <Typewriter words={[ "AI Speech" ,"AI Content" , "AI Visuals"]} />
    </div>
              {/* AI Speech */}
            </h2>
            <h3 className="mt-0 md:mt-8 p-2 text-2xl md:text-6xl font-bold">
              with IntelliWriter.
            </h3>
            <p className="mt-0 md:mt-8 p-4 text-lg md:text-xl">
              AI Content Generator is here to help you create high-quality
              content in just a few seconds.
            </p>
          </div>
        </div>
      </div>
      <a href="blank" className="mt-4 md:mt-8 flex justify-center">
        <button className="border rounded-xl bg-gradient-to-r from-[#6B41FF] to-[#EE4BFF] px-6 py-3 flex items-center space-x-2 justify-center text-center">
          <img
            src="button-hero.svg"
            alt="Generate with AI"
            className="h-6 w-6"
          />
          <span className="text-lg md:text-xl font-bold text-white">
            <Link to="/register">
            Generate with AI
            </Link>
          </span>
        </button>
      </a>

      {/* button  */}
      <button className="z-50 fixed right-2 bottom-[15%] md:bottom-[10%] w-8 h-8 md:w-16 md:h-16 border-4 border-[#7b1fa2]  bg-[#ffff00] !text-black rounded-full flex items-center justify-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-[#7b1fa2]  text-[24px] "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path>
        </svg>
      </button>
    </main>
  );
};

export default Hero1;
