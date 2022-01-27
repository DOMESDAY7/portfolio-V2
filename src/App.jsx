import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import CV from "./page/CV";
import Portfolio from "./page/portfolio";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let darkBtn = document.querySelector(".darkmodeBtn");
    let fluid = document.querySelector(".fluidSwitch");
    // fluid.animate([{}]);
   darkBtn.addEventListener("click", () => {
        document.querySelector("html").classList.toggle("dark");
    });
    darkBtn.addEventListener("mousedown",()=>{
      fluid.classList.add("w-full")
    })
    darkBtn.addEventListener("mouseup",()=>{
        fluid.classList.remove("w-full")
        darkBtn.classList.toggle("justify-end")

     
    })
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CV />} />
          <Route exact path="/cv" element={<CV />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
        <div className="bigBoule "></div>
        <div className="darkmodeBtn dark:text-white cursor-pointer flex  items-center fixed border-2 border-black dark:border-white w-14 rounded-full h-8 bottom-5 right-5 ease duration-300">
          <div className="rounded-full w-6 h-6 bg-gradient-to-r to-cyan-500 from-blue-500 dark:bg-white fluidSwitch ease-out duration-300"></div>
        </div>

        <Navbar />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
