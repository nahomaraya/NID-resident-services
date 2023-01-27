import {React, useState, useEffect} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import {FormattedMessage} from "react-intl";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const UpdateConfimation = (props) => {

    const location = useLocation();
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });


    const navigate = useNavigate();
    return(
      <>
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
          <div  class=" bg-[#cadadd] flex h-full">
          <div class="md:container  mx-auto bg-welcome h-screen w-full bg-cover bg-center rounded-lg p-20">
            <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Your demographic information has been successfully updated</h1>
            <h2 className="text-center font-bold text-white  lg:text-2xl md:text-sm p-4">Notification has been sent to the provided contact details</h2>
             
            
            <div class="justify-center items-center p-1">
                  <button type="submit" onClick={() => navigate('/')} class="inline-block lg:mr-10 px-7 py-3  bg-[#5e90a9] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#2f4854] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="inline-block px-7 py-3  bg-[#5e90a9] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#2f4854] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
              </div>
                  
                  
          </div>
          </div>
        </div>
      </>
    );
  }

  export default UpdateConfimation; 