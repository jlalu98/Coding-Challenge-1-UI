import React,{useState} from 'react';

function Searchbar(props) {
    const [selected,setSeletced]=useState("");
    const [searchText,setSearchText]=useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    const handleSelected=(e)=>{
        setSeletced(e.target.value);
    }
    return (
        <div>
            <form className="search-form">
                <select className="browser-default custom-select" onClick={handleSelected}>
                    <option value="get directors of film">get directors of film"</option>
                    <option value="get films of a director">get films of a director</option>
                </select>
                <input type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
                <button  onClick={()=>props.handleSearch(searchText,selected)}>Search</button>
            </form>
        </div>
    );
}

export default Searchbar;