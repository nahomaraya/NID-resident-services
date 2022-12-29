import React from "react";
import {  Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "../components";
import { Button } from "@material-tailwind/react";
import '../App.css';

const Home = () => {

    return(
      <div id="page">
       <div className='bg-welcome h-screen w-full bg-cover bg-center p-20'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-2 text-4xl  text-white font-bold text-center">
                    Welcome to National ID Resident Services
                </h1>
                <p className="text-lg text-center text-white">
                    Select your prefered  language
                </p>
                <div className="flex w-max gap-6 mt-4">
                   <Button size="sm" ripple={true}>Amharic</Button>
                  <Button size="sm" ripple={true}>English</Button>
              </div>
            </div>
        </div>
      </div>
    );
}
export default Home;