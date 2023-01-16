import React from "react";

const downloadLink = ()=>{


}


const Download = (props) => {
    return(
        <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
            <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Download e-UIN</h1>
            <p className="text-center font-bold text-white  text-base">Click the link below to download your E-UIN</p>
            <div class="justify-center items-center  mt-3">
                <button type="submit" onClick={downloadLink} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Download</button>
            </div>

        </div>
        </div>
    );

}
export default Download;