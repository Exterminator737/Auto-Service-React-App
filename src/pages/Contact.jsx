import Hero from "../components/Hero";
import bg from "../assets/carousel-bg-1.jpg";
import Title from "../components/Title";
import { FaEnvelopeOpen } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mb-20">
      <Hero img={bg} name={"Contact"} />
      <Title text1={"CONTACT US"} text2={"Contact For Any Query"} />
      <div className="lg:px-28 px-5">
        <div className="grid sm:grid-cols-3 gap-6 w-full sm:h-[104px] h-full">
          <div className="px-6 py-7 bg-[--light]">
            <p className="text-blue-950 font-bold text-xl">// BOOKING //</p>
            <p className="flex gap-2 items-center font-medium text-gray-500">
              <FaEnvelopeOpen size={15} color="#d81324" />
              book@michanic.com
            </p>
          </div>
          <div className="px-6 py-7 bg-[--light]">
            <p className="text-blue-950 font-bold text-xl">// GENERAL //</p>
            <p className="flex gap-2 items-center font-medium text-gray-500">
              <FaEnvelopeOpen size={15} color="#d81324" />
              info@michanic.com
            </p>
          </div>
          <div className="px-6 py-7 bg-[--light]">
            <p className="text-blue-950 font-bold text-xl">// TECHNICAL //</p>
            <p className="flex gap-2 items-center font-medium text-gray-500">
              <FaEnvelopeOpen size={15} color="#d81324" />
              tech@michanic.com
            </p>
          </div>
        </div>
        {/* -------------- MAP & FORM -------------- */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.86051662175!2d27.975236056565663!3d-26.05924894712249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton!5e0!3m2!1sen!2sza!4v1726148861055!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="grid sm:grid-cols-2   gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 px-3 text-gray-900 border border-gray-300 col-span-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="h-14 px-3 border border-gray-300 col-span-2"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="col-span-2 h-14 px-3 text-gray-900 border border-gray-300"
                required
              />
              <textarea
                type="text"
                placeholder="Message"
                className="col-span-2 h-36 px-3 border border-gray-300"
                required
              />
              <button className="text-gray-100 font-semibold text-xl sm:text-lg bg-[--red] col-span-2 h-14">
              SEND MESSAGE
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
