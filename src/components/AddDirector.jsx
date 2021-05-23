import React,{useState}from 'react';
import {useHistory} from "react-router-dom"
function AddDirector() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [awardCount, setAwardCount] = useState("");
    const [cover,setCover]=useState("");
    const [films,setFilms]=useState([]);
  
    function handleNameChange(event) {
      setName(event.target.value);
    }
    function handleAgeChange(event) {
      setAge(event.target.value);
    }
    function handleGenderChange(event) {
      setGender(event.target.value);
    }
    function handleAwardCountChange(event) {
      setAwardCount(event.target.value);
    }
    function handleCoverChange(event){
      setCover(event.target.value);
    }
    function handleFilmChange(event){
      let film=event.target.value;
      let films=film.split(",");
      setFilms(films);
    }
    
  
   function handleSubmit(event) {
      event.preventDefault();
      const director = {
        //id: id,
        name: name,
        age: age,
        gender: gender,
        awardCount: awardCount,
        cover:cover,
        films:films
       
      };

        fetch("http://localhost:8000/directors",{
          method:"POST",
          body:JSON.stringify(director),
          headers:{"Content-Type":"application/json"}
          })
      
    
      history.push("/");
    }
    
  
    return (
      <div className="book-form">
        <form className="form-area">
          <h2>Add New Director</h2> <hr />
          <br />
          <div>
            <label htmlFor="title">Name : </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="author">Age : </label>
            <input
              type="text"
              name="age"
              placeholder="age"
              value={age}
              onChange={handleAgeChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="price">Gender : </label>
            <input
              type="text"
              name="gender"
              placeholder="gender"
              value={gender}
              onChange={handleGenderChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="rating">Award Count : </label>
            <input
              type="text"
              name="awards"
              placeholder="awards"
              value={awardCount}
              onChange={handleAwardCountChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="price">Cover : </label>
            <input
              type="text"
              name="cover"
              placeholder="cover"
              value={cover}
              onChange={handleCoverChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="price">Films : </label>
            <input
              type="text"
              name="gender"
              placeholder="directors"
              value={films}
              onChange={handleFilmChange}
              required
            />
          </div>
          <div>
              <button type="button" id="add-button" onClick={handleSubmit}>ADD</button>
          </div>
          <br />
        </form>
      </div>
    );
}

export default AddDirector;