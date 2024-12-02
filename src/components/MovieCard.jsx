import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ title, rating, id }) {
    const [img, setImg] = useState();

    const image_url = async (movie_title) => {
        try {
            const { data } = await axios.get("/movie/image", {
                params: { title: movie_title },
            });
            setImg(data.url);
        } catch (e) {
            setImg(
                "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png"
            );
        }
    };

    useEffect(() => {
        image_url(title);
    });

    return (
        <div
            className={`w-52 h-80 font-bold text-white hover:cursor-pointer`}
            onClick={() => {
                window.location.href = "/movie/" + id;
            }}
        >
            <img className="w-52 h-80 relative object-cover" src={img} />
            <p className="pt-1 pl-1 pb-16 text-xl relative -top-80 bg-gradient-to-b from-black/75 to-transparent">
                ⭐ {rating} - {title}
            </p>
        </div>
    );
}
