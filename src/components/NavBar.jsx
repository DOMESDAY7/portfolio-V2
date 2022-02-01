import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    let boule = document.querySelector(".bigBoule");
    let tailleMaxBoule = 100;
    let check = false;
    boule.addEventListener("click", () => {
      if (check == false) {
        setTimeout(() => {
          boule.classList.toggle("scale-[100]");
        }, 1001);
        boule.animate([{ transform: `scale(${tailleMaxBoule})` }], 1000);
      } else {
        setTimeout(() => {
          boule.classList.toggle("scale-1");
        }, 1001);
      }
    });
    // let navButtons = document.querySelectorAll(".navButton")
    // let check=true;
    // let tailleMaxBoule =50;
    // navButtons.forEach(navButton => {
    //     navButton.addEventListener("click",()=>{
    //        if(check){
    //         setTimeout(() => {
    //             boule.style.top="90%"
    //             boule.style.right="95%"
    //         }, 1001);
    //            boule.animate([
    //             {top:"5%", right:"5%"},
    //             {transform:`scale(${tailleMaxBoule})`},
    //             {top:"90%", right:"95%"},
    //         ],1000)
    //         check=false

    //     }else{
    //         setTimeout(() => {
    //             boule.style.right="5%"
    //             boule.style.top="5%"
    //             console.log("bonjour")
    //         }, 1001);
    //         boule.animate([
    //             {top:"90%", right:"95%"},
    //             {transform:`scale(${tailleMaxBoule})`},
    //             {top:"5%", right:"5%"},

    //         ],1000)

    //         check=true
    //         }
    //     })
    // });
  });
  return (
    <nav className=" border w-screen">
      <NavLink to="/portfolio">
        <div className="z-40 relative text-white">Portfolio</div>
      </NavLink>
      <br />
      <NavLink to="/cv">
        <div className="z-40 relative text-white">CV</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
