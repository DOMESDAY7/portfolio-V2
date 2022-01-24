import React, { Component } from "react";
import TextBuble from "../components/TextBuble";
import {motion}from  "framer-motion";
class CV extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, y: "-10px"}}
        initial={{ opacity: 1 }}
        transition={{duration:1.5}}
        className="page m-auto position-relative container container-fluid"
      >
        <h1 className="text-center">Mathieu Andriamiraho</h1>
        <TextBuble />
        <div className="boule1 boule"></div>
        <div className="boule2 boule"></div>
        <div className="boule3 boule"></div>
        <div className="boule4 boule"></div>
      </motion.div>
    );
  }
}

export default CV;
