import React, { Component } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
    {
      id: "1",
      text: "bonjour",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "2",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "3",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
    {
      id: "4",
      text: "aurevoir",
      title: "salut",
      isAnimate: false,
    },
  ];
  //appel au données de la bdd
  // useEffect(() => {

  // }, []);

  //  useEffect(() => {
  //    let cardProjects = document.querySelectorAll(".cardProject")
  //    cardProjects.forEach((cardProject)=>{
  //     cardProject.addEventListener("click",()=>{
  //       cardProject.classList.toggle("scale-[5]")
  //      })
  //    })
  //   // document.querySelector( `[data-name='${this}'` ).style.transform ="scale(5)"
  //    return () => {
  //      cardProjects.forEach(cardProject => {
  //         cardProject.removeEventListener("click",()=>{
  //           cardProject.style.transform="scale(5)"
  //          })
  //      });

  //    };
  //  }, []);

  return (
    <motion.div
    exit={{ opacity: 0.5}}
    animate={{ opacity: 1}}
    initial={{ opacity: 0 }}
    transition={{delay:0.5}}
className="overflow-hidden p-5 border my-auto"
  >
    <Swiper
      // install Swiper modules
      modules={[Virtual]}
      spaceBetween={150}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    className="h-full">
      {
        projects.map((project,index)=>
          <SwiperSlide key={project.id} virtualIndex={index}>
            
            <section className="p-5 shadow-xl dark:shadow-cyan-600 rounded-md md:inline-block dark:text-white">
              <img src={"./src/img/M.png"} alt="" />
              <section>
                <h1 className="text-center text-bold">{project.title}</h1>
                <p className=" hidden md:inline-block">{project.text}</p>
              </section>
            </section>
            
            </SwiperSlide>
        )
      }
      
    </Swiper>
  </motion.div>
  );
};

export default Portfolio;
