import { GiExitDoor } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { FcOk } from "react-icons/fc";

import { useEffect, useState } from "react";
import socket from "../instances/socket";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../features/OnlineUsers/onlineUsersSlice";

export default function Home() {

    const onlineUsers = useSelector(state => state.onlineUsers.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate("/hompimpa")
    }

    useEffect(() => {
        socket.auth = {
            username: localStorage.username
        }

        socket.connect()
        socket.emit("user:get")

        socket.on("users:online", (users) => {
            dispatch(changeValue(users))
        });

        return () => {
            socket.off("users:online")
        }

    }, [])

    const handleExit = (e) => {
      e.preventDefault()
      
      socket.emit("user:get")

        socket.on("users:online", (users) => {
            dispatch(changeValue(users))
        });

      localStorage.clear()

      window.close()
    }

  return (
    <>
      <button
        type="submit"
        style={{ fontFamily: "Bungee Spice", position: "fixed" }}
        className="flex items-center justify-center w-32 font-bold ml-4 text-[30px] mt-0 rounded-2xl py-2 opacity-80 flex-auto"
        onClick={handleExit}
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

        {/* Start Home */}
  
        <div>
            <h1
              className="text-4xl text-white font-bold text-center mr-11 mb-10"
              style={{ fontFamily: "Honk", fontSize: "70px" }}
            >
              Player
            </h1>

            {
              onlineUsers.length === 1 ? (
                  <h1
                className="text-4xl text-white font-bold text-center mr-11 mb-10"
                style={{ fontFamily: "Honk", fontSize: "70px" }}
              >
                Winner
              </h1>
              ) : null
            }
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
                {
                  onlineUsers.map((el, i) => (
                    <tr key={el.socketId}>
                        <td className="pl-2">{i+1}</td>
                        <td className="text-center">
                          <BiUser className="text-3xl mx-auto" />
                        </td>
                        <td className="pl-2">{el.username}</td>
                        <td className="text-center mx-auto flex">Online<FcOk className="ml-1.5 mt-1"/></td>
                    </tr>
                  ))
                }
                
              </tbody>
            </table>

            <button
                type="submit"
                style={{ fontFamily: "Silkscreen" }}
                className="w-96 mb-4 text-[18px] mt-10 rounded-3xl bg-purple-700 hover:bg-purple-500 active:bg-cyan-400 focus:ring focus:ring-cyan-300 py-2 opacity-80"
                onClick={handleClick}
              >
                Play Games
              </button>
          </div>

        {/* End Home */}
      </div>
    </>
  );
}
