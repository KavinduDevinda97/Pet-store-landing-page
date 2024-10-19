import React from "react";
import facebook from "./assests/Facebook.png";
import twitter from "./assests/Twitter.png";
import instagram from "./assests/Instagram.png";
import youtube from "./assests/YouTube.png";
import logo from "./assests/Frame.png";

function Footer() {
  return (
    <div className=" font-gilroy font-bold ">
      <div className=" items-center ">
        <div className="flex items-center gap-2 w-[1180px] m-auto  p-8  bg-[#002a48] mt-10 rounded-lg">
          <p className=" text-white font-gilroy-700 text-2xl ">
            Register Now So You Don't Miss Our Programs
          </p>
          <div className="flex w-[583px]  bg-white w-[707px] justify-between  m-16 p-4 rounded-xl ">
            <input
              className="px-8 py-3 rounded-lg border border-[#99A2A5]  "
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="rounded-lg   px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459]">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between  m-16">
        <div>
          <ul className="flex gap-16  items-center">
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
      <div className="flex justify-between items-center m-6">
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
