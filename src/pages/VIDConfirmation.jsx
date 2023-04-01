import {React, useState, useEffect} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { createPost } from "../services/ResidentServices";
import LoadingScreen from "../components/LoadingScreen/Loading";
import {FormattedMessage} from "react-intl";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const VIDConfimation = (props) => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
    const types = location.state.request.types;
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  

  
  const handlePost = () => {
 
    location.state.request.request.vidType = "TEMPORARY";
    console.log(location.state.request.request.vidType);
 
    createPost(location.state)
     .then(response => {
         setIsLoading(true);
         console.log("sucess");
       // setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
      
       
   });
  }

  useEffect(() => {
    if(location.state!=null){
    const timer = setTimeout(()=> {
       setIsLoading(false);
    }, 5000);
    handlePost()
    return () => {
      clearTimeout(timer);
    }}
    else{
      navigate('/');
    }
  }, [])
  


    return(
      <>
       <div id="page" className={isDesktopOrLaptop? "pt-16 h-full bg-service bg-cover bg-center": "h-full bg-service bg-cover bg-center"}>
           <div class={isDesktopOrLaptop?"md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-50 p-20": "md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-70 p-10"}>
          
            <h1 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl"><FormattedMessage id={"tempo-vid-gen"}/></h1>
            <h2 className="text-center font-normal text-gray-500  lg:text-2xl md:text-sm p-4"><FormattedMessage id={"notification-sent"}/></h2>
             
            
            <div class="flex justify-center items-center lg:mt-24 md:mt-16 p-1 gap-10 ">
            <button type="submit" onClick={() => navigate('/')} class="w-full inline-block  py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="back-to-home"/></button>
                  <button type="submit" onClick={() => navigate('/services')} class="w-full inline-block py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="back-to-services"/></button>
       
                 </div>
                  
                  
          </div>
          </div>
      
      </>
    );
  }

  export default VIDConfimation; 