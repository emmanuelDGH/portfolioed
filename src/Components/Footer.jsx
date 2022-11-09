import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react';
import "./Footer.css"; 


const Footer = () => {
  let [copied,setCopied] = useState(false);
  
  function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }
  function emailClick(){
    navigator.clipboard.writeText("emmanuel.dacal@gmail.com")
    setCopied(!copied)
    }
  return (
    <div className="footer">
        <motion.div animate={{ opacity: [0,1,1,1,1], scale: [0.5,1,1,1,1], y:[30,0,0,0,0]}}
          transition={{delay:2,duration:2}} className= "iconContainer">
           <GitHubIcon className="footer-icon" onClick={()=>openInNewTab("https://github.com/emmanuelDGH")}sx ={{pb:4,pt:3,fontSize:55}}/>
            <LinkedInIcon className="footer-icon" onClick={()=>openInNewTab("https://www.linkedin.com/in/emmanuel-dacal-langhoff/")} sx ={{pb:4,pt:3,fontSize:55}}/>
            <AlternateEmailRoundedIcon className="footer-icon" onClick={emailClick} sx ={{pb:4,pt:3,fontSize:55}}/>
        </motion.div>
       <AnimatePresence initial={false}>
         <motion.div className="footer-copy-sign"
          key={copied}
          animate={{ opacity: [0,1,1,1,0], scale: [0.8,1,1,1,1], y:[20,0,0,0,0]}}
          transition={{duration:1.5}}>
             <div className="footer-copy-sign-text">email copied to clipboad!</div>
          </motion.div>
          </AnimatePresence>
        
    </div>
  )
}

export default Footer