import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
    useEffect(() => {
        axios.get("/identity");
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
