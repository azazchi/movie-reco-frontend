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

const AllMovies = ({ data, limit, paginatedSetter }) => {
    console.log("all", data);

    if (data) {
        let next = data.next;
        next = next.split("=");
        next = next[1];

        let prev = data.prev;
        prev = prev.split("=");
        prev = prev[1];

        const buttonStyle =
            "p-4 bg-yellow-500 rounded-xl font-bold hover:bg-yellow-400 hover:scale-110";
        return (
            <div className="flex flex-col gap-y-5 z-0 p-5">
                <div className="flex justify-between">
                    <p className="text-[#FBFF00] text-3xl"> {"All Movies"} </p>

                    <div className="space-x-4">
                        <button
                            className={buttonStyle}
                            onClick={() =>
                                fetchAll(prev, limit, paginatedSetter)
                            }
                        >
                            Prev
                        </button>
                        <button
                            className={buttonStyle}
                            onClick={() =>
                                fetchAll(next, limit, paginatedSetter)
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-4">
                    {data.data.map((movie) => (
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
    } else return <></>;
};

export default function HomePage() {
    // /movie/popular
    // /movie/rated

    const [ratedMovies, setRatedMovies] = useState(null);

    const [currentPage, setCurrentPage] = useState({
        offset: 0,
        limit: 30,
    });

    const [paginatedMovies, setPaginatedMovies] = useState(null);

    useEffect(() => {
        fetchRated("rated", setRatedMovies);
        fetchAll(currentPage.offset, currentPage.limit, setPaginatedMovies);
    }, []);

    return (
        <div className="pt-28 p-16 space-y-16">
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
            <AllMovies
                data={paginatedMovies}
                limit={currentPage.limit}
                paginatedSetter={setPaginatedMovies}
                key={"f972gu3"}
            />
        </div>
    );
}

const fetchAll = async (offset, limit, setter) => {
    const { data } = await axios.get("/api/movie", {
        params: {
            offset,
            limit,
        },
    });

    if (data.paginated) setter(data.paginated);
    else setter(null);
};

const fetchRated = async (route, setter) => {
    const { data } = await axios.get(`/api/movie/${route}`, {
        params: { top: 30 },
    });

    if (data.data) {
        setter(data.data);
    } else setter(null);
};
