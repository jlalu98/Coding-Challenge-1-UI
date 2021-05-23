import React, { useEffect, useState } from 'react';
//import Film from '../../../server/FilmSchema';
import { useHistory } from "react-router-dom";

// import {
//     Route,
//     Link
//   } from "react-router-dom";
function DirectorDetails(props) {
    let history = useHistory();

    const [film, setFilm] = useState([]);
    const name = props.match.params.name;
    fetch("http://localhost:8000/films/directors/"+name)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            console.log(data);
            setFilm(data);
        })
        .catch(err => {
            console.log(err);
        })
    async function handleClick(name) {
        const uri = "http://localhost:8000/films/" + name;

        await fetch(uri, {
            method: "DELETE"
        })


        history.push("/film_list");
    }
    return (
        <div>
            {film.map(function (film) {
                return (
                    <div className="grid">

                        <div className="book-card" id={film._id}>
                            <br />
                            <img id="img" src={film.cover} alt={film.name} />
                            <div className="info">
                                <h3>{film.name}</h3>
                                <p className="price"><strong>Box office Collection:₹{film.boxOffice}</strong></p>
                                <p>Rating:{film.rating}</p>
                                <button type="button" id="del-button" onClick={() => handleClick(film.name)}>DELETE</button>
                            </div>
                        </div>


                    </div>
                );
            })}
        </div>
    );
}

export default DirectorDetails;