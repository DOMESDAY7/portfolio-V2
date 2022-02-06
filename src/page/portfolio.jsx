import React, { Component } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import Swiperproject from "../components/swiperProject";

// Import Swiper styles
// import "swiper/css";


const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
 const [projects, setprojects] = useState([]);
 //mettre l'appel des données a l'affichage du composant APP
  useEffect(() => {
    fetch("./apiCV/?q=project")
      .then((resp) => resp.json())
      .then((data) => setprojects(data))
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
     
      className="overflow-hidden  my-auto  "
    >
    <Swiperproject />
    </motion.div>
  );
};

export default Portfolio;
