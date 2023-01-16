
import React, {useContext, useState, useEffect} from "react";
import { Routes, Route, Router, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { DynamicItem, Sidebar, dummyData } from "./components";

import "./App.css";
import Home from "./pages/Home";
import {IntlProvider} from "react-intl";
import { messages } from "./il8n/messages";
import { LOCALES } from "./il8n/locales";

import { LanguageContext } from "./providers/LangProvider";
import Header from "./components/Header/Header";
import Sidebarr from "./components/Sidebarr/SIdebarr";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import LoadingScreen from "./components/LoadingScreen/Loading";







function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(()=> {
       setIsLoading(false);
    }, 5000);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
 
  const [language, setLanguage] = useState(LOCALES.ENGLISH);
  const value = { language, setLanguage };
  let loadingGif = require("./assets/fingerprint.gif");
  return (

    <LanguageContext.Provider value={value}> 
  <IntlProvider
    messages={messages[language]}
    locale={language}
    defaultLocale={LOCALES.ENGLISH}
  > 
  
  
     {isLoading?  <LoadingScreen/>:
    
           

    
      <>
       {isDesktopOrLaptop &&  <Navigation />}
            {isTabletOrMobile &&  <Sidebarr /> }
       <Routes>
          <Route path="/" element={<Home/>} />
          
          {dummyData &&
            dummyData.map((item, index) => (
            item.subMenu? 
              item.subMenu.map((subitem, index) => (
                <Route
                  key={index}
                  path={subitem.path}
                  element={<DynamicItem name={subitem.name} inst={subitem.instruction} input={subitem.input} action={subitem.action} apiId={subitem.apiID}/>}
                />
                
              )):
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem name={item.name} inst={item.instruction} input={item.input} action={item.action}/>}
              />
            
            
            
              
              
               
             
            ))}
        </Routes>
        <Footer/>
      </> 
    
    
    }

        
   
    
    
   
    </IntlProvider>
    </LanguageContext.Provider>
  
  
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}


export default App;
