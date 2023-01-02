import React, { createContext, useState } from "react";
import { LOCALES } from "../il8n/locales";

export const  LanguageContext = React.createContext({
    language: LOCALES.ENGLISH,
    setLanguage: () => {}
  });
