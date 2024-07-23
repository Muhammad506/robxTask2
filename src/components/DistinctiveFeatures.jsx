import React from "react";

const DistinctiveFeatures = () => {
  return (
    <main className="bg-[#0F062C] flex flex-col items-center justify-center pt-14 lg:py-20 pb-28 p-4">
      <h2 className="self-start lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-10 p-4 text-center">
        <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24 left-1/2 transform -translate-x-1/2 md:translate-x-0">
          DISTINCTIVE
        </span>
        <span className="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
          FEATURES
        </span>
      </h2>
      <p className="text-white text-center md:text-start md:px-20 p-3 pt-8 text-lg md:text-2xl leading-10 lg:leading-normal">
        Our team of professionals has deep experience in AI development and an
        unwavering commitment to your security and privacy. Discover the power
        of our innovative features designed to unleash your potential and drive
        success.
      </p>

      {/* Card row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {/* card1 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card1.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Image Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Effortlessly transform words into captivating visuals...
              </p>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card2.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Social Ads
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Transform social ads with AI. Craft stunning posts...
              </p>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card3.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] lg:text-nowrap font-semibold mb-2">
              Content Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Fuel your content effortlessly with our AI. Generate...
              </p>
            </div>
          </div>
        </div>

        {/* card4 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card4.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2 lg:text-nowrap">
              Content Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Fuel your content effortlessly with our AI. Generate...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {/* card5 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card5.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Image Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Effortlessly transform words into captivating visuals...
              </p>
            </div>
          </div>
        </div>

        {/* card6 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card6.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Social Ads
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Transform social ads with AI. Craft stunning posts...
              </p>
            </div>
          </div>
        </div>

        {/* card7 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card7.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] lg:text-nowrap font-semibold mb-2">
              Content Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Fuel your content effortlessly with our AI. Generate...
              </p>
            </div>
          </div>
        </div>

        {/* card8 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card8.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2 lg:text-nowrap">
              Content Generator
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Fuel your content effortlessly with our AI. Generate...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {/* card9 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card9.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Course Builder
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Craft comprehensive courses effortlessly with our AI. Build...
              </p>
            </div>
          </div>
        </div>

        {/* card10 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card10.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2">
              Content Summary
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Summarize content effortlessly with our AI to simplify...
              </p>
            </div>
          </div>
        </div>

        {/* card11 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card11.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] lg:text-nowrap font-semibold mb-2">
              Website Content
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Craft your website effortlessly! Our AI generates compelling...
              </p>
            </div>
          </div>
        </div>

        {/* card12 */}
        <div className="p-3">
          <div className="flex flex-col items-center w-full h-72 md:w-64 lg:w-60 xl:w-72 rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] transition ease-in-out duration-500">
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <img
                src="card12.png"
                alt="blank"
                className="w-[100px] h-auto"
              ></img>
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold mb-2 lg:text-nowrap">
              Content Grammar
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
              Perfect your content and enhance grammar flawlessly with...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DistinctiveFeatures;
