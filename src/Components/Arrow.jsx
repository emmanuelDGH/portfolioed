import { useState } from 'react';
import { motion } from "framer-motion"
import "../App.css"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Arrow = () => {
    
    return (
   
    <motion.div className="arrow" initial={{opacity:0}} animate={{opacity:[0,1,0], scale:[1,1,1.2,1,1,1.2,1,1]}} transition={{duration:5}}  >
        {<KeyboardDoubleArrowDownIcon  sx ={{pb:4,pt:3,fontSize:65}}/>}
    </motion.div>
    
  )
}

export default Arrow

