import React, { Component } from "react";
import TextBuble from "../components/TextBuble";
import { motion } from "framer-motion";
import Download from "../components/download";

function CV(props) {

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="page max-w-5xl mx-auto dark:text-white my-3.5 shadow-lg dark:shadow-gray-700 "
    >
      <section className="flex items-center justify-center">
        <h1 className="text-center text-4xl">
          Mathieu Andriamiraho {props.theme}
        </h1>
        <a href="./src/img/cv.pdf" download>
          <Download theme={props.theme} className="w-10 border"/>
        </a>
      </section>
      <br />
      <TextBuble />
      <div className="containerBoule">
        <div className="boule1 boule"></div>
        <div className="boule2 boule"></div>
        <div className="boule3 boule"></div>
        <div className="boule4 boule"></div>
      </div>
    </motion.div>
  );
}

export default CV;
