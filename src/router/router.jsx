import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Room from "../pages/Room";
import Lose from "../pages/Lose";

export const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            if(!localStorage.username) {
                return redirect("/login")
            }

            return null
        },
        element: <Home />
    },
    {
        path: "/hompimpa",
        element: <Room />
    },
    {
        path: "/login",
        loader: () => {
            if(localStorage.username) {
                return redirect("/")
            }

            return null
        },
        element: <Login />
    },
    {
        path: "/lose",
        element: <Lose />
    }
])

  export default router