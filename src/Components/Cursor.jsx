import "./Cursor.css"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Cursor = () => {

    const [cursorVariant, setCursorVariant] = useState("default");
    const [mousePosition,setMousePosition]= useState({
        x:0,
        y:0
    });
   
    useEffect(()=>{ 
        const mouseMove = (e) =>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        };
        window.addEventListener("mousemove", mouseMove);
        return()=>{
            window.removeEventListener("mousemove", mouseMove);}
    },[])

    const variants = {
        default: {
            x:mousePosition.x,
            y:mousePosition.y,
            height:0,
            width:0
        },
        inside: {
            x:mousePosition.x-75,
            y:mousePosition.y-75,
            height:200,
            width:200,
            }
    }

    const textEnter = () => setCursorVariant("inside")
    const textLeave = () => setCursorVariant("default")
    
  return (
    <>
    <motion.div onMouseEnter={textEnter} 
    onMouseLeave={textLeave}className="cursorText" data-open={cursorVariant} 
    initial={{opacity:0}} animate={{opacity:1}}
    transition={{duration:1,delay:2}}
    >emmanuel dacal</motion.div>
    <motion.div className='cursor' variants={variants} animate={cursorVariant} transition={{
        type: "spring",
        damping:15
      }}/>
    </>
  )
}

export default Cursor