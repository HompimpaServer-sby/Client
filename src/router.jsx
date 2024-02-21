import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Room from "./pages/Room";

const router = createBrowserRouter([    
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/room",
        element: <Room/>
    }
  ]);

  export default router