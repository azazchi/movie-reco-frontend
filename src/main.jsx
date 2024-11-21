import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";

import App from "./App.jsx";
import MoviePage from "./pages/moviepage/index.jsx";
import HomePage from "./pages/homepage/index.jsx";

import "./index.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/movie/:movie_id",
                element: <MoviePage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
