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

    const onChangeInput = (id: string, newName: string) => {
        setMovies((prevMovies) =>
            prevMovies.map(movie => movie.id === id ? { ...movie, name: newName} : movie)
        );
    }

    const deleteMovie = (id: string) => {
        setMovies((prevMovies) =>
            prevMovies.filter(movie => movie.id !== id)
        )
    }

    return (
        <>
            <MovieForm addMovie={addMovie} />
            <WatchList movies={movies} onChangeInput={onChangeInput} onClick={deleteMovie}/>
        </>
    );
};

export default MovieApp;