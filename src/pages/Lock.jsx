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
import { createPost } from "../services/ResidentServices";




const Lock = (props) => {
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState('');
  const [lockRequest, setLockRequest] = useState()
  const navigate = useNavigate();
 
 
  const [isLoading, setIsLoading] = useState(true);
 
  let loadingGif = require("../assets/fingerprint.gif");
  const location = useLocation();
  // location.state.request.request.cardType = "UIN";
  const types = location.state.request.types;
  

  const navigatePage = () => {
   
   
    navigate('/');
 
  };
  
  const handleClick = (type) => {
    setOpen(!open);
    setAuthType(type);
    console.log(type);

  }
  const handlePost = (type) => {
    setOpen(false);
    console.log(type);
    location.state.request.request.authType = type
    console.log(location.state.request.request.authType)
    
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
        <div class=" bg-welcome flex h-full">
      <div class="md:container  mx-auto  rounded-lg p-14 mt-5">
  
        <h2 className="text-center font-bold text-white">Choose auth type to lock</h2>
           
        <div className="flex flex-wrap px-6 py-6">
      { types.map(type => (
        
       
     <button class="inline-block lg:mr-10 w-full px-4 py-4 mb-4 bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#284247] hover:shadow-lg  transition duration-150 ease-in-out" onClick={() => {handleClick(type)}}>{type}</button>  


      ))}
    </div>

    <div class="justify-center items-center p-1">
                  <button type="submit" onClick={() => navigate('/')} class="inline-block lg:mr-10 px-7 py-3  bg-[#84a8b0] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#284247] hover:shadow-lg focus:bg-[#284247] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="inline-block px-7 py-3  bg-[#84a8b0] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#284247] hover:shadow-lg focus:bg-[#284247] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
    </div>

       
        </div>
        </div>
    </div>
}

    <Dialog open={open} handler={handleClick}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">Lock Auth Type</h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">Are you sure you want to lock {authType}?</p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={()=>handlePost(authType)} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                            <button onClick={()=>handleClick(authType)} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    </Dialog>
                
</>
    );

}
export default Lock;