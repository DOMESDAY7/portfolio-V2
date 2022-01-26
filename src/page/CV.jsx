import React, { Component } from "react";
import TextBuble from "../components/TextBuble";
import {motion}from  "framer-motion";
class CV extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1}}
        initial={{ opacity: 0 }}
        transition={{delay:0.5}}
        className="page max-w-5xl mx-auto relative bg-white dark:bg-slate-900 dark:text-white"
      >
        <h1 className="text-center text-4xl">Mathieu Andriamiraho</h1>
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
