import "./Projects.css"; 
import { useEffect, useState, useRef} from "react";
import { motion } from "framer-motion"
import projects from "../Data/Projects" 



const Projects = () => {

    const [open,setOpen] = useState(false);
    const [width,setWidth] = useState(0);
    const carousel = useRef();

  

    useEffect(()=>{ 
    carousel.current&&setWidth(carousel.current.scrollWidth-carousel.current. offsetWidth+250)
    },[open])

  return (
    <motion.div >
      <motion.div className="projectsButton" data-open={open} onClick={()=>setOpen(!open)} key={open} initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
              duration:0.7,
              delay:0.2}}>
          Projects
      </motion.div>
      
      <motion.div layout>
        {open&&(
          <motion.div  key= {open} ref={carousel} className="carousel">
              <motion.div  className="inner-carousel" drag="x" dragConstraints={{right:150, left:-width}}>
                    {projects.map((project,i)=>(
                      <motion.div key={i} className="project"
                      whileHover={{
                        scale:1.5,zIndex:3,
                        transition:{duration:0.5}}}
                        whileTap={{
                          scale:1.2,zIndex:3,
                          transition:{duration:0.5}}}
                      initial={{ opacity: 0, scale: 0.5 }}
                       animate={{ opacity: 1, scale: 1 }}
                        transition={{
                         delay:i* 0.2,
                          duration: 0.3,
                         scale: {type: "spring"}
                        }}
                      >
                        
                      
                        <motion.div whileHover={{
                        borderRadius:0,
                        transition:{duration:0.5}}}
                        whileTap={{
                          borderRadius:0,
                          transition:{duration:0.5}}}  className="project-container">
                        
                          {i !== projects.length-1?(
                            <video className="projects-video" src={project.image}  muted defaultmuted playsinline autoplay="true" loop="true" />
                          ):<></>}
                           <motion.div whileHover={{
                        opacity:0,
                        transition:{duration:0.5}}} 
                        whileTap={{
                          opacity:0,
                          transition:{duration:0.5}}}className="project_img_overlay">
                          <div className="project_img_title">{project.name}</div>
                          <div className="project_img_description">{project.description}</div>
                          </motion.div>
                          
                        </motion.div>

                       

                        
                        
                        
                        
                   
                      
                      </motion.div>
                    ))}
              </motion.div>
          </motion.div>
        )}
      </motion.div>

  

       
     </motion.div>
  )
}

export default Projects