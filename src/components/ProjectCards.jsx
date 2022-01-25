import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Projectcards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
    {
      id: "1",
      text: "bonjour",
      title: "salut",
    },
    {
      id: "2",
      text: "aurevoir",
      title: "salut",
    },
    {
      id: "3",
      text: "aurevoir",
      title: "salut",
    },
    {
      id: "4",
      text: "aurevoir",
      title: "salut",
    },
  ];

  return (
    <main>
      {projects.map((item) => {
        return (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.title}</motion.h5>
            <motion.h2>{item.text}</motion.h2>
            <motion.button onClick={ ()=>{setSelectedId(null)} }>X</motion.button>
          </motion.div>
        );
      })}
    </main>
  );
};

export default Projectcards;
