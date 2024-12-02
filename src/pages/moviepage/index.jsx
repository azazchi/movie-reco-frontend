import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function fetchSingleMovie(movie_id) {
    const res = await axios.get(`/api/movie/${movie_id}`);
    return res;
}

async function fetchMovieImage(movie_title) {
    const res = await axios.get(`/movie/image`, {
        params: {
            title: movie_title,
        },
    });
    return res;
}

async function handleRateUp(movie_id) {
    axios.post(
        `/api/movie`,
        {},
        {
            params: {
                movie: movie_id,
                vote: "up",
            },
        }
    );
    //.then(() => window.location.reload());
}
async function handleRateDown(movie_id) {
    axios.post(
        `/api/movie`,
        {},
        {
            params: {
                movie: movie_id,
                vote: "down",
            },
        }
    );
    //.then(() => window.location.reload());
}

export default function MoviePage() {
    const { movie_id } = useParams();

    const [img, setImg] = useState({
        url: "",
        isLoading: true,
    });

    const [movie, setMovie] = useState({
        isLoading: true,
        data: {},
    });

    useEffect(() => {
        if (movie.isLoading) {
            fetchSingleMovie(movie_id).then((res) => {
                if (res.status == 200) {
                    setMovie({
                        isLoading: false,
                        data: res.data.data,
                    });
                    if (img.isLoading) {
                        fetchMovieImage(res.data.data.title)
                            .then((response) => {
                                setImg({
                                    isLoading: false,
                                    url: response.data.url,
                                });
                            })
                            .catch(() => {
                                setImg({
                                    isLoading: false,
                                    url: "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png",
                                });
                            });
                    }
                }
            });
        }
    }, []);

    if (movie.isLoading) {
        return <></>;
    }

    const { data } = movie;

    return (
        <>
            <div className="flex gap-x-5 h-full relative  bg-no-repeat bg-cover bg-fixed z-10 px-8 pt-28 pb-4">
                {/* left side */}
                <div className="flex flex-col gap-y-4 text-white w-[500px] z-0">
                    <img
                        src={img.url}
                        alt="move image"
                        className="max-w-[500px] h-[635px]"
                    />
                    <div>
                        <strong className="text-3xl">
                            {" "}
                            Rating ⭐{data.rating}{" "}
                        </strong>
                    </div>
                </div>

                {/* right side */}
                <div className="text-white flex flex-col gap-y-2 z-0 text-xl">
                    {/* Title */}
                    <div>
                        <strong className="text-5xl"> {data.title} </strong>
                    </div>

                    {/* release date and genre */}
                    <div className="text-[#8D8D8D]">
                        {data.release_date} • {data.genre}
                    </div>

                    {/* overview/context/summary */}
                    <div className="border-y py-4 border-white text-wrap">
                        {data.overview}
                    </div>

                    {/* cast */}
                    <div className="flex gap-x-3">
                        <strong>Cast:</strong>{" "}
                        <p className="text-[#FBFF00]">{data.cast}</p>
                    </div>

                    {/* director */}
                    <div className="flex gap-x-3">
                        <strong>Director:</strong>{" "}
                        <p className="text-[#FBFF00]">{data.director}</p>
                    </div>

                    {/* budget */}
                    <div className="flex gap-x-3">
                        <strong>Budget:</strong> ${data.budget.toLocaleString()}
                    </div>

                    {/* revenue/box office */}
                    <div className="flex gap-x-3">
                        <strong>Revenue:</strong> $
                        {data.revenue.toLocaleString()}
                    </div>

                    {/* language */}
                    <div>
                        <strong>Language:</strong> {data.language}
                    </div>

                    {/* keywords */}
                    <div>
                        <strong>Keywords:</strong> {data.keywords}
                    </div>

                    {/* tagline */}
                    <div>
                        <strong>Tagline:</strong> {data.tagline}
                    </div>

                    {/* rate button and vote count,up, and down container*/}
                    <div className="flex items-center justify-center gap-x-20 border-t pt-6 border-white">
                        {/* rate buttons */}
                        <div className="flex items-center gap-x-5 text-6xl">
                            <strong> Rate </strong>
                            {movie.data.my_vote == -1 ? (
                                <>
                                    <button
                                        onClick={() => handleRateUp(movie_id)}
                                        className="duration-200 hover:text-7xl"
                                    >
                                        <i class="fa-regular fa-thumbs-up"></i>
                                    </button>
                                    <button
                                        onClick={() => handleRateDown(movie_id)}
                                        className="mt-2 duration-200 hover:text-7xl"
                                    >
                                        <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
                                    </button>
                                </>
                            ) : null}
                            {movie.data.my_vote == "up" ? (
                                <>
                                    <div className="duration-200 hove-7xl text-green-500">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                    </div>
                                    <div className="mt-2 duration-200 xl">
                                        <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
                                    </div>
                                </>
                            ) : null}
                            {movie.data.my_vote == "down" ? (
                                <>
                                    <div className="duration-200 ">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                    </div>
                                    <div className="mt-2 duration-200  text-red-500">
                                        <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        {/* vote count,up, and down */}
                        <div className="flex flex-col text-xl">
                            <div>
                                <strong>Vote Count: </strong> {data.vote_count}
                            </div>
                            <div>
                                <strong>Votes Up: </strong> {data.vote_up}
                            </div>
                            <div>
                                <strong>Votes Down: </strong> {data.vote_down}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
