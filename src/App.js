
import React, {useContext, useState, useEffect} from "react";
import { Routes, Route, Router, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { DynamicItem, Sidebar, dummyData } from "./components";

import "./App.css";
import Home from "./pages/Home";
import Service from "./components/Service/Service";

import {IntlProvider} from "react-intl";
import { messages } from "./il8n/messages";
import { LOCALES } from "./il8n/locales";

import { LanguageContext } from "./providers/LangProvider";
import Header from "./components/Header/Header";
import Sidebarr from "./components/Sidebarr/SIdebarr";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import LoadingScreen from "./components/LoadingScreen/Loading";
import TrackStatus from "./pages/TrackStatus";
import UpdateUIN from "./pages/Update";
import DownloadEUin from "./pages/DownloadEUin";
import Reprint from "./pages/Reprint";
import VID from "./pages/VID";
import Lock from "./pages/Lock";
import Unlock from "./pages/Unlock";
import VidStatus from "./pages/VidStatus";
import AuthLock from "./pages/AuthLock";
import AuthHistory from "./pages/AuthHistory";
import AuthConfimation from "./pages/AuthConfirmation";
import UpdateConfimation from "./pages/UpdateConfirmation";







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
         {/* <Route path='*' element={<NotFound />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/mosip.resident.checkstatus" element={<TrackStatus/>}/>
          <Route path="/mosip.resident.updateuin" element={<UpdateUIN/>}/>
          <Route path="/mosip.resident.authlock" element={<Lock/>}/>
          <Route path="/mosip.resident.authunlock" element={<Unlock/>}/>
          <Route path="/mosip.resident.auth" element={<AuthLock/>}/>
          <Route path="/mosip.resident.euin" element={<DownloadEUin/>}/>
          <Route path="/mosip.resident.reprintuin" element={<Reprint/>}/>
          <Route path="/mosip.resident.vid" element={<VID/>}/>
          <Route path="/mosip.resident.vidstatus" element={<VidStatus/>}/>
          <Route path="/mosip.resident.authhistory" element={<AuthHistory/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/authcomfirm" element={<AuthConfimation/>}/>
          <Route paht="/updateconfirm" element={<UpdateConfimation/>}/>
         
          
          {/* {dummyData &&
            dummyData.map((item, index) => (
            item.subMenu? 
              item.subMenu.map((subitem, index) => (
                <Route
                  key={index}
                  path={subitem.path}
                  element={<DynamicItem name={subitem.name} inst={subitem.instruction} input={subitem.input} action={subitem.action} apiId={subitem.apiID} requestType={subitem.request}/>}
                />
                
              )):
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem name={item.name} inst={item.instruction} input={item.input} action={item.action}/>}
              />
            
            
            
              
              
               
               {dummyData &&
            dummyData.map((item, index) => (
            item.subMenu? 
              item.subMenu.map((subitem, index) => (
                <Route
                  key={index}
                  path={subitem.path}
                  element={<DynamicItem name={subitem.name} inst={subitem.instruction} input={subitem.input} action={subitem.action} apiId={subitem.apiID} requestType={subitem.request}/>}
                />
                
              )):
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem name={item.name} inst={item.instruction} input={item.input} action={item.action}/>}
              />
            
            
            
              
              
               
             
            ))}
            ))} */}
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
