import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router'
import Details from './Details';
import {Context} from './Layout'


function PublisherDetails() {
    const {publisher}=useParams();
    const {NewsDetails}=useContext(Context);

    const [publisherNews,setPublisherNews]=useState([]);


    useEffect(()=>{
        console.log("NewsDetails",NewsDetails);
        console.log("PUBLISHER",publisher);
        let n=NewsDetails.filter((n)=>(n.PUBLISHER.split("\\")[0].trim()==publisher));
        n.sort(function(a,b){
            return b.TIMESTAMP-a.TIMESTAMP;
        })
        console.log(n);
        setPublisherNews(n);

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
