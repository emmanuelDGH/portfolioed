import "./About.css"; 
import { useState } from "react";
import { motion } from "framer-motion" 


const About = () => {

let [open,setOpen] = useState(false);

return (
  
  <motion.div layout transition={{layout:{duration:0.5}}} data-open={open}className="aboutButton" onClick={()=>setOpen(!open)}>
  
     {open? (
     
        <motion.div layout="position"key= {open} className="aboutContainer">
      
            <motion.div
            className="aboutContainer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay:0.3,
              duration: 0.3,
              scale: {type: "spring"}
            }}>
              <img src= {require("../Data/vietnam.jpg")} className= "aboutImg"/>
            </motion.div>
            <motion.div 
            className="text"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
              duration:1,
              delay:0.3}}>
            <p>
            Hi! I am Emmanuel.
            After studying Industrial Design and working in the 3D industry for a couple of years, I decided to start developing digital products.
            I enjoy designing and making things work. Who doesn't enjoy the feeling of solving a problem, right?
            <br/>
            When I am not coding, I like to visit local coffees, exercise, and enjoy nature. I believe being in contact with nature keeps our minds healthy.
            <br/>
            I enjoy adventures and challenges. That's me and my friend Nico in the picture. we didn't know how to drive a motorbike when we got to Vietnam. 
            Yet that didn't stop us from buying one and riding 1500 miles across the country. It was one of the best experiences I had.
            <br/>
            </p>
            </motion.div>
          </motion.div>
     ):(
      <motion.div layout="position"
      initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
              duration:0.7,
              delay:0.2}}
      >
        About</motion.div>
      )}
        </motion.div>

)}


export default About