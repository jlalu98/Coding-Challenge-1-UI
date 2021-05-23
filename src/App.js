import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Directors from "./components/Directors";
import AddDirector from "./components/AddDirector";
import FilmList from "./components/FilmList";
import FilmDetails from './components/FilmDetails';
import ControlledCarousel from "./components/Carousal";
import AddMovies from "./components/AddMovies";
import DirectorDetails from "./components/DirectorDetails"

function App(){
  return (
    <Router>
      <div>
      <h1>MOVIES STORE</h1>
        <ul className="header">

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/directors">DIRECTORS</NavLink></li>
          <li><NavLink to="/film_list">FILM LIST</NavLink></li>
          <li><NavLink to="/add_director">ADD DIRECTOR</NavLink></li>
          <li><NavLink to="/add_movies">ADD MOVIES</NavLink></li>
        </ul>
          <Route exact path="/"><ControlledCarousel /></Route>
          <Route path="/directors" component={Directors}/>
          <Route path="/add_director" component={AddDirector}/>
          <Route path="/add_movies" component={AddMovies}/>
          <Route path="/film_list" component={FilmList}/>
          <Route path="/films/:name" component={FilmDetails}/>
          <Route path="/directors/:name" component={DirectorDetails}/>

      </div>
    </Router>
  );
}
export default App;
