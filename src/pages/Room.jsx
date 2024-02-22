import React from "react";
import "../index.css";

import { IoHandLeftSharp } from "react-icons/io5"; //Tangan Kiri
import { IoHandRight } from "react-icons/io5"; //Tangan Kanan
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa"; //Batu
import { FaRegHandPeace } from "react-icons/fa"; //Gunting

import { useEffect, useState } from "react";
import socket from "../instances/socket";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../features/OnlineUsers/onlineUsersSlice";


function Room() {
  const [loading, setLoading] = useState(false)

    const onlineUsers = useSelector(state => state.onlineUsers.value)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleBackHand = (e) => {
        e.preventDefault()

        setLoading(true)

        socket.emit("choose", 1);
        localStorage.hand = 1
    }

    const handleFrontHand = (e) => {
        e.preventDefault()

        setLoading(true)

        socket.emit("choose", 2);
        localStorage.hand = 2
    }

    const handleStonePaper = (e) => {
        const {name} = e.target

        setLoading(true)
        console.log(loading, "<<<Loading");

        if(name === "cutter") {
            socket.emit("stone:paper", 3);
            localStorage.stonepaper = 3
        } else if (name === "stone") {
            socket.emit("stone:paper", 4);
            localStorage.stonepaper = 4
        } else if (name === "paper") {
            socket.emit("stone:paper", 5);
            localStorage.stonepaper = 5
        }
    }

    useEffect(() => {
        socket.auth = {
            username: localStorage.username
        }

        socket.connect()

        socket.on("users:online", (users) => {
            dispatch(changeValue(users))
        });


        socket.on("choose:hand", (num) => {
            setLoading(false)

            if(num == 0) {
                return navigate("/")
            }
            
            if(localStorage.hand != num) {
                console.log("lose");
                navigate("/lose")
            } else if(localStorage.hand == num) {
                console.log("win");
                navigate("/")
            }
        });

        socket.on("win:rockpaper", (win) => {
            setLoading(false)
            if(localStorage.stonepaper != win.num) {
                console.log("lose");
                navigate("/lose")
            } else {
                console.log("win");
                navigate("/")
            }
        })


        return () => {
            socket.off("choose:hand")
            socket.off("win:rockpaper")
        }
    }, [])

  return (
    <>
      <a
        style={{
          fontSize: "65px",
          textAlign: "center",
          fontFamily: "Nabla",
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Choose One
      </a>

      
      {/* Loading */}


      <div
        className="text-white flex justify-center items-center bg-cover"
        style={{
          backgroundImage: 'url("../src/assets/bg3.jpg")',
          height: "100vh",
        }}
      >
        {/* Start Room */}
        
        <div className="flex items-center justify-center">
          {
            onlineUsers.length < 3 ? (
              <>
                <div style={{ margin: "0 10px", textAlign: "center" }} >
                    <FaRegHandPeace
                      className="w-full text-orange-400 opacity-75 hover:opacity-100"
                      style={{ fontSize: "200" }}
                    />

                  <a className="btn btn-warning" name="cutter" onClick={handleStonePaper}>Choose</a>
                  </div>

                  <div style={{ margin: "0 10px", textAlign: "center" }} >
                    <FaRegHandRock
                      className="w-full text-red-800 opacity-75 hover:opacity-100"
                      style={{ fontSize: "200" }}
                    />
                    <a className="btn btn-danger" name="stone" onClick={handleStonePaper}>Choose</a>
                  </div>
                  
                  <div style={{ margin: "0 10px", textAlign: "center" }} >
                    <FaRegHandPaper
                      className="w-full text-blue-500 opacity-75 hover:opacity-100"
                      style={{ fontSize: "200" }}
                    />

                    <a className="btn btn-primary"  name="paper" onClick={handleStonePaper}>Choose</a>
                  </div>
              </>
            ) : (
              <>
                  <button style={{ margin: "0 10px" }} onClick={handleBackHand}>
                    <IoHandLeftSharp
                      className="w-full text-red-800 opacity-75 hover:opacity-100"
                      style={{ fontSize: "200" }}
                    />
                  </button>
                  <button style={{ margin: "0 10px" }} onClick={handleFrontHand}>
                    <IoHandRight
                      className="w-full text-blue-500 opacity-75 hover:opacity-100"
                      style={{ fontSize: "200" }}
                    />
                  </button>
              </>
            )
          }
            
        </div>


        {/* End Room */}
      </div>
    </>
  );
}

export default Room;
