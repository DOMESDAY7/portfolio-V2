import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import CV from "./page/CV";
import Portfolio from "./page/portfolio";
import { AnimatePresence } from "framer-motion";
import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(false);
  const [checkInterval, setcheckInterval] = useState(false);
  const [check, setcheck] = useState(false);
  const tailleMaxBoule = 100;
  const [navBtnCheck, setnavBtnCheck] = useState(false);
  function changePage() {
    if (checkInterval == false) {
      let boule = document.querySelector(".bigBoule");
      setTimeout(() => {
        boule.classList.toggle("scale-[100]");
      }, 500.1);

      if (check == false) {
        boule.animate(
          [
            { transform: `scale(0.75)` },
            { transform: `scale(${tailleMaxBoule})` },
          ],
          500
        );

        setTimeout(() => {
          setnavBtnCheck(true);
        }, 500.1);
        setcheck(!check);
      } else {
        boule.animate(
          [
            { transform: `scale(${tailleMaxBoule})` },
            { transform: `scale(0.80)` },
            { transform: `scale(1)` },
          ],
          500
        );
        setnavBtnCheck(false);
        setcheck(!check);
      }
      setcheckInterval(true);
      setTimeout(() => {
        setcheckInterval(false);
      }, 500.1);
    }
    console.log(navBtnCheck);
  }
  useEffect(() => {
    let darkBtn = document.querySelector(".darkmodeBtn");
    let fluid = document.querySelector(".fluidSwitch");
    darkBtn.addEventListener("click", () => {
      document.querySelector("html").classList.toggle("dark");
    });
    darkBtn.addEventListener("mousedown", () => {
      fluid.classList.add("w-full");
    });
    darkBtn.addEventListener("mouseup", () => {
      fluid.classList.remove("w-full");
      darkBtn.classList.toggle("justify-end");
    });
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CV theme={theme}/>} />
          <Route exact path="/cv" element={<CV theme={theme} />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
       
        

        <div className="z-40 fixed top-[0] right-[50%]  translate-x-2/4 text-center flex flex-col justify-center  h-screen">
        <span onClick={changePage}>
          <NavLink
            to="/portfolio"
            className="text-white text-6xl tracking-widest p-5  ease-in duration-300 justify-center self-center"
            id="navBtn"
            // onClick={changePage}
            style={{ display: navBtnCheck == false ? "none" : "flex" }}
          >
            <img
              src={"./src/img/portfolio.svg"}
              alt="go to portofolio"
              className="w-20"
            />
            Portfolio
          </NavLink>
        </span>
        <br />
        <span onClick={changePage}>
          <NavLink
            to="/cv"
            className="text-white text-6xl tracking-widest p-5  ease-in duration-300 justify-center self-center"
            id="navBtn"
            style={{ display: navBtnCheck == false ? "none" : "flex" }}
          >
            <img src={"./src/img/cv.svg"} alt="go to cv" className="w-20" />
            CV
          </NavLink>
        </span>
      </div>
      <div
        className="bigBoule z-30 shadow-lg shadow-cyan-500/50 transform-gpu "
        onClick={changePage}
      ></div>

      <div className="darkmodeBtn dark:text-white cursor-pointer flex  items-center fixed border-2 border-black dark:border-white w-14 rounded-full h-8 bottom-5 right-5 ease duration-300 " onClick={()=>{setTheme(!theme)}}>
        <div className="rounded-full w-6 h-6 bg-gradient-to-r to-cyan-500 from-blue-500 dark:bg-white fluidSwitch ease-out duration-300"></div>
      </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
