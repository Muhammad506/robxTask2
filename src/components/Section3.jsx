import React from "react";

const Section3 = () => {
  return (
    <main className="bg-[#0F062C] items-center text-center justify-center md:flex text-white md:p-4 md:px-5 md:py-20 font-serif fomt-bold">
      <div className=" md:w-1/2 md:text-left md:px-5">
        <h1 className=" text-3xl p-6 py-14 md:p-0 md:text-6xl">
        Enhance <h className="text-[#EF59FF]">Voice</h> Experience
        </h1>
        <p className="md:pt-8 p-5 md:p-0  md:text-2xl">
          Discover the impact of professional voice-overs with our cutting-edge
          voice services. Ideal for both novices and seasoned professionals, our
          platform not only enhances your projects with high-quality audio but
          also offers a unique voice replication feature. With intuitive
          controls and advanced technology, you can input a voice sample and
          generate the same voice tone across your projects, ensuring
          consistency and quality.
        </p>
      </div>
      <div className="flex md:w-1/2  ">
        <img
          className="md:w-fit items-center justify-center text-center "
          src="Section3.png"
          alt=""
        ></img>
      </div>
    </main>
  );
};

export default Section3;
