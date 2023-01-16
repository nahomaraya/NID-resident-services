import React, {useCallback, useState} from "react";
import {FormattedMessage} from "react-intl";
import DropdownSelector from "../Dropdown/DropdownSelector";
import OTP from "../OTP/OTP";


const InputBar = (props) => {
    const [id, setID] = useState('');
 
    const [otp, setOtp] = useState('');
    const handleCallback = (childData) => {
        if(props.otpReq)
         props.setOtp(childData);

    }
    
    const handleGoState = useCallback(event => {
      
        props.setIDtype('UIN');
        //send req otp here?
        props.onCardChange(event.target.value)
      }, [props.onCardChange])

    const handleChange = (event) => {
        setID(event.target.value);
        
        props.setID(id);
        
      
      
        
      };

      const handleClick = () => {
        // 👇 "message" stores input field value
        //send post request here
        console.log(id);
      };

   
    
    return (
        <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
        <form >
            <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl"><FormattedMessage id={props.name}/></h1>
            <p className="text-center font-bold text-white  text-base"><FormattedMessage id={`page-inst-${props.input}`}/></p>
            <DropdownSelector onCallback = {handleCallback}/>
            <div class="flex items-center justify-center">
                   {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div> */}
                 
                   <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.input}  onChange={handleChange}
        value={id} required/>
                   
            </div>
                <div class="justify-center items-center  mt-3">
                <button type="submit" onClick={handleGoState} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="go"/></button>
                </div>
                    {/* <div class="sm:flex w-5/6 ml-auto  items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                        <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder={props.input} />
                        
                        <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                        
                            <button onClick={handleGoState} class="bg-[#50848f] text-white text-base rounded-lg px-4 py-2 font-thin 
                            hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none 
                            focus:ring-0 active:bg-[#346484] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="go"/></button>
                        </div>
                    </div> */}
            </form>
           
        </div>
        
    </div>
    
    );
}
export default InputBar;