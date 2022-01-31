import React from "react";
import { Controller } from "swiper";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
const RenderModalText = (props) => {

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
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [cpt, setCpt] = useState(0);
  useEffect(() => {
    fetch("http://localhost/apiCV/index.php?q=project")
      .then((resp) => resp.json())
      .then((data) => {
        setprojects(data);
        console.log(data)
      });
  }, []);

  const renderProject = projects.map((project) => (
    <SwiperSlide className=" p-5 flex flex-col justify-center items-center h-1/2 ">
      <Swiper className="shadowIn p-10 rounded-lg border-black h-2/3 border w-full" direction="horizontal">
     
        {project.imgLink.split("|").map((imgLink) => {
          return (
            <SwiperSlide className="h-full  flex justify-center items-center">
              <img src={imgLink}  className="h-1/2"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
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

  return (
    <div className="flex w-screen">
      <Swiper
        direction="vertical"
        className="flex justify-center items-center h-screen w-2/6 swiper-logo"
        onSwiper={(swiper) => console.log(swiper)}
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
