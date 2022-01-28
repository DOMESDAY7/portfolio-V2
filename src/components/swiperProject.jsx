import React from 'react';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const RenderModalText = (props)=>{
    return(
        <section className='bg-white rounded-lg  shadow-lg'>
            {this.props.text}
        </section>
    )
}
const Swiperproject = () => {
    const [projects, setprojects] = useState([]);
    const [modalText, setmodalText] = useState("");
    useEffect(() => {
        fetch("http://localhost/apiCV/index.php?q=project")
          .then((resp) => resp.json())
          .then((data) => setprojects(data))
      }, []);
      const renderProject = projects.map((project)=>
           <SwiperSlide className='border p-5 flex flex-col justify-center items-center'>
               <section>
                   <section className='shadow-inner p-10 rounded-full'>
                       <img src={project.imgLink} alt={"logo de "+project.name} className='w-96'/></section>
                   <h5 className='text-center titleProject' >{project.name}</h5>
               </section>
          </SwiperSlide>
      )
      
    return (
        <Swiper
        direction='vertical'
        className='flex justify-center items-center h-screen'
        // onSlideChange={console.log("test")}
        >
            {renderProject}
            <RenderModalText text={modalText}/>
        </Swiper>
    );
}

export default Swiperproject;
