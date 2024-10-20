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
import foot_icon from "./assests/dog_foot.png";

function Sellers() {
  return (
    <div>
      <div className="flex flex-col m-auto mt-6 mx-6 ">
        <div className="flex md:justify-between ">
          <h2 className="font-gilroy">
            Proud to be part of {""}
            <span className="text-[#003459] font-bold">Pet Sellers</span>
          </h2>
          <button className="flex items-center  rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
            View more
            <img src={arrow} alt="" />
          </button>
        </div>
        <div>
          <ul className="  justify-between m-auto flex items-center  gap-5">
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
        <section className="flex flex-col m-auto mx-6 my-4 md:h-[378px] rounded-xl md:flex-row justify-between items-center px-8 py-4 bg-custom-gradient  mx-auto">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0  ">
            <h1 className="flex items-center  text-4xl md:text-6xl font-gilroy font-extrabold  text-[#002a48] mb-4">
              Adoption
              <span>
                <img src={foot_icon} alt="dog foot" />
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold  font-gilroy text-[#002a48] mb-6">
              We Need Help.So Do They.
            </h2>
            <p
              className="text-lg background: #242B33;
 mb-4"
            >
              Adopt a pet and give it a home, <br></br> it will be love you back
              unconditionally.
            </p>

            <div className="flex space-x-4 ">
              <button class="rounded-[57px]  px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459]">
                Explore Now
              </button>
              <button className="flex items-center whitespace-nowrap   rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
                View Intro
                <img className="ml-2" src={play_icon} alt="" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <img
              src={heroicon}
              alt="hand with person hand"
              className="rounded-lg "
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sellers;
