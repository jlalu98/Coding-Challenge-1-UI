import React ,{useState,useEffect} from 'react';
//const Searchbar=require("./search-bar"); 

import {
  Route,
  Link
} from "react-router-dom";
import DirectorDetails from "./DirectorDetails"
function Directors(props) {
    const [directors,setDirectors]=useState([]);
    const [searchArray,setsearchArray]=useState([]);
    const [searchList,setList]=useState([]);
    useEffect(()=>{

        fetch("http://localhost:8000/directors")
        .then(response=>{
          if(response.ok){
            return response.json()
          }
          throw response;
        })
        .then(data=>{
        setDirectors(data);
        //setsearchArray(data)
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })
        },[])
       // const handleSearch=(searchText,selected)=>{} 

    return (
        <div>
            <h1>Director List</h1>
            {/* <Searchbar handleSearch={handleSearch}/> */}
            {directors.map(function(director){
                    return(

                        <div className="grid">
                      <Link to={"/directors/"+director.name}>

                        <div className="book-card" id={directors._id}>
                        <br/>
                        <img id="img" src={director.cover} alt={director.name}/>
                        <div className="info">
                        <h3>{director.name}</h3>
                        <p>Age :{director.age}</p>
                        <p>Gender :{director.gender}</p>
                        <p><strong>Award Count :{director.awardCount}</strong></p>
                        </div>
                        </div>
                        </Link>
                            <Route path={"/directors/"+director.name}/>
                        </div>
                        
                    );
                })}
        </div>
    );
}

export default Directors;