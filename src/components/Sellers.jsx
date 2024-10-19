import React from "react";
import arrow from "./assests/arrow.png";
import sponser_one from "./assests/sponser 1.png";
import sponser_two from "./assests/sponser 2.png";
import sponser_three from "./assests/sponser 3.png";
import sponser_four from "./assests/sponser 4.png";
import sponser_five from "./assests/sponser 5.png";
import sponser_six from "./assests/sponser 6.png";
import sponser_seven from "./assests/sponser 7.png";
import play_icon from "./assests/Play_icon.png";
import heroicon from "./assests/heroicon.png";

function Sellers() {
  return (
    <div>
      <div className="flex flex-col m-auto ">
        <div className="flex justify-between">
          <h2 className="font-gilroy">
            Proud to be part of{" "}
            <span className="text-[#003459] font-bold">Pet Sellers</span>
          </h2>
          <button className="flex items-center  rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
            View more
            <img src={arrow} alt="" />
          </button>
        </div>
        <div>
          <ul className=" flex items-center  gap-5">
            <li>
              <img src={sponser_one} alt="" />
            </li>
            <li>
              <img src={sponser_two} alt="" />
            </li>
            <li>
              <img src={sponser_three} alt="" />
            </li>
            <li>
              <img src={sponser_four} alt="" />
            </li>
            <li>
              <img src={sponser_five} alt="" />
            </li>
            <li>
              <img src={sponser_six} alt="" />
            </li>
            <li>
              <img src={sponser_seven} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <section className=" bg-custom-gradient  h-[695px]   p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 ">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002a48]">
              One More Friend <br /> Thousands More Fun!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you. We have 200+ different pets that can
              meet your needs!
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
              src={heroicon}
              alt="Happy dog and person"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sellers;
