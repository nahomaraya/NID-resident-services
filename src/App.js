
import React, {useContext, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home";
import {IntlProvider} from "react-intl";
import { messages } from "./il8n/messages";
import { LOCALES } from "./il8n/locales";

import { LanguageContext } from "./providers/LangProvider";



function App() {

 
  const [language, setLanguage] = useState(LOCALES.ENGLISH);
  const value = { language, setLanguage };
  return (

    <LanguageContext.Provider value={value}> 
  <IntlProvider
    messages={messages[language]}
    locale={language}
    defaultLocale={LOCALES.ENGLISH}
  > 
    <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem name={item.name} inst={item.instruction} input={item.input}/>}
              />
            ))}
        </Routes>
      </Sidebar>
     
    </div>
    </IntlProvider>
    </LanguageContext.Provider>
  
  
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}


export default App;
