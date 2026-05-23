import {useState} from "react";
import * as React from "react";
import type {MovieMutation} from "../../../../types";

interface Props {
    addMovie: (newMovie: MovieMutation) => void;
}

const MovieForm = ({addMovie}: Props) => {

    const [form, setForm] = useState<MovieMutation>({
        name: ''
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setForm({
            ...form,
            name: value
        });
    };

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addMovie(form)

        setForm({
            name: ''
        })
    };

    return (
        <>
            <div className="container form">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Movie Name"
                        onChange={onInputChange}
                        value={form.name}
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        </>
    );
};

export default MovieForm;