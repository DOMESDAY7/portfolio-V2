import React, { Component } from "react";
import { motion } from "framer-motion";
import Projectcards from "../components/ProjectCards";


class Portfolio extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.7 }}
      >
     <Projectcards />
      </motion.div>
    );
  }
}

export default Portfolio;
