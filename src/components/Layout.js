import React,{useState,useEffect} from 'react'
import Routing from './Routing';

export const Context = React.createContext();

function Layout() {
    const [newsDetails,setNeswDetails]=useState([]);
    const [publishersList,setPublishersList]=useState([]);

    useEffect(() => {
        fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json')
       .then(response => response.json())
       .then(data => {
        console.log("data",data);

        const unique = [...new Set(data.map(item => (item.PUBLISHER.split("\\")[0].trim())))];
       
        console.log("unique publishers",unique);     

        setPublishersList(unique);
        setNeswDetails(data);
       })
       .catch(error => {
        console.log("error",error)
       })
     }, []);

     var context={
         "NewsDetails":newsDetails,
         "PublishersList":publishersList
     }
    return (
        <>
       <Context.Provider value={context}>
       <center>
           <div className="navbar">               
               <img src="/logo.png" width="40px" style={{paddingRight:'5px'}}/>               
                <div >Newzapp!!</div>               
               
            </div>
            </center>
            <section className="main-section">
            <Routing/>  
            </section>    

            <footer style={{padding:'1rem'}}>
                <center>
                Created by Aashik Villa
                </center>
            </footer> 
        </Context.Provider>
        </>
    )
}

export default Layout
