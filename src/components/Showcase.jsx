import { FaCertificate, FaUsersCog, FaTools } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:py-16 px-5 sm:px-10 mt-20">
        <div className="flex gap-5 mb-10 sm:mb-0 w-full py-10 px-5 sm:px-0 ">
            <div className="text-[--red]">
            <FaCertificate size={50}/>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-blue-950 font-bold text-lg">Quality Servicing</p>
                <p>Honest and reliable servicing <br/> that leaves all our customers satisfied</p>
                <p className="px-2 w-fit border-b border-[--red] hover:text-[--red] cursor-pointer">Read More</p>
            </div>
        </div>
        <div className="flex gap-5 bg-[--light] mb-10 sm:mb-0 w-full py-10 px-5 sm:px-2">
            <div className="text-[--red]">
            <FaUsersCog size={50}/>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-blue-950 font-bold text-lg">Expert Workers</p>
                <p>Highly accredited employees that are accomplised in different duties </p>
                <p className="px-2 w-fit border-b border-[--red] hover:text-[--red] cursor-pointer">Read More</p>
            </div>
        </div>
        <div className="flex gap-5 mb-10 sm:mb-0 w-full py-10 px-5 sm:px-0">
            <div className="text-[--red]">
            <FaTools size={50}/>
            </div>
            <div className="flex flex-col gap-3 ">
                <p className="text-blue-950 font-bold text-lg">Modern Equipment</p>
                <p>Industry-standard tools that are used by the greatest industry giants <br/></p>
                <p className="px-2 w-fit border-b border-[--red] hover:text-[--red] cursor-pointer">Read More</p>
            </div>
        </div>
    </div>
  )
}

export default Showcase