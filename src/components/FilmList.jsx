import React,{useEffect,useState} from 'react';
//import Film from '../../../server/FilmSchema';
import {useHistory} from "react-router-dom";

import {
    Route,
    Link
  } from "react-router-dom";
//const StarComponent=require("./star-component");
import FilmDetails from "./FilmDetails";
function FilmList(props) {
  let history =useHistory();
    const [films,setFilms]=useState([]);
    async function handleClick(name) {
    const uri="http://localhost:8000/films/"+name;

      await fetch(uri,{
        method:"DELETE"        
      }) 
   

    history.push("/film_list");
  }
    useEffect(()=>{

        fetch("http://localhost:8000/films")
        .then(response=>{
          if(response.ok){
            return response.json()
          }
          throw response;
        })
        .then(data=>{
        setFilms(data);
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })
        },[])
    return (
        <div>
            <div className="grid">
            {films.map(function(film){
                    return(
                        <div className="grid">
                            <Link to={"/films/"+film.name}>
        
                        <div className="book-card" id={film._id}>
                        <br/>
                        <img id="img" src={film.cover} alt={film.name}/>
                        <div className="info">
                        <h3>{film.name}</h3>
                        <p className="price"><strong>Box office Collection:₹{film.boxOffice}</strong></p>
                        <p>Rating:{film.rating}</p>
                        <button type="button" id="del-button" onClick={()=>handleClick(film.name)}>DELETE</button>
                        </div>
                        </div>
                       
                        </Link>
                            <Route path={"/films/"+film.name} component={FilmDetails}/>
                        </div>
                    );
                })}
        </div>
        </div>
    );
}

export default FilmList;