import React , {useCallback, useContext, useEffect, useState }from "react";
import {FormattedMessage} from "react-intl";
import {  Routes, Route, useLocation } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "../components";
import { Button } from "@material-tailwind/react";
import '../App.css';
// import { useMediaQuery } from 'react-responsive';

import { LOCALES } from "../il8n/locales";
import { LanguageContext } from "../providers/LangProvider";
import Footer from "../components/Footer/Footer";

const Home = (props) => {
    // const handlelangChange = useCallback(event => {
    //     props.onlangChange(event.target.value)
    //   }, [props.onlangChange])
    
  
    const welcome = ["Welcome to National ID Resident Serivces", "እንኳን ወደ ብሔራዊ መታወቂያ ነዋሪ አገልግሎቶች በደህና መጡ"];
    const selectLang = ["Select your prefered language" , "ቋንቋ ይምረጡ"];
    const { language, setLanguage } = useContext(LanguageContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex === welcome.length - 1) {
          console.log("stopping");
          return;
        }
       
        const interval = setInterval(() => {
          const updatedData = currentIndex + 1;
          setCurrentIndex(updatedData);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    return(
     
       <div className='bg-welcome flex items-center justify-center h-screen w-full bg-cover bg-center'>
        
            <div className="flex flex-col items-center transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <h1 className="mb-2 lg:text-5xl md:text-3xl   text-white font-bold text-center">
                    
                    <FormattedMessage id="home.welcome-to"/>
                </h1>
                <p className="lg:text-2xl md:text-3xl text-center text-white">
                   
                    <FormattedMessage id="home.select language"/>
                </p>
              <div className="flex flex-row items-center gap-10 mt-4">
                <button type="button" onClick={() => setLanguage(LOCALES.ENGLISH)} class="inline-block px-7 py-3 bg-[#214b60] text-[#cdd7db] font-large lg:text-xl md:text-sm font-mono leading-tight uppercase rounded-full shadow-md hover:bg-[#072c3f] hover:shadow-lg focus:bg-[#487680] focus:shadow-lg focus:outline-none focus:ring active:shadow-lg transition duration-150 ease-in-out">English</button>
                
                <button type="button" onClick={() => setLanguage(LOCALES.AMHARIC)} class="inline-block px-7 py-3 bg-[#214b60] text-[#cdd7db] font-large lg:text-xl md:text-sm  font-mono leading-tight uppercase rounded-full shadow-md hover:bg-[#072c3f] hover:shadow-lg focus:bg-[#487680] focus:shadow-lg focus:outline-none focus:ring active:shadow-lg transition duration-150 ease-in-out">አማርኛ</button>
                
              </div>
            </div>
          
            </div>
        
      
   
    );
}
export default Home;