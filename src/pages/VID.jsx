import {React, useState, useEffect} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";
import {FormattedMessage} from "react-intl";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const VID = (props) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [vidType, setVidType] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
   
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
    const types = location.state.request.types;
    console.log(types);
    // location.state.request.request.cardType = "UIN";
    // console.log(location.state);
    //  createPost(location.state)
    //     .then(response => {
    //         console.log("sucess");
    //     //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
    //   });
    
    const navigatePage = () => {
      // 👇️ navigate to /
      //  createPost(request)
      //   .then(response => {
         
      //     setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
      // });
      //navigate to path here
      
      navigate('/vidconfirm',{state:{vidType}});
      
   
    };
    
    
    const handleClick = (type) => {
      setOpen(!open);
      setVidType(type);
      console.log(type);
  
    }
    const handlePost = (type) => {
      setOpen(false);
      console.log(type);
      location.state.request.request.authType = type
      console.log(location.state.request.request.authType);
      navigatePage();
      createPost(location.state)
       .then(response => {
           setIsLoading(true);
           console.log("sucess");
         // setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         navigatePage();
         
     });
    }
    
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
      useEffect(() => {
        if(location.state!=null){
        const timer = setTimeout(()=> {
           setIsLoading(false);
        }, 5000);
      
        return () => {
          clearTimeout(timer);
        }}
        else{
          navigate('/');
        }
      }, [])
    return(
      <>
        {isLoading? <LoadingScreen/> : 
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
         <div  class=" bg-[#cadadd] flex h-full">
        <div class="md:container  mx-auto bg-welcome h-screen w-full bg-cover bg-center rounded-lg p-14">
        <h2 className="text-center font-bold text-white">Chosse VID type to generate</h2>
      
        <div className="flex flex-wrap px-6 py-6">
      { types.map(type => (
        <div class="flex flex-col items-center justify-center p-3 mb-5">
       
     <button class="inline-block lg:mr-10 w-full px-4 py-4 mb-4 bg-[#072c3f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#083247] hover:shadow-lg  transition duration-150 ease-in-out" onClick={() => {handleClick(type)}}>{type}</button>  
     <h6 className="font-bold text-white  lg:text-xl md:text-xs mr-4">THis is a {type} VID</h6> 
        </div>
      ))}
    </div>
      </div>
      </div>
      </div>
}
<Dialog open={open} handler={handleClick}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">Generate VID</h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">Are you sure you want to generate a {vidType} VID?</p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={()=>handlePost(vidType)} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                            <button onClick={()=>handleClick(vidType)} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    </Dialog>
</>
    );

}
export default VID;