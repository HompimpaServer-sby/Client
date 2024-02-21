import React, { useState, useEffect } from "react";
import "../index.css";
import IsiLogin from "../component/IsiLogin";
import '../css/login.css'

function Login() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
                <a
                    className="welcome-game text-red-600"
                    style={{
                        fontSize: "65px",
                        textAlign: "center",
                        fontFamily: "Salsa",
                        position: "fixed",
                        top: "10%",
                        left: "50%",
                        animation: "slideRight 5s forwards",
                        whiteSpace: "nowrap",
                    }}
                >
                    Welcome To The Game!
                </a>
            <div className="text-white flex justify-center items-center bg-cover" style={{ backgroundImage: 'url("../src/assets/bg.jpg")', height: "100vh" }}>
                <IsiLogin />
            </div>
        </>
    );
}

export default Login;
