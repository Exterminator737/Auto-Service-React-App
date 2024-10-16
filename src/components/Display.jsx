import img from "../assets/carousel-bg-1.jpg";
import { FaCar, FaCheck, FaUserCog, FaUsers } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Display = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-fit sm:h-full bg-center bg-cover bg-no-repeat "
    >
      <div className="w-full h-full bg-[--bg] flex flex-col items-center justify-center">
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-10 text-gray-100 sm:px-10 sm:py-10 py-5">
          <div className="flex flex-col items-center">
            <FaCheck size={40} />
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <p className="font-bold text-4xl mt-2">
                {counter && <Number n={100} />}
              </p>
            </ScrollTrigger>

            <p className="text-xl">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserCog size={40} />
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <p className="font-bold text-4xl mt-2">
                {counter && <Number n={50} />}
              </p>
            </ScrollTrigger>

            <p className="text-lg">Expert Technicians</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers size={40} />
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <p className="font-bold text-4xl mt-2">
                {counter && <Number n={7337} />}
              </p>
            </ScrollTrigger>

            <p className="text-xl">Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar size={40} />
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <p className="font-bold text-4xl mt-2">
                {counter && <Number n={2000} />}
              </p>
            </ScrollTrigger>

            <p className="text-xl">Successful Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
