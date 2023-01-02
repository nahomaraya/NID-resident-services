import React , {useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {IntlProvider} from "react-intl";
import ReactDOM from "react-dom/client";
import App from "./App";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </React.StrictMode>
);
