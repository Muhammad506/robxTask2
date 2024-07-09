import React from "react";

const Section1 = () => {
  return (
    <main className="bg-[#0F062C] items-center justify-center text-center px-3 lg:px-52 ">
      <div className=" flex items-center justify-center text-center">
        <h2 class="lg:text-6xl text-5xl  font-normal relative lg:p-10 md:p-6 p-2">
          <span class="border-text text-white opacity-50  absolute md:top-3 lg:top-4 top-0 lg:left-10">
            Our Story &
          </span>
          <span class="gradient-span-1 text-[#E766FF] relative lg:p-6 p-6 font-[600]">
            ABOUT US
          </span>
        </h2>
      </div>
      <p className="text-white md:px-16 pb-11 md:p-0 font-serif md:text-2xl pt-8">
        Intelliwriter is an AI-based content generator designed to simplify and
        enhance your writing experience. Whether you are a content creator,
        marketer,student, or business owner, Intelliwriter is here to take your
        content creation process to a whole new level.
      </p>
    </main>
  );
};

export default Section1;
