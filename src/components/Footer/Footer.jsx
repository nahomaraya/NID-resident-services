import React from "react";
import "../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
    return (
        <footer className="footer">
           
<div class="bg-gray-100 pt-2 ">
   <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl">
      <div class="mt-2">© Fayda {new Date().getFullYear()} </div>
      <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
         <a href="/#" class="w-6 mx-1">
         <FontAwesomeIcon icon={faPhone} />
         </a>
         <a href="/#" class="w-6 mx-1">
         <FontAwesomeIcon icon={faEnvelope} />
         </a>
         <a href="/#" class="w-6 mx-1">
         <FontAwesomeIcon icon={faFacebook} />
         </a>
        
      </div>
   </div>
</div>
        </footer>
    );
};

export default Footer;