import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import CV from "./page/CV";
import Portfolio from "./page/portfolio";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CV />} />
          <Route exact path="/cv" element={<CV />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
       
        

        <Navbar />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
