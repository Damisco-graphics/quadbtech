import React from 'react';

import './css/App.css';
import  'bootstrap';
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/body.css';

import {Routes, Route} from 'react-router-dom';

import Loadsummary from "./pages/Loadsummary"
import Layout from './pages/Layout'
import Nopage from './pages/Nopage.jsx'
import footer from './component/footer.jsx';




  

 
 
  function App() {
    

      return (
        
        <div>
          
        <Routes>        
          <Route path ="/" element={<Layout/>} />
          <Route path ="/quadbtech" element={<Layout/>} />
        <Route path ="/summary/:id" element={<Loadsummary/>} />
        <Route path ="/quadbtech/summary/:id" element={<Loadsummary/>} />
        <Route path = "*" element={<Nopage/>}/>
      </Routes>
       {footer()}
      </div>
      
) 
      }
    
  


    

export default App;
