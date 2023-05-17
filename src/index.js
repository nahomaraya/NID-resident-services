import React , {useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {IntlProvider} from "react-intl";
import ReactDOM from "react-dom/client";
import App from "./App";


if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    
    <BrowserRouter >
      <App />
    </BrowserRouter>
   

);
