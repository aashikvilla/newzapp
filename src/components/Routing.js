import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import PublisherDetails from './PublisherDetails';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:publisher" element={<PublisherDetails/>}/>            
        </Routes>
    )
}

export default Routing
