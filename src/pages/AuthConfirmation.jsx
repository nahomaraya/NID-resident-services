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

const AuthConfimation = (props) => {

    const location = useLocation();
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
 

    const navigate = useNavigate();
    return(
      <>
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full bg-service bg-cover bg-center": "h-full bg-service bg-cover bg-center"}>
           <div class={isDesktopOrLaptop?"md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-50 p-20": "md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-70 p-10"}>
           {location.state.authAction? 
    <>
     <h1 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl">Your {location.state.authType} is successfully locked</h1>
     <h2 className="text-center font-normal text-gray-500  lg:text-2xl md:text-sm p-4">Your will not be able to authenticate using {location.state.authType}  thus preventing potential misuse</h2>
     </>
     :
     <>
     <h1 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl">Your {location.state.authType} is successfully unlocked</h1>
     <h2 className="text-center font-normal text-gray-500  lg:text-2xl md:text-sm p-4">Your will able to authenticate using {location.state.authType}  from now  on</h2>
     </>
  }
          
            <div class="flex justify-center items-center lg:mt-24 md:mt-8 p-1 gap-10 ">
                  <button type="submit" onClick={() => navigate('/')} class="w-full inline-block  py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="w-full inline-block py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
              </div>
                  
                  
          </div>
          </div>
      </>
    );
  }

  export default AuthConfimation; 