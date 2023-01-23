import {React, useState, useEffect} from "react";
import {  useLocation, useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";

const UpdateUIN = (props) => {
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
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
    return(
        <>
        {isLoading? <LoadingScreen/> : 
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
    <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
            <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Please change relevant demographic info</h1>
            <div class="flex items-center justify-center">
                   {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div> */}
                 
                   <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mobile"  onChange={handleMobileChange}
        value={mobile} required/>
               <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email"  onChange={handleEmailChange}
        value={email} required/>
                   
            </div>
            <div class="justify-center items-center  mt-3">
                <button type="submit" class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Update</button>
            </div>

        </div>
    </div>
    </div>
}
</>
    );

}
export default UpdateUIN;