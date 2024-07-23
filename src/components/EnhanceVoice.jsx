import React from "react";

const EnhanceVoice = () => {
  return (
    <main className="bg-[#0F062C] flex flex-col lg:flex-row items-center text-center lg:text-left justify-center text-white md:p-4 lg:px-5 lg:py-20 font-serif ">
      <div className="lg:w-1/2 md:px-5 order-2 lg:order-1">
        <h1 className="text-3xl p-6 py-14 md:p-0 md:text-4xl lg:text-5xl">
          Enhance <span className="text-[#EF59FF]">Voice</span> Experience
        </h1>
        <p className="lg:pt-8 p-5 lg:p-0 md:text-2xl leading-10  lg:leading-relaxed">
          Discover the impact of professional voice-overs with our cutting-edge
          voice services. Ideal for both novices and seasoned professionals, our
          platform not only enhances your projects with high-quality audio but
          also offers a unique voice replication feature. With intuitive
          controls and advanced technology, you can input a voice sample and
          generate the same voice tone across your projects, ensuring
          consistency and quality.
        </p>
      </div>
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          className="w-full sm:px-3 lg:px-0 md:px-20 md:w-auto lg:w-fit"
          src="Section3.png"
          alt="Voice Experience"
        />
      </div>
    </main>
  );
};

export default EnhanceVoice;
