import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard.jsx";

const CategorizeMovies = ({ title, movies }) => {
    /*
     *
     */
    if (movies)
        return (
            <div className="flex flex-col gap-y-5 z-0 p-5">
                <p className="text-[#FBFF00] text-3xl"> {title} </p>

                <div className="flex justify-between">
                    {movies.slice(6, 12).map((movie) => (
                        <MovieCard
                            title={movie.title}
                            rating={movie.rating}
                            id={movie.id}
                            key={movie.id}
                        />
                    ))}
                </div>
            </div>
        );
    else return <></>;
};

export default function HomePage() {
    // /movie/popular
    // /movie/rated

    const [ratedMovies, setRatedMovies] = useState(null);

    useEffect(() => {
        fetchRated("rated", setRatedMovies);
        console.log(ratedMovies);
    }, []);

    return (
        <div className="pt-28 p-16">
            {/*
                <CategorizeMovies
                    title={"Most Popular Movies"}
                    api_route={"popular"}
                />
            */}
            <CategorizeMovies
                title={"Most Rated Movies"}
                movies={ratedMovies}
            />
        </div>
    );
}

const fetchRated = async (route, setter) => {
    const { data } = await axios.get(`/api/movie/${route}`, {
        params: { top: 30 },
    });

    if (data.data) {
        setter(data.data);
    } else setter(null);
};
