import React, { useState, useEffect,useContext } from "react";
import {Context} from './Layout'



function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [displayResults, setDisplay] = useState("");

  const {NewsDetails}=useContext(Context);

  useEffect(()=>{
      setData(NewsDetails);
  },[NewsDetails]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
   // setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.TITLE.toLowerCase().includes(searchWord.toLowerCase());
    });

    console.log("value",searchWord);
    console.log("filter data",newFilter);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

 
  return (
    <div className="search">
    
        <input
          type="text"
          placeholder="Search for news!!"         
          onChange={handleFilter}
        />
       
     
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.URL} target="_blank" key={key}>
                <p>{value.TITLE} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;