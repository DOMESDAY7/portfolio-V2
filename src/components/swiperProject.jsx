import React from "react";
import { Navigation, Keyboard,Mousewheel  } from "swiper";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const Swiperproject = () => {
  const [projects, setprojects] = useState([]);
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    // fetch("./apiCV/?q=project")
    fetch("http://localhost/apiCV/?q=project")
      .then((resp) => resp.json())
      .then((data) => {
        setprojects(data);
      });
  }, []);

  const Description = (props) => {
    const [plusCheck, setPlusCheck] = useState(false);
    let cpt = 0;
    let shortString = "";
    while (cpt < 50) {
      shortString = shortString + props.text[cpt];

      cpt++;
    }
    return (
      <p>
        {plusCheck == true ? props.text : shortString}
        <strong
          className={
            plusCheck == false ? " px-1 cursor-pointer text-cyan-400" : "hidden"
          }
          onClick={() => {
            setPlusCheck(!plusCheck);
          }}
        >
          ...plus
        </strong>
      </p>
    );
  };
  const RenderModalText = (props) => {
    const isSmall = useMediaQuery("(min-width:640px)");
    const variants = isSmall
      ? {
          animate: { x: -200, opacity: 1 },
          initial: { x: 0 },
          exit: { opacity: 0,x: -200 },
          transition: { type: "spring", stiffness: 200 },
        }
      : {
          animate: { x: 0, opacity: 1 },
          initial: { x: 0 },
          exit: { opacity: 0,x: -200 },
          transition: { type: "spring", stiffness: 200 },
        };
    return (
      <motion.div
        animate="animate"
        initial="initial"
        variants={variants}
        className="bg-stone-100 rounded-lg  shadow-lg p-10 sm:w-2/6 dark:text-white dark:bg-slate-700 justify-start self-center  z-10 absolute bottom-0 sm:static w-11/12 md:ml-28"
        id="popUpInfo"
      >
        <motion.p
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="whitespace-pre-line"
          data-description={props.id}
        >
          <Description text={props.description} id={props.id} />
          {props.id_project}
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
          <button className="rounded  bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-3">
            Voir le projet
          </button>
        </a>
      </motion.div>
    );
  };

  const renderProject = projects.map((project) => (
    <SwiperSlide className=" p-5 flex flex-col sm:justify-center items-center h-1/2  ">
      <Swiper
        className="shadowIn p-10 rounded-lg border-black h-1/2 sm:h-2/3  w-full horiSwiper"
        direction="horizontal"
        modules={[Navigation, Keyboard]}
        navigation
        keyboard
        
      >
        {project.imgLink.split("|").map((imgLink) => {
          return (
            <SwiperSlide className="h-full  flex justify-center items-center">
              <img src={imgLink} className="w-2/3" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h5 className="text-center dark:text-white">{project.name}</h5>
    </SwiperSlide>
  ));

  const modal = (
    <RenderModalText
      description={
        projects[cpt] == null ? "chargement..." : projects[cpt].description
      }
      language={
        projects[cpt] == null
          ? "un problème est survenu"
          : projects[cpt].language
      }
      link={projects[cpt] == null ? "chargement..." : projects[cpt].link}
      id={cpt}
    />
  );

  return (
    <div className="flex items-center justify-center w-screen relative">
      <Swiper
        direction="vertical"
        className="flex justify-center items-center content-center h-screen   w-screen sm:w-2/6 swiper-logo verticalSwiper"
        onSwiper={(swiper) => console.log(swiper)}
        onRealIndexChange={(swiper) => {
          setCpt(swiper.realIndex);
        }}
        modules={[Navigation, Keyboard,Mousewheel ]}
        navigation
        keyboard
        mousewheel
      >
        {renderProject}
      </Swiper>
      {modal}
    </div>
  );
};
export default Swiperproject;
