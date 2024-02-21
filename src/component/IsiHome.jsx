import { BiUser } from "react-icons/bi";
import { FcOk } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function IsiHome() {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <h1
          className="text-4xl text-white font-bold text-center mr-11 mb-10"
          style={{ fontFamily: "Honk", fontSize: "70px" }}
        >
          Player
        </h1>
        <table className="table-auto border-separate border-spacing-2 border border-slate-400 w-96 bg-slate-800 backdrop-blur-sm bg-opacity-30 rounded-md mr-11">
          <thead className="">
            <tr>
              <th className="text-center" style={{fontFamily: "Lemonada"}}>No</th>
              <th className="text-center" style={{fontFamily: "Lemonada"}}>Profile</th>
              <th className="text-center" style={{fontFamily: "Lemonada"}}>Username</th>
              <th className="text-center" style={{fontFamily: "Lemonada"}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-2">1</td>
              <td className="text-center">
                <BiUser className="text-3xl mx-auto" />
              </td>
              <td className="pl-2">Malcolm Lockyer</td>
              <td className="text-center mx-auto flex">Online<FcOk className="ml-1.5 mt-1"/></td>
            </tr>
            <tr>
              <td className="pl-2">3</td>
              <td className="text-center">
                <BiUser className="text-3xl mx-auto" />
              </td>
              <td className="pl-2">The Eagles</td>
              <td className="text-center mx-auto flex">Online<FcOk className="ml-1.5 mt-1"/></td>
            </tr>
            <tr>
              <td className="pl-2">2</td>
              <td className="text-center">
                <BiUser className="text-3xl mx-auto" />
              </td>
              <td className="pl-2">Earth, Wind, and Fire</td>
              <td className="text-center mx-auto flex">Online<FcOk className="ml-1.5 mt-1"/></td>
            </tr>
          </tbody>
        </table>

        <button
            type="submit"
            style={{ fontFamily: "Silkscreen" }}
            className="w-96 mb-4 text-[18px] mt-10 rounded-3xl bg-purple-700 hover:bg-purple-500 active:bg-cyan-400 focus:ring focus:ring-cyan-300 py-2 opacity-80"
            onClick={() => navigate("/room")}
          >
            Play Games
          </button>
      </div>
    </>
  );
}
