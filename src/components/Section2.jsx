import React from "react";

const Section2 = () => {
  return (
    <main className="bg-[#0F062C] items-center text-center justify-center md:flex text-white md:p-4 md:px-5 md:py-20 font-serif fomt-bold">
      <div className="flex md:w-1/2  ">
        <img className="md:w-fit items-center justify-center text-center " src="Section2.png" alt=""></img>
      </div>
      <div className=" md:w-1/2 md:text-left md:px-5">
      <h1 className=" text-3xl p-6 py-14 md:p-0 md:text-6xl">Innovative <h className="text-[#EF59FF]">Image</h> Design</h1>
        <p className="md:pt-8 p-5 md:p-0  md:text-2xl">
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
