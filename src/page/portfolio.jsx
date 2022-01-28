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
    fetch("http://localhost/apiCV/index.php?q=project")
      .then((resp) => resp.json())
      .then((data) => setprojects(data))
    console.log("bonjoue");
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      className="overflow-hidden p-5 border my-auto  "
    >
    <Swiperproject />
    </motion.div>
  );
};

export default Portfolio;
