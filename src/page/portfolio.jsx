import React, { Component } from "react";
import { motion } from "framer-motion";
import ProjectSwiper from "../components/ProjectSwiper";

class Portfolio extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.7 }}
      >
        <ProjectSwiper />
      </motion.div>
    );
  }
}

export default Portfolio;
