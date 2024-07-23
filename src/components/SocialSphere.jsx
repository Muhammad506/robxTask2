import React from "react";

const SocialSphere = () => {
  return (
    <main className="bg-[#0F062C] ">
      <div className="px-16 items-center justify-center ">
        <h2 class="lg:text-6xl text-5xl font-normal relative lg:p-10   md:p-10 p-4 ">
          <span class="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24">
            EXPLORE OUR
          </span>
          <span class="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
            SOCIAL SPHERE
          </span>
        </h2>
      </div>

      <div className="md:block hidden">
        <img
          className="md:px-40 p-10"
          src="https://intelliwriter.io/_next/image?url=%2FSocialAppsLandscape.webp&w=1200&q=75"
          alt="blank"
        />
      </div>

      <div className="block md:hidden">
        <img
          className="p-10"
          src="https://intelliwriter.io/_next/image?url=%2FSocialAppsMob.webp&w=1200&q=75"
          alt="blank"
        />
      </div>
    </main>
  );
};

export default SocialSphere;
