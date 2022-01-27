import React, { Component } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
    {
      id: "1",
      text: "bonjour",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "2",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "3",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "4",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
  ];
  //appel au données de la bdd
  // useEffect(() => {

  // }, []);
  function handleActive(){
   
      document.querySelector( `[data-name='${this}'` ).style.transform ="scale(5)"

  }
  return (
    <div>
      {
        projects.map(project => (
        
            <div
              key={project.id}
              layoutId={project.id}
              className="p-10 rounded-lg bg-white shadow-lg mx-5 my-3 cursor-pointer anim-flotte ease-out delay-150 transition"
              onClick={handleActive.bind(project.id)}
          data-name={project.id}>
              <h5>{project.title}</h5>
              <h2>{project.text}</h2>
            </div>
          
        ))
      }
    </div>
  );
};

export default Portfolio;
