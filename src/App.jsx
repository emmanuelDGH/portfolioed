import Scene from "./Components/Scene";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Cursor from "./Components/Cursor";
import Arrow from "./Components/Arrow";
import { useState } from "react";
import { motion } from "framer-motion"
import "./App.css"; 



function App() {
  const [loading,setLoading]=useState(false)
  let screenWidth = window.innerWidth;
  

  setTimeout(()=>{setLoading(true)},4000)
  


  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}
          transition={{duration:2,delay:0.5}} className="scene">
      <Scene/>
      <Cursor/>
      </motion.div>
      <Footer/>
      {loading&&(
      <>
        <Arrow/>
        <About/>
        <Projects/>
        <div className="blank"></div>
      </>
      )}
    </>
   
  );
}

export default App;


