import Title from "./Title";
import { team } from "../assets/assets";
import Team from "./Team";

const Technicians = () => {
  return (
    <div className="sm:px-10 px-5 sm:pt-10 pb-36">
      <Title text1={"OUR TECHNICIANS"} text2={"Our Expert Technicians"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-5 sm:justify-between">
        {
            team?.map((item, index) => (
                <Team key={index} index={index} item={item}/>
            ))
        }
      </div>
    </div>
  );
};

export default Technicians;
