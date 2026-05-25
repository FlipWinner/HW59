import type {IMovie} from "../../../../types";

interface Props {
    movies: IMovie[]
    onChangeInput: (id: string, name: string) => void
    onClick: (id: string) => void
}

const WatchList = ({movies, onChangeInput, onClick}: Props) => {

    const htmlWatchList = movies.length !== 0 && (
        <>
            <div className="list">
                <h2>To watch list: </h2>
                {movies.map(movie => (
                    <div className="list-movie" key={movie.id}>
                        <input type="text" value={movie.name} onChange={(e) => onChangeInput(movie.id, e.target.value)} />
                        <button type='button' onClick={() => onClick(movie.id)}>X</button>
                    </div>
                ))}
            </div>
        </>
    )

    return htmlWatchList;
};

export default WatchList;