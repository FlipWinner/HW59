import MovieForm from "../components/MovieComponents/MovieForm/MovieForm.tsx";
import WatchList from "../components/MovieComponents/WatchList/WatchList.tsx";
import {useState} from "react";
import type {IMovie} from "../../types";

const MovieApp = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    return (
        <>
            <MovieForm

            />
            <WatchList/>
        </>
    );
};

export default MovieApp;