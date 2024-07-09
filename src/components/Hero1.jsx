import React from "react";

const Hero1 = () => {
  return (
    <main className="bg-gradient-to-t from-[#0F062C] to-[#7D28E9]">
      <div
        style={{
          backgroundImage: `url('hero_bg.png') `,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backdropFilter: "50%",
        
        }}
      >
        <div className=" pt-24 min-h-screen flex flex-col items-center justify-center text-white font-sans">
          <div className="text-center px-5 md:px-20 md:mt-24 mt-10">
            <div className="inline-block items-center justify-center border border-white rounded-2xl p-3 md:p-4 md:pr-10 md:pl-10 font-bold bg-[#1E0A45]">
              AI Expert in Image, Voice, and Content Creation with{" "}
              <span className="text-[#F64DFD] ml-2">Intelli GPT-4.</span>
            </div>
          </div>

          <div className="text-center text-white mt-8 md:mt-16 md:px-20">
            <h1 className="text-2xl md:text-7xl font-bold ">
              Platform for Crafting Content
            </h1>
            <h2 className="mt-4 md:mt-8 font-bold inline-flex items-center text-center justify-center w-full md:w-2/5 md:rounded-xl text-4xl md:text-4xl md:text-nowrap lg:text-6xl md:p-6 p-3 md:px-20 bg-[#4D0663]">
              AI Speech
            </h2>
            <h3 className="mt-4 md:mt-8 p-4 text-2xl md:text-7xl font-bold">
              with IntelliWriter.
            </h3>
            <p className="mt-4 md:mt-8 p-4 text-lg md:text-2xl">
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
          <span className="text-lg md:text-xl font-bold text-white">Generate with AI</span>
        </button>
      </a>
    </main>
  );
};

export default Hero1;
