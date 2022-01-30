import React from "react";
import reactDom from "react-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
const RenderModalText = (props) => {
  // useEffect(() => {
    
  // }, [props.description]);
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 700 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="bg-white rounded-lg  shadow-lg p-10 w-2/6 dark:text-white dark:bg-slate-700 self-center mr-5"
    >
      <motion.p
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="whitespace-pre-line"
      >
        {props.description}
      </motion.p>
      <br />
      <motion.code
        exit={{ opacity: 0 }}
        animate={{ y: 0 }}
        initial={{ y: 100 }}
      >
        {props.language.split(";").map((lang) => "|" + lang)}
      </motion.code>
      <br />
      <a href={props.link}>
        <button className="rounded bg-black text-white p-3">
          Voir le projet
        </button>
      </a>
    </motion.div>
  );
};
const Swiperproject = () => {
  const [projects, setprojects] = useState([]);

  const [cpt, setCpt] = useState(0);
  useEffect(() => {
    fetch("http://localhost/apiCV/index.php?q=project")
      .then((resp) => resp.json())
      .then((data) => {
        setprojects(data);
      });
  }, []);

  const renderProject = projects.map((project) => (
    <SwiperSlide className=" p-5 flex flex-col justify-center items-center">
      <section className="shadowIn p-10 rounded-lg">
        <img
          src={project.imgLink}
          alt={"logo de " + project.name}
          className="w-96 select-none"
        />
      </section>
      <h5 className="text-center dark:text-white">{project.name}</h5>
    </SwiperSlide>
  ));

  const modal = (
    <RenderModalText
      description={projects[cpt] == null ? "null" : projects[cpt].description}
      language={
        projects[cpt] == null
          ? "un problème est survenu"
          : projects[cpt].language
      }
      link={
        projects[cpt] == null ? "un problème est survenu" : projects[cpt].link
      }
    />
  );
  const renderVisu = projects.map((project) => {
    return (
      <SwiperSlide className="flex justify-center self-center">
        {project.imgProject.split(";").map((imgProject) => {
          return <img src={imgProject} className="w-2/6 m-[5px]"/>;
        })}
      </SwiperSlide>
    );
  });

  return (
    <div className="flex w-screen">
      <Swiper
        direction="vertical"
        className=" justify-center items-center h-screen w-2/6 hidden lg:flex"
        onRealIndexChange={(swiper) => {
          console.log(document.querySelector(".swiper-logo"))
        }}
        onSwiper={(swiper)=>console.log(swiper)}
      >
        {renderVisu}
      </Swiper>
      <Swiper
        direction="vertical"
        className="flex justify-center items-center h-screen w-2/6 swiper-logo"
        onSwiper={(swiper)=>console.log(swiper)}
        onRealIndexChange={(swiper) => {
          setCpt(swiper.realIndex);
        }}
      >
        {renderProject}
      </Swiper>
      {modal}
    </div>
  );
};

export default Swiperproject;

//quand la slide change il faut incrémenté un compteur qui définira le texte a affiché
