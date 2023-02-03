
import React, {useState, Fragment, useCallback, useEffect} from "react";
import {FormattedMessage} from "react-intl";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import OTPInput from "./OTPInput";
import { useMediaQuery } from 'react-responsive'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { Radio } from "@material-tailwind/react";
import LoadingScreen from "../LoadingScreen/Loading";
import { createPost } from "../../services/ResidentServices";
import { version } from "react-dom";

const OTP = (props) => {
    const [request, setRequest ] = useState({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: '',}});
    const [otpNo, setOtpNo] = useState('');
    const [phone, setPhone] = useState(props.otp=="send-phone");
    const [otpResent, setOTPResent] = useState(false);
    const [verify, setverify] = useState(false);
 
    
    const handleResent = () => {
      setPhone(!phone)
      handleOpen();
    }
    
    const handleOpen = () => setOTPResent(!otpResent);
  

    const navigate = useNavigate();
    const navigatePage = () => {
      // 👇️ navigate to /
      //  createPost(request)
      //   .then(response => {
         
      //     setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
      // });
      //navigate to path here
      
      console.log(props.service.apiID);
      navigate(`/${props.service.apiID}`,{state:{request}});
   
    };
    
    const handleVerify = () => {
     
       console.log(otpNo);
       request.request.otp = otpNo;
       setRequest(request);
    
       setverify(!verify);
        
    }
    useEffect(() => {
      // if(props.id===''){
      //   navigateHome();
      // }
      console.log(props.id);
      console.log(props.service.apiID);
      console.log(props.service.input);
      request.id = props.service.apiID;
      request.version = "1.1.5.6";
      request.requestTime = new Date().toLocaleString();
      request.request.individualId = props.id;
      request.request.individualIdType = props.service.input;
      
    //  request.request.[${props.service.request}] = props.id
      if(props.service.types){
          request.types = props.service.types;
      }
     
      setRequest(request);
    }, []);
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
    
    return(
   
    
      <div class={isDesktopOrLaptop?"md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-50 p-20": "md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-70 p-10"}>
              
                    {
                        phone? 
                    <div class="flex flex-col">
                        <span> <h1 class="text-center font-bold text-[#005471] lg:text-3xl md:text-sm"><FormattedMessage id="enter-otp-phone"/></h1></span>
                        
                    </div>:
                    <div class="flex flex-col">
                        <span> <h1 class="text-center font-bold  text-[#005471] lg:text-3xl md:text-sm"><FormattedMessage id="enter-otp-email"/></h1></span>
                      
                    </div>
                    }
                     
                     <div id="otp" class="flex flex-row justify-center text-center p-8 ">
                       <OTPInput setOtpNo={setOtpNo}/>
      
                      </div>

                     <div class="flex justify-center text-center">
                        
                           { 
                         phone?  <a  class="py-4 ml-2 w-full text-sm font-medium hover:cursor-pointer hover:underline hover:text-[#9cafb8] text-[#005471]" onClick={handleResent}><FormattedMessage id="send-via-email"/></a>:
                        <a class="py-4 ml-2 w-full text-sm font-medium hover:cursor-pointer hover:underline hover:text-[#9cafb8] text-[#005471]" onClick={handleResent}><FormattedMessage id="send-via-phone"/></a>
                      }
                    </div>
                  
                      
                      <div class="flex justify-center text-center gap-6">
                      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                      <button type="submit" onClick={handleVerify} class="lg:w-1/3 md:w-full inline-block px-7 py-3  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg  active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="verify"/></button>
                      <button type="button" onClick={handleOpen} class="lg:w-1/3 md:w-full inline-block px-7 py-3  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg  active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="resend"/></button>
                      {/* {
                        phone? <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Send via email</button>:
                        <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Send via phone</button>
                      } */}
                     
                      
                      </div>
             
                    <Dialog open={otpResent} handler={handleOpen}  animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl"><FormattedMessage id="otp-resent"/></h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">{ phone ? <FormattedMessage id="check-phone"/>: <FormattedMessage id="check-email"/>}</p>
                            <button onClick={handleOpen} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="close"/>
                            </button>
                        </div>
                    </div>
                    </Dialog>
                
                    <Dialog open={verify} handler={handleVerify}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl"><FormattedMessage id="verification-complete"/></h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl"><FormattedMessage id={props.service.action}/>?</p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={navigatePage} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                            <button onClick={handleVerify} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    </Dialog>
                 
               
            </div>
         
    
 
    );
}

export default OTP;