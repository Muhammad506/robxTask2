import React, { useState } from "react";

const Bottom = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <main>
      <div className="fixed bottom-0 w-full flex justify-between items-center bg-gray-900 text-white p-4 z-20">
        <p>This website uses cookies to enhance user experience.</p>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleHide}
            className="w-full bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full"
          >
            <span className="flex-1">Allow Cookies</span>
          </button>
          <button
            type="button"
            onClick={handleHide}
            className="bg-slate-500 hover:bg-black py-1 px-2 lg:px-8 rounded-3xl focus:outline-none transition duration-300 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default Bottom;
