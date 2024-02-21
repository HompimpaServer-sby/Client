import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const IsiLogin = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    userName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data login atau tindakan yang sesuai di sini
    navigate('/home')
  };

  return (
    <div className="">
      <div className="bg-slate-800 border border-slate-400 rounded-md p-20 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative items-center">
        <h1
          className="text-4xl text-white font-bold text-center"
          style={{ fontFamily: "cursive" }}
        >
          Login
        </h1>
        <form onSubmit={submitHandler}>
          <div className="relative my-4 pt-20">
            <input
              placeholder="Name"
              type="userName" 
              name="userName"
              value={loginForm.userName}
              onChange={handleChange}
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
  );
};

export default IsiLogin;
