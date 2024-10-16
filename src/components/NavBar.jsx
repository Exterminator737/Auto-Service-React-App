import { Link, NavLink } from "react-router-dom";
import { IoArrowForward, IoMenu } from "react-icons/io5";
import { FaCar, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="grid sm:grid-cols-[3.2fr_0.6fr] ">
      <div className="flex items-center justify-between py-5 px-2 lg:px-16 sm:px-5 font-medium bg-gray-200">
        <Link to='/' className=" flex items-center gap-3 ">
          <FaCar color="#d81324" size={30} />
          <p className="text-[--red] font-bold text-3xl sm:text-2xl">Michanic</p>
        </Link>

        <ul className="hidden  sm:flex gap-5 text-medium text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/service" className="flex flex-col items-center gap-1">
            <p>SERVICES</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div onClick={()=>setVisible(true)} className="sm:hidden text-2xl text-[--red]">
          <IoMenu />
        </div>
        {/* ------------- MENU FOR SMALL SCREENS ------------- */}
      <div
        className={`z-10 absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-4 p-3"
          >
            
          {<FaChevronRight color="#d81234"/>}
              
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/service"
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      </div>

      
      <div className="hidden cursor-pointer sm:flex bg-[--red] min-w-[200px] gap-3 items-center justify-center text-gray-100 px-8 py-4 font-bold w-full">
        GET A QUOTE <IoArrowForward size={20}/>
      </div>
    </div>
  );
};

export default NavBar;
