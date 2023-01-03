import { DialogComponent } from '@syncfusion/ej2-react-popups';
import React, {useState, Fragment} from "react";
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

const OTP = () => {
    const [phone, setPhone] = useState(true);
    const [otpResent, setOTPResent] = useState(false);
    const [verify, setverify] = useState(false);
 
    const handleOpen = () => setOTPResent(!otpResent);
    const handleVerify = () => setverify(!verify);

    const navigate = useNavigate();
    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };

    return(
   
  
    <div class=" bg-gray-100 flex">
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
                <Fragment>
                    <Dialog open={otpResent} handler={handleOpen}  
                    animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}>
                        <DialogHeader>  OTP Code Resent</DialogHeader>
                        <DialogBody divider>
                              Please check your phone or email
                             </DialogBody>
                        <DialogFooter>
                          <Button variant="gradient" color="green" onClick={handleOpen}>
                                <span>OK</span>
                          </Button>
                      </DialogFooter>
                    </Dialog>
                  </Fragment>
                  <Fragment>
                    <Dialog open={verify} handler={handleVerify}  animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
                        <DialogHeader> Verification Complete</DialogHeader>
                        <DialogBody divider>
                              Redirecting you to your required service
                        </DialogBody>
                        <DialogFooter>
                          <Button variant="gradient" color="green" onClick={navigateHome}>
                                <span>OK</span>
                          </Button>
                        </DialogFooter>
                    </Dialog>
                  </Fragment> 
                </div>
            </div>
        
        </div>
 
    );
}

export default OTP;