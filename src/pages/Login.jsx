import React, { useState, useEffect } from "react";
import "../index.css";
import IsiLogin from "../component/IsiLogin";
import '../css/login.css'
import { useNavigate } from "react-router-dom"
import { BiUser } from "react-icons/bi";

function Login() {
    const [isVisible, setIsVisible] = useState(false);

    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.username = username

        navigate("/")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
                <a
                    datatype="Welcome To The Game!"
                    className="welcome-game text-blue-600"
                    style={{
                        fontSize: "65px",
                        textAlign: "center",
                        fontFamily: "Salsa",
                        position: "fixed",
                        top: "10%",
                        left: "28%",
                    }}
                >
                    Welcome To The Game!
                </a>
            <div className="text-white flex justify-center items-center bg-cover" style={{ backgroundImage: 'url("../src/assets/bg.jpg")', height: "100vh" }}>
                {/* Mulai Form */}

                <div className="">
                    <div className="bg-slate-800 border border-slate-400 rounded-md p-20 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative items-center">
                        <h1
                        className="text-4xl text-white font-bold text-center"
                        style={{ fontFamily: "cursive" }}
                        >
                        Login
                        </h1>
                        <form onSubmit={handleSubmit}>
                        <div className="relative my-4 pt-20">
                            <input
                            placeholder="Username"
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: "440px" }}
                            className="block pt-3.5 pb-3 text-sm hover:placeholder:pb-20 text-white bg-transparent border-b-2  border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer:"
                            />
                            <BiUser className="absolute top-20 right-0 size-6" />
                        </div>
                        <button
                            type="submit"
                            style={{ fontFamily: "monospace" }}
                            className="w-full mb-4 text-[18px] mt-2 rounded-3xl bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 py-2 opacity-90"
                        >
                            Login
                        </button>
                        </form>
                    </div>
                </div>

                {/* End Form */}
            </div>
        </>
    );
}

export default Login;
