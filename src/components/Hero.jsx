import { Link } from "react-router-dom";

const Hero = ({img, name}) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[200px]  bg-center bg-cover bg-no-repeat "
    >
      <div className="w-full h-full bg-[--bg] flex flex-col sm:gap-4 items-center justify-center">
        <h1 className="text-gray-100 font-bold text-4xl lg:text-6xl">{name}</h1>
        <p className="text-gray-100 text-lg font-semibold">
        <Link className="text-[--red] cursor-pointer" to="/home">HOME </Link> / <span className="hover:text-[--red] cursor-pointer">{name.toUpperCase()}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
