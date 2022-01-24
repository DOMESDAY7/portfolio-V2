import React, { Component } from "react";
import {motion}from  "framer-motion";
class Portfolio extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{duration:2}}
      >
        bonjour c'est le portfolio
      </motion.div>
    );
  }
}

export default Portfolio;
