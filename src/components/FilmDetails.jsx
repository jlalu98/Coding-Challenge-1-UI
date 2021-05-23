import React,{useState} from 'react';

function FilmDetails(props) {
const [film,setFilm]=useState([]);
  const name = props.match.params.name;
  //const uri="http://localhost:8000/films/"+name;
  // async function handleClick() {
  //     await fetch(uri,{
  //       method:"DELETE"        
  //     }) 
   

  //   history.push("/film_list");
  // }
fetch("http://localhost:8000/directors/films/"+name)
.then(response=>{
  if(response.ok){
    return response.json()
  }
  throw response;
})
.then(data=>{
console.log(data);
setFilm(data);
})
.catch(err=>{
  console.log(err);
})
    return (
        <div>
            {/* <h1>Film Details</h1>
            <div className="card">
                <img id="imgDetails" src={film.cover} alt={film.name} />
                <div className="book-info">
                <p>
                  <strong>Rating:{film.rating}</strong>
                </p>
                <p>
                  <strong>Box Office Collection :₹{film.boxOffice}</strong>
                </p>
                </div>
                <button type="button" id="del-button" onClick={handleClick}>DELETE</button>
              </div> */}
              {film.map(function(director){
                    return(
                        <div className="grid">
        
                        <div className="book-card" id={director._id}>
                        <br/>
                        <img id="img" src={director.cover} alt={director.name}/>
                        <div className="info">
                        <h3>{director.name}</h3>
                        <p>Age :{director.age}</p>
                        <p>Gender :{director.gender}</p>
                        <p><strong>Award Count :{director.awardCount}</strong></p>
                        </div>
                        </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default FilmDetails;