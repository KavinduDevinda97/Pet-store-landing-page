import React from "react";
import facebook from "./assests/Facebook.png";
import twitter from "./assests/Twitter.png";
import instagram from "./assests/Instagram.png";
import youtube from "./assests/YouTube.png";
import logo from "./assests/Frame.png";

function Footer() {
  return (
    <div className="items-center font-gilroy font-bold bg-custom-gradient mt-6 rounded-lg  ">
      <div className="flex m-auto ">
        <div className="flex flex-wrap items-center w-auto mx-auto  bg-[#002a48] mt-10 rounded-lg">
          <p className="pt-4 px-10 text-white font-gilroy-700 text-2xl  ">
            Register Now So You Don't Miss Our Programs
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap w-auto bg-white m-10 p-4 gap-2 rounded-xl items-center justify-center md:">
              <input
                className="px-2 py-2 rounded-lg border border-[#99A2A5] w-full md:w-auto"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="rounded-lg font-gilroy  px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459] w-full md:w-auto">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-auto  m-10">
        <div className="flex ">
          <ul className=" flex gap-2">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="home">Category</a>
            </li>
            <li>
              <a href="home">About</a>
            </li>
            <li>
              <a href="home">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-16">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 items-center m-4 md:justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className=" flex  gap-16  ">
            <li>
              <a href="home">Terms of Service</a>
            </li>
            <li>
              <a href="home">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <p>&copy; 2022 Monito.All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
