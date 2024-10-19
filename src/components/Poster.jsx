import React from "react";
import poster from "./assests/poster.png";
import play_icon from "./assests/Play_icon.png";

const Banner = () => {
  return (
    <section className=" bg-custom-gradient  p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002a48]">
          One More Friend <br /> Thousands More Fun!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you. We have 200+ different pets that can meet
          your needs!
        </p>
        <div className="flex justify-normal items-center ">
          <button className=" rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
            View Intro
            <img src={play_icon} alt="" />
          </button>
          <button class="rounded-[57px] gap-12  px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459]">
            Explore more
          </button>
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <img
          src={poster}
          alt="Happy dog and person"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default Banner;
