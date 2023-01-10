import React, {useCallback, useState} from "react";
import {FormattedMessage} from "react-intl";
import DropdownSelector from "../Dropdown/DropdownSelector";


const InputBar = (props) => {
  
    const handleGoState = useCallback(event => {

        props.onCardChange(event.target.value)
      }, [props.onCardChange])
    function handleChange(event) {
        props.onOTPChange(event.target.value);
          
      }
    
    return (
        <div class="bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
            <form >
               <h1 class="text-center font-bold text-white text-3xl"><FormattedMessage id={props.name}/></h1>
               <div className="relative inline-block text-left text-sm">
      <select
        className="block appearance-none w-full bg-[#F7F6FB] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        value={props.selectedOption}
        onChange={handleChange}
      >
        <option value="Send OTP via Phone">Send OTP via Phone</option>
        <option value="Send OTP via Email">Send OTP via Email</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
                <div class="sm:flex w-full ml-auto  items-center relative">
                   {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div> */}
                   <input class="block w-full p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.input} required/>
                   
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