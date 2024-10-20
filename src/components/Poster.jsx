import React from "react";
import poster from "./assests/poster.png";
import play_Icon from "./assests/Play_icon.png";

const Poster = () => {
  return (
    <section className="flex flex-col m-auto md:flex-row justify-between items-center px-8 py-16 bg-custom-gradient  mx-auto">
      {/* Left Column */}
      <div className="md:w-1/2 mb-8 md:mb-0  ">
        <h1 className="text-4xl md:text-6xl font-gilroy font-extrabold  text-[#002a48] mb-4">
          One More Friend
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold  font-gilroy text-[#002a48] mb-6">
          Thousands More Fun!
        </h2>
        <p
          className="text-lg background: #242B33;
 mb-4"
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun.
        </p>

        <div className="flex space-x-4">
          <button className="flex items-center   rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
            View more
            <img className="ml-2" src={play_Icon} alt="" />
          </button>
          <button class="rounded-[57px] gap-12  px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459]">
            Explore Now
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2">
        <img src={poster} alt="dog & person" className="rounded-lg " />
      </div>
    </section>
  );
};

export default Poster;
