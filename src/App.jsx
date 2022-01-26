import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import CV from "./page/CV";
import Portfolio from "./page/portfolio";
import { AnimatePresence } from "framer-motion";
// import { useEffect } from 'react';
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CV />} />
          <Route exact path="/cv" element={<CV />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
        <div className="bigBoule "></div>
        <button
          className="darkmodeBtn rounded-full bg-black text-white fixed"
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}
        >dark
          <div className="rounded-full w-4 h-2 border-2 border-black border-solid">
            <div className="rounded-full bg-black h-2"></div>
          </div>

        </button>

        <Navbar />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
