import { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Team = ({index, item}) => {
    const [visible, setVisible] = useState(false)

  return (
    <div>

        <div
            key={index}
            onMouseOver={() => setVisible(true)}
            onMouseOut={() => setVisible(false)}
            className="cursor-pointer flex flex-col justify-center items-center bg-[--light]"
          >
            <div
              className="relative"
              
            >
              <img
              src={item.img} alt="" />

              <div
                className={`absolute inset-0 h-full w-full bg-[--red] flex justify-center items-center gap-2 ${
                  visible ? "" : "hidden"
                }`}
              >
                <div className="text-[--red] bg-gray-100 p-2 rounded hover:text-gray-100 hover:bg-blue-950 cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                <div className="text-[--red] bg-gray-100 p-2 rounded hover:text-gray-100 hover:bg-blue-950 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                <div className="text-[--red] bg-gray-100 p-2 rounded hover:text-gray-100 hover:bg-blue-950 cursor-pointer">
                  <FaInstagram size={25} />
                </div>
              </div>
            </div>
            <p className="font-bold text-blue-950 text-lg pt-6">{item.name}</p>
            <p className="text-blue-950 pb-6">{item.occupation}</p>
          </div>
    </div>
  )
}

export default Team