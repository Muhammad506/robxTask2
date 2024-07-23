import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaDotCircleSolid } from "react-icons/lia";
import { FaBarcode } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FuturePlans = () => {
  return (
    <main className="bg-[#0F062C] pb-14">
      <div className="xl:px-16 md:px-6 px-4 w-full container mx-auto">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 px-10 py-4">
            
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10 left-4">
            GET STARTED
          </span>
          <span className="gradient-span-1 text-[#EC5CFF] relative lg:p-6 p-4 font-[600]">
            FUTURE PLANS
          </span>
        </h2>
        <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] text-white lg:px-10 md:px-6 px-4 pb-10">
            <div className="md:px-10">
          Simple pricing plans for everyone and every budget.
            </div>
            
        </p>
        <div className="w-full">
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center xl:gap-10 gap-7 xl:px-10 md:px-6 px-4">
              {/* Plan Card 1 */}
              <div className="bg-white/5 hover:bg-white/10 md:max-w-[480px] w-full relative overflow-hidden border-[#FFFFFF14] text-white text-opacity-70 shadow-lg rounded-xl space-y-5 border transition duration-300">
                <div className="p-4"></div>
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[30px]"></div>
                <div className="absolute top-4 left-4 bg-[#9a58eb] w-16 h-16 blur-[50px]"></div>
                <div className="w-full flex flex-col justify-between gap-5 relative 2xl:px-6 xl:px-5 lg:px-4 px-3">
                  <div className="flex items-center lg:gap-3 gap-2">
                    <div className="xl:text-[40px] lg:text-[25px] text-xl text-white">
                      <FaRegCheckCircle />
                    </div>
                    <div>
                      <p className="text-white xl:text-lg lg:text-base text-sm tracking-widest font-extralight">
                        Starter plan
                      </p>
                      <p className="text-white xl:text-2xl lg:text-xl text-lg tracking-widest font-bold pb-3">
                        Basic Pack
                      </p>
                    </div>
                  </div>
                  <p className="xl:text-5xl lg:text-4xl text-3xl text-white/90">
                    <span className="pricing-font">0</span>
                    <span className="text-base font-light pl-1">USD</span>
                    <span className="text-base font-extralight">/month</span>
                  </p>
                  <div className="w-full flex justify-center">
                    <NavLink to="/Register" className="w-full">
                      <button className="bg-gradient-to-bl flex-1 transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full w-full">
                        Subscribe now
                      </button>
                    </NavLink>
                  </div>
                  <div className="py-6">
                    <ul className="flex flex-col gap-3">
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>2000 Content Words</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>No Free Images</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>GPT-4 Integration</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>10 Chats Prompts</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Voice Over (20 words per attempt)</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>All Tools Access</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Plan Card 2 */}
              <div className="bg-white/5 hover:bg-white/10 md:max-w-[480px] w-full relative overflow-hidden border-[#FFFFFF14] text-white text-opacity-70 shadow-lg rounded-xl space-y-5 border transition duration-300 md:scale-110">
                <div className="bg-gradient-to-r xl:text-base lg:text-sm text-xs text-white font-medium from-black/60 to-[#471c7c] py-1 text-center">
                  Recommended
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[30px]"></div>
                <div className="absolute top-4 left-4 bg-[#9a58eb] w-16 h-16 blur-[50px]"></div>
                <div className="w-full flex flex-col justify-between gap-5 relative 2xl:px-6 xl:px-5 lg:px-4 px-3">
                  <div className="flex items-center lg:gap-3 gap-2">
                    <div className="xl:text-[40px] lg:text-[25px] text-xl text-white">
                      <FaBarcode />
                    </div>
                    <div>
                      <p className="text-white xl:text-lg lg:text-base text-sm tracking-widest font-extralight">
                        Most popular
                      </p>
                      <p className="text-white xl:text-2xl lg:text-xl text-lg tracking-widest font-bold pb-3">
                        Standard Pack
                      </p>
                    </div>
                  </div>
                  <p className="xl:text-5xl lg:text-4xl text-3xl text-white/90">
                    <span className="pricing-font">9.99</span>
                    <span className="text-base font-light pl-1">USD</span>
                    <span className="text-base font-extralight">/month</span>
                  </p>
                  <div className="w-full flex justify-center">
                    <NavLink to="/Register" className="w-full">
                      <button className="bg-gradient-to-bl flex-1 transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full w-full">
                        Subscribe now
                      </button>
                    </NavLink>
                  </div>
                  <div className="py-6">
                    <ul className="flex flex-col gap-3">
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>2000 Content Words</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>50 Free Images</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>GPT-4 Integration</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>15 Chats Prompts</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Voice Over (50 words per attempt)</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>All Tools Access</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Plan Card 3 */}
              <div className="bg-white/5 hover:bg-white/10 md:max-w-[480px] w-full relative overflow-hidden border-[#FFFFFF14] text-white text-opacity-70 shadow-lg rounded-xl space-y-5 border transition duration-300">
                <div className="p-4"></div>
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[30px]"></div>
                <div className="absolute top-4 left-4 bg-[#9a58eb] w-16 h-16 blur-[50px]"></div>
                <div className="w-full flex flex-col justify-between gap-5 relative 2xl:px-6 xl:px-5 lg:px-4 px-3">
                  <div className="flex items-center lg:gap-3 gap-2">
                    <div className="xl:text-[40px] lg:text-[25px] text-xl text-white">
                      <FaSlack />
                    </div>
                    <div>
                      <p className="text-white xl:text-lg lg:text-base text-sm tracking-widest font-extralight">
                        Business
                      </p>
                      <p className="text-white xl:text-2xl lg:text-xl text-lg tracking-widest font-bold pb-3">
                        Premium Pack
                      </p>
                    </div>
                  </div>
                  <p className="xl:text-5xl lg:text-4xl text-3xl text-white/90">
                    <span className="pricing-font">19.99</span>
                    <span className="text-base font-light pl-1">USD</span>
                    <span className="text-base font-extralight">/month</span>
                  </p>
                  <div className="w-full flex justify-center">
                    <NavLink to="/Register" className="w-full">
                      <button className="bg-gradient-to-bl flex-1 transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full w-full">
                        Subscribe now
                      </button>
                    </NavLink>
                  </div>
                  <div className="py-6">
                    <ul className="flex flex-col gap-3">
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Unlimited Content Words</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Unlimited Free Images</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>GPT-4 Integration</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Unlimited Chats Prompts</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>Voice Over (100 words per attempt)</div>
                      </li>
                      <li className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full">
                        <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                          <LiaDotCircleSolid />
                        </div>
                        <div>All Tools Access</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FuturePlans;
