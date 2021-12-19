import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom';
import './style.css';
import Routing from './components/Routing';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>   
     
       <Layout/>
      
    </BrowserRouter>  
  );
}

export default App;
