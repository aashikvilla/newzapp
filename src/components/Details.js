import React from 'react'

function Details(props) {
    const{CATEGORY,HOSTNAME,PUBLISHER,TIMESTAMP,TITLE,URL}=props.item;
    const d=new Date(TIMESTAMP);
    const date=d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    return (
        <>
        <div className="details-container">
            <div className="title" >
                <h2>{TITLE}</h2>
                <a href={URL} /*target="_blank"*/> <img src="link.png" alt="go to" style={{padding:'1rem'}}/> </a>
                
            </div>
            
            <div className="content">
               
                <p>CATEGORY : {CATEGORY}</p>
                <p>HOSTNAME : {HOSTNAME}</p>              
                <p>PUBLISHED ON :{date}</p>
               
            </div>
           
        </div>
       
      
       </>
    )
}

export default Details
