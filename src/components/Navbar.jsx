import { useLocation } from "react-router-dom";
import back_arrow from "../assets/back-arrow.png";

const handleBack = () => {
    window.location.href = "/";
};

export default function Navbar() {
    const { pathname } = useLocation();

    const ishome = pathname === "/";

    return (
        <>
            <button
                className={`flex items-center absolute z-50 text-white ${ishome && "m-6"}`}
                onClick={() => {
                    handleBack();
                }}
            >
                {!ishome && (
                    <img
                        src={back_arrow}
                        className="scale-75 icon-filter"
                        alt=""
                    />
                )}
                <span className="text-5xl font-bold">MOVVVIES</span>
            </button>
        </>
    );
}
