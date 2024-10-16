import React from "react";
import { carousel } from "../assets/assets";
import {
  IoLocationSharp,
  IoChevronForward,
  IoCall,
  IoMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${carousel[0].bg_img})` }}
        className="w-screen bg-center bg-cover bg-no-repeat "
      >
        <div className="w-full h-full bg-[--footer] sm:px-1 sm:pt-24 pb-5 ">
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 sm:gap-10 text-gray-100 px-5">
            <div className="flex flex-col gap-4 py-5 sm:py-0">
              <h1 className="font-bold text-2xl sm:text-xl">Address</h1>
              <div className="flex flex-col gap-2 sm:gap-1 ">
                <p className="flex items-center gap-2">
                  <IoLocationSharp /> Sandton Park, Sandton, RSA
                </p>
                <p className="flex items-center gap-2">
                  <IoCall /> + 011 467 8213
                </p>
                <p className="flex items-center gap-2">
                  <IoMail /> info@michanic.com
                </p>
                <div className="flex items-center gap-2 sm:mt-4 ">
                  <div className="border border-gray-100 rounded-full p-2 hover:bg-gray-100 hover:text-[--red] cursor-pointer">
                    <IoLogoTwitter />
                  </div>
                  <div className="border border-gray-100 rounded-full p-2 hover:bg-gray-100 hover:text-[--red] cursor-pointer">
                    <IoLogoFacebook />
                  </div>
                  <div className="border border-gray-100 rounded-full p-2 hover:bg-gray-100 hover:text-[--red] cursor-pointer">
                    <IoLogoYoutube />
                  </div>
                  <div className="border border-gray-100 rounded-full p-2 hover:bg-gray-100 hover:text-[--red] cursor-pointer">
                    <IoLogoLinkedin />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* ------------- OPENING HOURS SECTION ----------- */}
              <h1 className="font-bold text-2xl sm:text-xl">Opening Hours</h1>

              <div className="flex flex-col gap-3 ">
                <div>
                  <p className="font-bold sm:text-sm">Monday - Friday:</p>
                  <p className="">09:00 AM - 09:00 PM</p>
                </div>

                <div>
                  <p className="font-bold sm:text-sm">Saturday - Sunday:</p>
                  <p className="">09:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-bold sm:text-sm">Public Holidays:</p>
                  <p className="">09:00 AM - 02:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <h1 className="font-bold text-2xl sm:text-lg">Services</h1>

              <div className="flex flex-col gap-1 ">
                <li className="flex gap-2 items-center  transition duration-200 ease-linear hover:scale-105 cursor-pointer">
                  <IoChevronForward fontSize={20} /> Diagnostic Test
                </li>
                <li className="flex gap-2 items-center  transition duration-200 ease-linear hover:scale-105 cursor-pointer">
                  <IoChevronForward fontSize={20} /> Engine Servicing
                </li>
                <li className="flex gap-2 items-center  transition duration-200 ease-linear hover:scale-105 cursor-pointer">
                  <IoChevronForward fontSize={20} /> Tires Replacement
                </li>
                <li className="flex gap-2 items-center  transition duration-200 ease-linear hover:scale-105 cursor-pointer">
                  <IoChevronForward fontSize={20} />
                  Oil Changing
                </li>
                <li className="flex gap-2 items-center  transition duration-200 ease-linear hover:scale-105 cursor-pointer">
                  <IoChevronForward fontSize={20} /> Vacuum Cleaning
                </li>
              </div>
            </div>
            {/* ------------ NEWSLETTER SECTION ------------ */}
            <div className="flex flex-col gap-4 ">
              <h1 className="font-bold text-2xl sm:text-lg">NewsLetter</h1>

              <div className="flex flex-col gap-8 ">
                <p className="">
                  Subscribe to our newsletter <br /> to keep up with the latest
                  trends!
                </p>
                <div className="bg-gray-100 p-2 flex justify-between ">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="text-gray-800 bg-gray-100 outline-none"
                  />
                  <button className="bg-[--red] p-2 w-[100px] font-bold cursor-pointer hover:bg-opacity-5">
                    SIGNUP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --------------- LINE ------------- */}
          <div className="my-2 sm:mt-10 sm:mb-5 md:my-10">
            <hr className=" bg-gray-900 opacity-20" />
          </div>

          {/* ------------- COPYRIGHT DETAILS --------------- */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between text-gray-100 sm:px-10 sm:items-center ">
            <p>© Michanic, All Right Reserved.</p>
            <div className="list-none flex gap-5 ">
              <li className="border-r-[1px] border-gray-100 border-opacity-20 pr-3 cursor-pointer">
                Home
              </li>
              <li className="border-r-[1px] border-gray-100 border-opacity-20 pr-3 cursor-pointer">
                Cookies
              </li>
              <li className="border-r-[1px] border-gray-100 border-opacity-20 pr-3 cursor-pointer">
                Help
              </li>
              <li className="pr-3">FAQs</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
