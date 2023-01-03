import React , {useCallback, useContext }from "react";
import {FormattedMessage} from "react-intl";
import {  Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "../components";
import { Button } from "@material-tailwind/react";
import '../App.css';

import { LOCALES } from "../il8n/locales";
import { LanguageContext } from "../providers/LangProvider";

const Home = (props) => {
    // const handlelangChange = useCallback(event => {
    //     props.onlangChange(event.target.value)
    //   }, [props.onlangChange])
    
    const { language, setLanguage } = useContext(LanguageContext);
    return(
     
       <div className='bg-welcome flex items-center justify-center h-screen w-full bg-cover bg-center p-20'>
            <div className="flex flex-col items-center justify-center transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <h1 className="mb-2 text-5xl  text-white font-bold text-center place-content-center">
                    
                    <FormattedMessage id="home.welcome-to"
                                     />
                </h1>
                <h2 className="text-lg text-center text-white place-content-center">
                   
                    <FormattedMessage id="home.select language"
                                    />
                </h2>
                <div className="flex w-max gap-5 mt-4 place-content-center">
                <button type="button" onClick={() => setLanguage(LOCALES.ENGLISH)} class="inline-block  px-7 py-3 bg-blue-600 text-white font-large text-4xl font-mono leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">English</button>
                {/* <button type="button" onClick={() => setLanguage(LOCALES.FRENCH)} class="inline-block  px-7 py-3 bg-purple-600 text-white font-large text-4xl font-mono leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Français</button> */}
                <button type="button" onClick={() => setLanguage(LOCALES.AMHARIC)} class="inline-block  px-7 py-3 bg-purple-600 text-white font-large text-4xl font-mono leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">አማርኛ</button>
              </div>
            </div>
           
        </div>
   
    );
}
export default Home;