import React, { Component } from "react";
import { motion } from "framer-motion";
import Projectcards from "../components/ProjectCards";

class Portfolio extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 0.5 },
        }}
      >
        <Projectcards />
      </motion.div>
    );
  }
}

export default Portfolio;
