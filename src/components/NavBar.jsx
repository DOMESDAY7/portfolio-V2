import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [check, setcheck] = useState(false);
  const tailleMaxBoule = 100;

  function changePage() {
    let boule = document.querySelector(".bigBoule");
    setTimeout(() => {
      boule.classList.toggle("scale-[100]");
    }, 701);

    check == false
      ? boule.animate([{ transform: `scale(${tailleMaxBoule})` }], 700)
      : boule.animate([{ transform: `scale(1)` }], 700);
    check = check == true ? setcheck(false) : setcheck(true);
  }

  return (
    <div >
      <div className="z-40 fixed top-[50%] right-[50%] text-center">
        <span onClick={changePage}>
          <NavLink
            to="/portfolio"
            className="text-white text-6xl tracking-widest p-5 "
            id="navBtn"
            // onClick={changePage}
          >
            Portfolio
          </NavLink>
        </span>
        <br />
        <span onClick={changePage}>
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
