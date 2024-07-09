import React from 'react';

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0F062C] flex items-center justify-center text-center py-24">
      <button
        onClick={handleScroll}
        className=" p-5 py-8 text-white border rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F062C]"
      >
        
      </button>
    </div>
  );
};

export default ScrollButton;
