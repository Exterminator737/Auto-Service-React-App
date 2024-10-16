import { testimonials } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Title from "./Title";

const TestimonialSlider = () => {
  const [colour, setColour] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: "linear",
    autoplay: true,
    centerPadding: "40px",
    beforeChange: (current, next) => setCurrentSlideNumber(next),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 relative top-10"> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className={`h-5 border border-[--light]`}></div>,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };
  return (
    <div className=" mb-40 ">
        <Title text1={'TESTIMONIALS'} text2={'Our Clients Say!'} />
      <div className=" mt-0 px-5">
        <Slider {...settings} id='hi'>
          {testimonials.map((item, index) => (
            <div
              id= 'hi'
              key={index}
              className=" text-gray-500 sm:w-[500px] flex flex-col gap-12 items-center py-10 border h-[400px]"
            >
              <div className="flex flex-col items-center h-[150px]">
                <div className="rounded-full border-8 border-[--light] w-[80px]">
                  <img src={item.img} alt="avatar" className="rounded-full" />
                </div>
                <div className="font-bold text-2xl my-4 text-blue-950">
                  {item.name}
                </div>
              </div>
              <div className={`p-2 bg-[--light] ${currentSlideNumber === index ? 'bg-[--red] text-gray-100' : ''} w-full h-full font-semibold text-center flex justify-center`}>
                {item.review}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
