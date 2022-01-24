import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Navbar = () => {
  
    useEffect(() => {
        let boule= document.querySelector(".bigBoule");
        let navButtons = document.querySelectorAll(".navButton")
        let check=true;
        let tailleMaxBoule =50;
        navButtons.forEach(navButton => {
            navButton.addEventListener("click",()=>{
               if(check){ 
                setTimeout(() => {
                    boule.style.top="90%"
                    boule.style.right="95%"
                }, 1001);
                   boule.animate([
                    {top:"5%", right:"5%"},
                    {transform:`scale(${tailleMaxBoule})`},
                    {top:"90%", right:"95%"},
                ],1000)
                check=false
               
            }else{
                setTimeout(() => {
                    boule.style.right="5%"
                    boule.style.top="5%"
                    console.log("bonjour")
                }, 1001);
                boule.animate([
                    {top:"90%", right:"95%"},
                    {transform:`scale(${tailleMaxBoule})`},
                    {top:"5%", right:"5%"},
                    
                ],1000)
                
                
                check=true
                }
            })
        });
    });
    return (
        <nav className='containerNav'>
            <NavLink  to="/portfolio">
                <div className="navButton text-center" >Portfolio</div>
            </NavLink><br/>
            <NavLink  to="/cv">
                <div className="navButton text-center " >CV</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;
