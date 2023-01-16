import React from "react";

const TrackStatus = (props) => {
    return(
        <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
        <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Status of UIN Generation</h1>
         <p className="text-center font-bold text-white  text-base">Your UIN is {status}</p>


        </div>
        </div>
    );

}
export default TrackStatus;