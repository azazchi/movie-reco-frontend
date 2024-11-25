import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import axios from "axios";

import background_pic from "./assets/img/background-pic.jpg";

export default function App() {
    useEffect(() => {
        axios.get("/identity");
    }, []);

    return (
        <>
            <div className="absolute bg-black inset-0 opacity-80 -z-10"></div>
            <img
                src={background_pic}
                className="absolute -z-20 h-full w-full object-cover"
                alt=""
            />
            <Navbar />
            <div className="z-50">
                <Outlet />
            </div>
        </>
    );
}
