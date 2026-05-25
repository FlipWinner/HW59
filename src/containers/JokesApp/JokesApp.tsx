import {useEffect} from "react";
import * as React from "react";

const JokesApp = () => {

    const [jokes, setJokes] = React.useState<{name: string, id : string}[]>([]);

    const [reRender, setReRender] = React.useState(false);

    const URL = 'https://api.chucknorris.io/jokes/random';


    useEffect(() => {
        const getJoke = () => fetch(URL);

        const run = async () => {
            try {
                const responses = await Promise.all([getJoke(), getJoke(), getJoke(),getJoke(), getJoke()]);

                const dataJokes = await Promise.all(responses.map( async (res) => {
                    const joke = await res.json();

                    return {name: joke.value, id: joke.id};
                }));

                setJokes(dataJokes);

                console.log(dataJokes);

            } catch (err) {
                console.error(err);
            }
        }

        run();

    }, [reRender]);

    return (
        <>
            {jokes.map((joke) => (
                <div key={joke.id} style={{margin: '20px'}}>
                    {joke.name}
                </div>
            ))}

            <button type='button' onClick={()  => setReRender(!reRender)}>Get new jokes</button>
        </>
    );
};

export default JokesApp;