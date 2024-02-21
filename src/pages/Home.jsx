import { useNavigate } from "react-router-dom";
import IsiHome from "../component/IsiHome";
import { GiExitDoor } from "react-icons/gi";

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
      <button
        type="submit"
        style={{ fontFamily: "Bungee Spice", position: "fixed" }}
        className="flex items-center justify-center w-32 font-bold ml-4 text-[30px] mt-0 rounded-2xl py-2 opacity-80 flex-auto"
        onClick={() => navigate("/login")}
      >
        <GiExitDoor className="ml-2" />
        Exit
      </button>

      <div
        className="text-white flex justify-center items-center bg-cover"
        style={{
          backgroundImage: 'url("../src/assets/bg1.jpg")',
          height: "100vh",
        }}
      >
        <IsiHome />
      </div>
    </>
  );
}
