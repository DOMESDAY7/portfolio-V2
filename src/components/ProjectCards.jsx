import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
// import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
const Projectcards = () => {
  const [isActive, setisActive] = useState(false);
  const [projects, setprojects] = useState([
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
  ]);

  return (
    <div className=" flex flex-wrap">
     
    </div>
  );
};

export default Projectcards;
