import React from "react";
import "../../App.css";

const InputBar = (props) => {
    return (
        <div class=" bg-gray-100 flex">
        <div class="md:container mx-auto bg-[#255568] rounded-lg p-14">
            <form>
                <h1 class="text-center font-bold text-white text-4xl">{props.name}</h1>
                    <p class="mx-auto text-slate-200 font-normal text-sm my-6 max-w-lg">{props.inst}</p>
                   
                    <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                        <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder={props.input} />
                        
                        <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                        
                            <button class="bg-[#124558] text-white text-base rounded-lg px-4 py-2 font-thin">GO</button>
                        </div>
                    </div>
            </form>
           
        </div>
    </div>
    );
}
export default InputBar;