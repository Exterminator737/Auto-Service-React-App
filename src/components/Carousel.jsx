import { carousel } from "../assets/assets";
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {carousel.map((item, index) => (
          <div key={index} className="">
            <div
              style={{ backgroundImage: `url(${item.bg_img})` }}
              className={`relative h-[60vh] sm:h-fit bg-cover`}
            >
              <div className="h-full bg-[--bg] sm:px-5 sm:py-10">
                <div className="grid lg:grid-cols-2 justify-around items-center text-gray-100 h-full ">
                  <div className="flex flex-col gap-5 items-center sm:mt-0 ">
                    <p className="font-semibold sm:font-bold sm:text-medium text-base">
                      // CAR SERVICING //
                    </p>
                    <p className="font-bold sm:text-6xl text-3xl text-center">
                      {item.p} <br /> Service Center
                    </p>
                    <div className="mt-10 bg-[--red] px-12 py-4 w-fit font-medium flex items-center gap-3">
                      LEARN MORE <IoArrowForward size={20} />{" "}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                   <img className=" mt-40" src={item.car_img} alt="car" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
