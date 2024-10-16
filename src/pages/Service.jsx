import React, { useState } from "react";
import bg from "../assets/carousel-bg-2.jpg";
import Hero from "../components/Hero";
import Title from "../components/Title.jsx";
import {
  FaCar,
  FaCarSide,
  FaCog,
  FaOilCan,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { images } from "../assets/assets.js";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider.jsx";

const Service = () => {
  const [img, setImg] = useState(images[0]);
  return (
    <div className="">
      <Hero img={bg} name={"Services"} />
      <Title text1={"OUR SERVICES"} text2={"Explore Our Services"} />
      <div className="grid lg:grid-cols-[1fr_2fr] gap-6 sm:px-10 px-5 lg:h-[400px] h-full">
        <div className="flex flex-col justify-between lg:w-[400px] w-full gap-6 lg:gap-0">
          <Link
            onClick={() => setImg(images[0])}
            className=" hover:bg-[--red] hover:text-gray-100 h-[80px] bg-[--light] text-blue-950 font-bold text-2xl flex justify-start px-6 items-center gap-4 cursor-pointer active-div"
          >
            <FaCar size={40} color="#d81324" />
            Diagnostic Test
          </Link>
          <Link
            onClick={() => setImg(images[1])}
            className="hover:bg-[--red] hover:text-gray-100 h-[80px] bg-[--light] text-blue-950 font-bold text-2xl flex justify-start px-6 items-center gap-4 cursor-pointer active-div"
          >
            <FaCarSide size={40} color="#d81324" /> Engine Servicing
          </Link>
          <Link
            onClick={() => setImg(images[2])}
            className="hover:bg-[--red] hover:text-gray-100 h-[80px] bg-[--light] text-blue-950 font-bold text-2xl flex justify-start px-6 items-center gap-4 cursor-pointer active-div"
          >
            <FaCog size={40} color="#d81324" />
            Tire Replacement
          </Link>
          <Link
            onClick={() => setImg(images[3])}
            className="hover:bg-[--red] hover:text-gray-100 h-[80px] bg-[--light] text-blue-950 font-bold text-2xl flex justify-start px-6 items-center gap-4 cursor-pointer active-div"
          >
            <FaOilCan size={40} color="#d81324" />
            Oil Changing
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-5">
          <img
            className="block w-full sm:w-[400px] sm:h-full  h-[400px]"
            src={img}
            alt="hero"
          />
          <div className="grid gap-6 sm:gap-4 mt-10 sm:mt-0">
            <p className="font-bold text-3xl sm:text-2xl text-blue-950 ">
              15 Years Of Experience In Auto Servicing
            </p>
            <p className="text-gray-600">
              We service all vehicle makes and models following a series of
              maintenance procedures carried out at set intervals. Our services
              include a diagnostic scan that pinpoints any underlying issues.
            </p>
            <p className="flex gap-4 items-center  text-gray-600">
              <FaCheck color="green" size={20} />
              Quality Servicing
            </p>
            <p className="flex gap-4 items-center text-gray-600">
              <FaCheck color="green" size={20} />
              Expert Workers
            </p>
            <p className="flex gap-4 items-center  text-gray-600">
              <FaCheck color="green" size={20} />
              Modern Equipment
            </p>
            <button className="sm:mt-4 flex items-center justify-center gap-3 bg-[--red] font-semibold text-gray-100 text-lg p-4 sm:w-1/2 w-2/3">
              READ MORE <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-full lg:h-[500px]  bg-center bg-cover bg-no-repeat sm:mt-36 mb-2 mt-24"
      >
        <div className="w-full h-full bg-[--bg] grid lg:grid-cols-2 justify-around">
          <div className="text-gray-100 flex flex-col justify-center gap-6 px-5 sm:px-10 py-5 sm:py-24">
            <p className="font-bold sm:text-4xl text-3xl sm:pr-10">
              Certified And Award Winning Car Repair Service Provider
            </p>
            <p>
              Whether you need of a minor or major car service, or a quality
              mechanical repair, we have you covered. Our team of experts will
              ensure your car is in top condition, so you can hit the road with
              confidence.
            </p>
          </div>
          <div className="h-full bg-[--red] sm:mx-10">
            <p className="sm:text-4xl text-3xl text-gray-100 sm:font-semibold font-bold text-center pt-10">
              Book For A Service
            </p>
            <form className="grid sm:grid-cols-2 px-10 py-6 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 px-3 text-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="h-14 px-3"
              />
              <select name="services" id="services" className="h-14 px-3">
                <option value="">Select A Service</option>
                <option value="basic">Basic</option>
                <option value="deluxe">Deluxe</option>
                <option value="exclusive">Exclusive</option>
              </select>
              <div className="grid grid-cols-[0.5fr_1.5fr] gap-3">
                <label htmlFor="date" className="font-semibold text-gray-100">
                  Date for Service:
                </label>
                <input type="date" id="date" className="h-14 px-3"></input>
              </div>
              <textarea
                type="text"
                placeholder="Special Request"
                className=" h-36 px-3 py-2 sm:col-span-2"
              />
              <button className="text-gray-100 font-bold sm:font-semibold text-xl bg-blue-950 h-14 sm:col-span-2">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="sm:mb-20">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Service;
