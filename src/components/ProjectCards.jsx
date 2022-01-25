import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {AnimatePresence}from  "framer-motion";
const Projectcards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
      {
          id: "1",
          text:"bonjour",
          title: "salut",
      },
      {
        id: "1",
        text:"aurevoir",
        title: "salut",
    }
  ];
  {
    projects.map((project) => (
      <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>
        <motion.h5>{project.text}</motion.h5>
        <motion.h2>{project.title}</motion.h2>
      </motion.div>
    ));
  }

  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div layoutId={selectedId}>
          <motion.h5>{project.text}</motion.h5>
          <motion.h2>{project.title}</motion.h2>
          <motion.button onClick={() => setSelectedId(null)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projectcards;
