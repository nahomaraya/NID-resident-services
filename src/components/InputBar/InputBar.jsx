import React, {useCallback} from "react";
import {FormattedMessage} from "react-intl";
import "../../App.css";

const InputBar = (props) => {
    const handleGoState = useCallback(event => {
        props.onCardChange(event.target.value)
      }, [props.onCardChange])
    return (
        <div class=" bg-gray-100 flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
            <form >
               <h1 class="text-center font-bold text-white text-4xl"><FormattedMessage id={props.name}/></h1>
                <p class="mx-auto text-slate-200 font-normal text-sm my-6 max-w-lg"><FormattedMessage id={props.inst}/></p>
                <div class="sm:flex w-full ml-auto  items-center relative">
                   {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div> */}
                   <input class="block w-full p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.input} required/>
                   <button type="submit" onClick={handleGoState} class="text-white absolute right-2.5 bottom-2.5 bg-[#50848f] hover:bg-[#3a6c7d] focus:ring-4 focus:outline-none focus:bg-[#3a6c7d] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#50848f] dark:hover:bg-[#3a6c7d] dark:focus:bg-[#3a6c7d]">GO</button>
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