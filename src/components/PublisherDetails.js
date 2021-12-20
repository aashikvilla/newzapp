import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router'
import Details from './Details';
import {Context} from './Layout';
import {useNavigate} from 'react-router-dom'


function PublisherDetails() {
    const navigate=useNavigate();
    const {publisher}=useParams();
    const {NewsDetails}=useContext(Context);

    const [publisherNews,setPublisherNews]=useState([]);


    useEffect(()=>{
        console.log("NewsDetails",NewsDetails);
        console.log("PUBLISHER",publisher);
        let newsList=NewsDetails.filter((n)=>(n.PUBLISHER.split("\\")[0].trim()==publisher));
        newsList.sort(function(a,b){
            return b.TIMESTAMP-a.TIMESTAMP;
        })
        if(newsList.length==0){
            navigate("/not-found");
        }
        console.log(newsList);
        setPublisherNews(newsList);

    },[NewsDetails,publisher])
    return (
        <>
        <h1>
            {publisher}
        </h1>
        {
            publisherNews.map((p)=>(
                <Details item={p} key={p.id} />
            ))
        }
        </>
    )
}

export default PublisherDetails
