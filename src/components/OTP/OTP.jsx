
import React, {useState, Fragment, useCallback} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
import OTPInput from "./OTPInput";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { Radio } from "@material-tailwind/react";

const OTP = (props) => {

    const [phone, setPhone] = useState(true);
    const [otpResent, setOTPResent] = useState(false);
    const [verify, setverify] = useState(false);
 
    const handleOpen = () => setOTPResent(!otpResent);
  

    const navigate = useNavigate();
    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };
    
    const handleVerify = () => {
        setverify(!verify);
        
    }
    return(
   <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
                <div class="py-3 rounded text-center">
                    {
                        phone? 
                    <div class="flex flex-col mt-4">
                        <span> <h1 class="text-center font-bold text-white text-2xl">Enter the OTP you received at</h1></span>
                        <span class="font-bold text-white text-2xl">+251 9 ******3 </span>
                    </div>:
                    <div class="flex flex-col mt-4">
                        <span> <h1 class="text-center font-bold text-white text-2xl">Enter the OTP you received at</h1></span>
                        <span class="font-bold text-white text-2xl"> na*******@gmail.com</span>
                    </div>
                    }
                     
                     <div class="flex justify-center text-center">
                        <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <Radio checked={() => setPhone(true)} onChange={() => setPhone(true)} value={true} name="radio-buttons"  color="success"/>
                          <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Send via phone</label>
                       </div>
                        <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <Radio checked={() => setPhone(false)} onChange={() => setPhone(false)} value={false} name="radio-buttons"  color="success"/>
                       
                        <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Send via email</label>
                       </div>
                    </div>
                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                       <OTPInput/>
      
                      </div>
                      
                      <div class="flex justify-center text-center mt-4 gap-6">
                      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                      <button type="submit" onClick={handleVerify} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Verify</button>
                      <button type="button" onClick={handleOpen} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Resend OTP</button>
                      {/* {
                        phone? <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Send via email</button>:
                        <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Send via phone</button>
                      } */}
                     
                      
                      </div>
             
                    <Dialog open={otpResent} handler={handleOpen}  animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">OTP Code Resent</h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">{ phone ? `Check for an SMS`: `Check your email`}</p>
                            <button onClick={handleOpen} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full md:py-3 lg:py-4 xl:py-5">
                                Close
                            </button>
                        </div>
                    </div>
                    </Dialog>
                
                    <Dialog open={verify} handler={handleVerify}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">Verification Complete</h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">{props.action}?</p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={navigateHome} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                                Yes
                            </button>
                            <button onClick={handleVerify} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                                No
                            </button>
                            </div>
                        </div>
                    </div>
                    </Dialog>
                 
                </div>
            </div>
        
        </div>
 
    );
}

export default OTP;