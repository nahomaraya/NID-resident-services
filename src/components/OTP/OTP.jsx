import React, {useState, Fragment} from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

const OTP = () => {
    const [phone, setPhone] = useState(true);
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
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
                        <span class="font-bold text-white text-2xl">na*******@gmail.com</span>
                    </div>
                    }
                     
                      
                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                    <OTPInput value={""} autoFocus OTPLength={6} otpType="number" disabled={false} secure/>
      
                      </div>
                      
                      <div class="flex justify-center text-center mt-4 gap-6">
                      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                      <button type="button" onClick={handleOpen} class="inline-block px-7 py-3 bg-blue-600 text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Resend OTP</button>
                      {
                        phone? <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3 bg-blue-600 text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send via email</button>:
                        <button type="button" onClick={() => setPhone(!phone)} class="inline-block px-7 py-3 bg-blue-600 text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send via phone</button>
                      }
                      
                      </div>
                      <Fragment>
                      <Dialog open={open} handler={handleOpen}>
                          <DialogHeader>  OTP Code Resent</DialogHeader>
                         <DialogBody divider>
                              Please check your phone or email
                             </DialogBody>
                         <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
                        <Button variant="gradient" color="green" onClick={handleOpen}>
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