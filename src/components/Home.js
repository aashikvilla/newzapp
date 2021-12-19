import React,{useContext,useState} from 'react';
import {Context} from './Layout';
import { useNavigate } from 'react-router';
import SearchBar from './SearchBar';

function Home() {
    const navigate=useNavigate();
    const {PublishersList}=useContext(Context);
    return (
        <>      
        <SearchBar/>
        <div className="home-container">
            {                
                PublishersList.map((p,index)=>(
                    <React.Fragment key={index}>
                    <div className="home-element" onClick={() => navigate(`/${p}`)}>
                        <h2>{p}</h2>
                    </div>                    
                    </React.Fragment>
                ))
            }

        </div>
        

        </>
    )
}

export default Home
