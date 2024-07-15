import React from "react";

const Section2 = () => {
  return (
    <main className="bg-[#0F062C] items-center text-center justify-center lg:flex text-white lg:p-4 md:px-5 lg:py-20 font-serif font-bold">
      <div className="lg:flex lg:w-1/2">
        <img
          className="w-full md:w-auto lg:w-fit items-center justify-center text-center"
          src="Section2.png"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 lg:text-left lg:px-5">
        <h1 className="text-3xl p-3 py-14 lg:p-0 lg:text-6xl">
          Innovative <span className="text-[#EF59FF]">Image</span> Design
        </h1>
        <p className="lg:pt-8 p-5 md:p-0 md:text-2xl leading-10 lg:leading-normal">
          The Intelliwriter Image Generator Module is a powerful addition to the
          Intelliwriter platform, enabling users to effortlessly create custom
          images that enhance their written content. With intuitive controls and
          advanced algorithms, this module ensures a seamless integration of
          dynamic visuals, elevating the overall impact and engagement of your
          message across various platforms.
        </p>
      </div>
    </main>
  );
};

export default Section2;
