import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [check, setcheck] = useState(false);
  const tailleMaxBoule = 100;
  const [navBtnCheck, setnavBtnCheck] = useState(false);
  function changePage() {
    let boule = document.querySelector(".bigBoule");
    setTimeout(() => {
      boule.classList.toggle("scale-[100]");
      setnavBtnCheck(!navBtnCheck);
    }, 500.1);

    check == false
      ? boule.animate(
          [
            { transform: `scale(0.75)` },
            { transform: `scale(${tailleMaxBoule})` },
          ],
          500
        )
      : boule.animate(
          [
            { transform: `scale(${tailleMaxBoule})` },
            { transform: `scale(0.80)` },
            { transform: `scale(1)` },
          ],
          500
        );
    setcheck(!check)
  }
  useEffect(() => {
    let darkBtn = document.querySelector(".darkmodeBtn");
    let fluid = document.querySelector(".fluidSwitch");
    // fluid.animate([{}]);
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
    <div>
      <div className="z-40 fixed top-[50%] right-[50%]  translate-x-2/4 text-center ">
        <span onClick={changePage}>
          <NavLink
            to="/portfolio"
            className="text-white text-6xl tracking-widest p-5 "
            id="navBtn"
            // onClick={changePage}
            style={{ display: navBtnCheck == false ? "none" : "inline-block" }}
          >
            Portfolio
          </NavLink>
        </span>
        <br />
        <span
          onClick={changePage}
          style={{ display: navBtnCheck == false ? "none" : "inline-block" }}
  
        >
          <NavLink
            to="/cv"
            className="text-white text-6xl tracking-widest p-5 "
            id="navBtn"
          >
            CV
          </NavLink>
        </span>
      </div>
      <div
        className="bigBoule z-30 shadow-lg shadow-cyan-500/50"
        onClick={changePage}
      ></div>
      <div className="darkmodeBtn dark:text-white cursor-pointer flex  items-center fixed border-2 border-black dark:border-white w-14 rounded-full h-8 bottom-5 right-5 ease duration-300 ">
        <div className="rounded-full w-6 h-6 bg-gradient-to-r to-cyan-500 from-blue-500 dark:bg-white fluidSwitch ease-out duration-300"></div>
      </div>
    </div>
  );
};

export default Navbar;
