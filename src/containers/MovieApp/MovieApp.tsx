import MovieForm from "../components/MovieComponents/MovieForm/MovieForm.tsx";
import WatchList from "../components/MovieComponents/WatchList/WatchList.tsx";
import {useState} from "react";
import type {IMovie, MovieMutation} from "../../types";

const MovieApp = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const addMovie = (newMovie: MovieMutation) => {
        const updatedMovie = {...newMovie, id: crypto.randomUUID()};

        setMovies(prevMovies => [...prevMovies, updatedMovie]);
    }

    const onChangeInput = (id: string, name: string) => {
        movies.map(movie => movie.id === id ? { ...movie, name: name} : movie);
    }

    return (
        <>
            <MovieForm addMovie={addMovie} />
            <WatchList movies={movies} onChangeInput={onChangeInput} />
        </>
    );
};

export default MovieApp;