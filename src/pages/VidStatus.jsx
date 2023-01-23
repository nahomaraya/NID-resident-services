import {React, useState, useEffect} from "react";
import {  useLocation, useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";

const VidStatus = (props) => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(()=> {
         setIsLoading(false);
      }, 5000);
    
      return () => {
        clearTimeout(timer);
      }
    }, [])
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
  ;
    const types = location.state.request.types;
    console.log(types);
    // location.state.request.request.cardType = "UIN";
    // console.log(location.state);
    //  createPost(location.state)
    //     .then(response => {
    //         console.log("sucess");
    //     //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
    //   });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const handleClick = (type) => {
        location.state.request.request.authType = type
        console.log(location.state.request.request.authType)
        createPost(location.state)
         .then(response => {
             console.log("sucess");
           // setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
           
       });
    
      }
    return(
      <>
        {isLoading? <LoadingScreen/> : 
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
        <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
        <h2 className="text-center font-bold text-white">Chosse VID type to revoke</h2>
        <div className="flex flex-wrap justify-center items-center">
        { types.map(type => (
         <div className="w-full items-center sm:w-1/4 px-4 py-4">
         <div className="font-mono bg-[#50848f] cursor-pointer rounded-full shadow-md text-white text-center py-4 hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg ">
         <a onClick={() => handleClick(type)}>{type}</a>
       
         </div>
       </div>
      ))}
        
        </div>
      </div>
      </div>
      </div>
}
</>
    );

}
export default VidStatus;