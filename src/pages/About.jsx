import React from "react";
import Hero from "../components/Hero";
import bg from "../assets/carousel-bg-1.jpg";
import Showcase from "../components/Showcase";
import car from "../assets/about.jpg";
import { FaArrowRight } from "react-icons/fa";
import Technicians from "../components/Technicians";

const About = () => {
  return (
    <div>
      <Hero img={bg} name={"About Us"} />
      <Showcase />
      <div className="grid lg:grid-cols-2  lg:px-20 pt-5 sm:pt-10 pb-10 sm:pb-20 gap-10">
        <div className="">
          <img src={car} alt="about img" className="block mt-10 lg:ml-10 ml-0 w-full sm:px-10 lg:w-auto" />
        </div>
        <div className=" px-5 sm:px-10 h-fit">
          <p className="font-semibold sm:font-bold sm:text-lg text-base text-[--red] "> // ABOUT US //</p>

          <div className=" flex flex-col sm:gap-10 justify-between sm:h-full h-[700px] ">
            <p className="text-blue-950 font-bold sm:text-4xl text-2xl mt-5 sm:mt-0 ">
              <span className="sm:text-5xl text-3xl text-[--red]">MiChanic</span> Is The
              Best Place For Your Auto Care
            </p>
            <p className="">
              As the premier mobile mechanic service in South Africa, Michanic
              offers a revolutionary approach to car repairs and maintenance.
              Recognized as the most trusted mobile mechanics, we bring expert
              services directly to your doorstep. Say goodbye to towing fees and
              long waits at the shop.
            </p>
            <div className="flex flex-col gap-6 text-blue-950 ">
              <div className="flex gap-4">
                <div className="flex items-center justify-center p-2 bg-[--light] w-12 font-bold sm:h-[43px]">
                  01
                </div>
                <div className="flex flex-col justify-between sm:gap-1">
                  <p className="font-bold">Professional & Expert</p>
                  <p className="text-gray-600">
                    Ranked the most professional auto repair store
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center p-2 bg-[--light] w-12 font-bold sm:h-[43px]">
                  02
                </div>
                <div className="flex flex-col justify-between sm:gap-1">
                  <p className="font-bold">Quality Servicing Center</p>
                  <p className="text-gray-600">
                    Industry-standard machinery for quality work
                  </p>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="flex items-center justify-center p-2 bg-[--light] w-12 font-bold sm:h-[43px]">
                  03
                </div>
                <div className="flex flex-col justify-between sm:gap-1 ">
                  <p className="font-bold">Award Winning Workers</p>
                  <p className="text-gray-600">
                    International, diverse and highly-acclaimed employees
                  </p>
                </div>
              </div>
            </div>
            <button className=" flex items-center justify-center gap-3 bg-[--red] font-semibold text-gray-100 text-lg p-4 sm:w-1/3 w-2/3">
              READ MORE <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
      <Technicians />
    </div>
  );
};

export default About;
