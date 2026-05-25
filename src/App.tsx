import MovieApp from "./containers/MovieApp/MovieApp.tsx";
import JokesApp from "./containers/JokesApp/JokesApp.tsx";

const App = () => {

  return (
    <>
        <MovieApp/>
        <hr style={{margin: '20px'}}/>
        <JokesApp/>
    </>
  )
};

export default App
