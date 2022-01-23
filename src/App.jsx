import React from 'react';
import {  Routes , Route,BrowserRouter, NavLink} from "react-router-dom";
import Navbar from './components/NavBar';
import CV from './page/CV';
import Portfolio from './page/portfolio';


function App() {
 
  return (
   <BrowserRouter>
     <Routes>
       <Route exact path="/"element={<CV />}/>
       <Route exact path="/cv"element={<CV />}/>
       <Route exact path="/portfolio"element={<Portfolio />}/>
     </Routes>
     <div className='bigBoule '></div>
     <Navbar />
   </BrowserRouter>
  )
}

export default App
