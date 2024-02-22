import { useNavigate } from "react-router-dom"
import socket from "../instances/socket";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../features/OnlineUsers/onlineUsersSlice";

export default function Lose() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleExit = (e) => {
        e.preventDefault()

        socket.auth = {
          username: localStorage.username
        }

      socket.connect()
      socket.emit("user:get")

      socket.on("users:online", (users) => {
          dispatch(changeValue(users))
      });
  
        localStorage.clear()
        let openedWindow;

        openedWindow.close();
      }

    return (
        <div
        className="text-white flex justify-center items-center bg-cover"
        style={{
          backgroundImage: 'url("../src/assets/bg1.jpg")',
          height: "100vh",
        }}
      >

        {/* Start Home */}
  
        <div>
            <h1
              className="text-4xl text-white font-bold text-center mr-11 mb-10"
              style={{ fontFamily: "Honk", fontSize: "70px" }}
            >
              Game Over !
            </h1>


            <button
                type="submit"
                style={{ fontFamily: "Silkscreen" }}
                className="w-96 mb-4 text-[18px] mt-10 rounded-3xl bg-purple-700 hover:bg-purple-500 active:bg-cyan-400 focus:ring focus:ring-cyan-300 py-2 opacity-80"
                onClick={handleExit}
              >
                EXIT GAME
              </button>
          </div>

        {/* End Home */}
      </div>
    )
}