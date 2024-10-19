import React from "react";
import facebook from "./assests/Facebook.png";
import twitter from "./assests/Twitter.png";
import instagram from "./assests/Instagram.png";
import youtube from "./assests/YouTube.png";
import logo from "./assests/Frame.png";

function Footer() {
  return (
    <div className="flex flex-wrap font-gilroy ">
      <div className=" items-center  flex-col">
        <div className=" justify-normal items-center gap-2  p-4 bg-[#002a48] mt-16 rounded-lg">
          <p className=" text-white font-gilroy-700 text-2xl ">
            Register Now So You Don't Miss Our Programs
          </p>
          <div className=" bg-white w-[707px] m-16 p-4 ">
            <input
              className="px-8 py-3 rounded-[57px] border-5 border-solid-500 "
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="rounded-[57px] gap-12  px-8 py-3 text-white font-bold text-sm whitespace-nowrap bg-[#003459]">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className=" justify-between  items-center m-16">
        <div>
        <ul className=" flex justify-start gap-16  items-center">
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
        <div className="flex  items-center gap-16">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="flex items-center m-6">
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
