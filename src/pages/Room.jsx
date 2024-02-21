import React from "react";
import { useState } from "react";
import "../index.css";
import IsiRoom from "../component/IsiRoom";
import "../css/room.css";

function Room() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a
        className="choose-one"
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

      <div
        className="text-white flex justify-center items-center bg-cover"
        style={{
          backgroundImage: 'url("../src/assets/bg3.jpg")',
          height: "100vh",
        }}
      >
        <IsiRoom />
      </div>
    </>
  );
}

export default Room;
