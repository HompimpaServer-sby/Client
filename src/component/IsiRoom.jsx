import { IoHandLeftSharp } from "react-icons/io5"; //Tangan Kiri
import { IoHandRight } from "react-icons/io5"; //Tangan Kanan
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa"; //Batu
import { FaRegHandPeace } from "react-icons/fa"; //Gunting

export default function IsiRoom() {
    return (
        <>
          <div className="flex items-center justify-center">
            <button style={{ margin: "0 10px" }}>
              <FaRegHandPeace
                className="w-full text-orange-400 opacity-75 hover:opacity-100"
                style={{ fontSize: "200" }}
              />
            </button>
            <button style={{ margin: "0 10px" }}>
              <FaRegHandRock
                className="w-full text-red-800 opacity-75 hover:opacity-100"
                style={{ fontSize: "200" }}
              />
            </button>
            <button style={{ margin: "0 10px" }}>
              <FaRegHandPaper
                className="w-full text-blue-500 opacity-75 hover:opacity-100"
                style={{ fontSize: "200" }}
              />
            </button>
          </div>
        </>
      );      

}
