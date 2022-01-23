import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Navbar = () => {
  
    useEffect(() => {
        let boule= document.querySelector(".bigBoule");
        let navButtons = document.querySelectorAll(".navButton")
        let check=true;
        navButtons.forEach(navButton => {
            navButton.addEventListener("click",()=>{
               if(check){ 
                setTimeout(() => {
                    boule.style.left="90%"
                    boule.style.right="95%"
                }, 999);
                   boule.animate([
                    {top:"5%", right:"5%"},
                    {transform:"scale(30)"},
                    {top:"90%", right:"95%"},
                ],1000)
                check=false
               
            }else{
                boule.animate([
                    {top:"90%", right:"95%"},
                    {transform:"scale(30)"},
                    {top:"5%", right:"5%"},
                   
                    
                ],1000)
                setTimeout(() => {
                    boule.style.left="5%"
                    boule.style.right="5%"
                }, 999);
                
                check=true
                }
            })
        });
    });
    return (
        <nav className='containerNav'>
        
            <NavLink  to="/portfolio">
                <div class="navButton text-center" activeClassName="selected">Portfolio</div>
            </NavLink><br/>
            <NavLink  to="/cv">
                <div className="navButton text-center " activeClassName="selected">CV</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;
