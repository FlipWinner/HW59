import MovieForm from "../components/MovieComponents/MovieForm/MovieForm.tsx";
import WatchList from "../components/MovieComponents/WatchList/WatchList.tsx";
import {useState} from "react";
import type {IMovie, MovieMutation} from "../../types";

const MovieApp = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const []

    const addMovie = (newMovie: MovieMutation) => {
        const updatedMovie = {...newMovie, id: crypto.randomUUID()};

        setMovies(prevMovies => [...prevMovies, updatedMovie]);
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {

    }

    return (
        <>
            <MovieForm addMovie={addMovie} />
            <WatchList/>
        </>
    );
};

export default MovieApp;