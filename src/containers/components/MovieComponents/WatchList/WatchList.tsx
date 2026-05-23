import type {IMovie} from "../../../../types";

interface Props {
    movies: IMovie[]
    onChangeInput: (id: string, name: string) => void
}

const WatchList = ({movies, onChangeInput}: Props) => {

    return (
        <>
            <div className="list">
                {movies.map(movie => (
                    <div className="list-movie">
                        <input type="text" onChange={() => onChangeInput(movie.id, movie.name)}/>
                        <button type='button'>X</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WatchList;