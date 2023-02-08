
import React, {useCallback, useState, useEffect} from "react";
import {Routes, Route, useNavigate, Navigate, useLocation} from 'react-router-dom'
import { dummyData } from "..";
import {FormattedMessage} from "react-intl";

import { useScrollTo } from "react-use-window-scroll"
import { useTransition } from "react-transition-state";


const ServiceList = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [onOff, setOnOff] = useState(true)
    // const {stage, shouldMount} = useTransition(onOff, 300)
    const scrollTo = useScrollTo();
      const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true
  });
  
    const navigateService = (service) =>
    {
      
        console.log(service);
        toggle(false);
        navigate('/service',{state:{service}});
    };
    useEffect(() => {
        console.log("to the top");
        scrollTo(0, 0);
        toggle(true);
      }, [])
   
  
    
    return(
        <>
       
       <div class="bg-service bg-cover bg-center ">
        <div class="container mt-12 mx-auto px-4 pt-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 ">

    {dummyData.map((item, index) => (
            item.subMenu && 
            item.subMenu.map((subitem, index) => (
              isMounted && (  
           <div className={`transition duration-1000${
            status === "preEnter" || status === "exiting"
              ? " transform scale-90 opacity-0 my-2  p-3 pl-5  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              : " my-2  p-3 pl-5  w-full lg:my-4 lg:px-4 lg:w-1/3"
          }`}  > 
            <div >

            <article onClick={()=>navigateService(subitem.name)} class=" scale-90 border-2 border-[#f6f6f6] bg-white hover:-translate-y-1 transform transition duration-500  hover:scale-110 hover:bg-green-500 hover:cursor-pointer  overflow-hidden rounded-xl shadow-lg">

                <a onClick={()=>navigateService(subitem.name)}>
                    <img alt="placeholder" class="block h-40 w-40 pl-4 ml-4" src={require('../../assets/images/' + subitem.image)}/>
                </a>

                <header class="flex items-center justify-between leading-tight  p-2 ml-8 md:p-4">
                    <h1 class="text-xl text-[#365c66] font-bold">
                      
                        <FormattedMessage id={subitem.name}/>
                        <hr />
                        <p class="text-[#17242a]  text-xl font-normal">
                      <FormattedMessage id ={subitem.instruction} />
                        </p>
                       
                    </h1>
                  
                </header>

             
              
                {/* <footer class="flex items-center justify-between leading-none p-2  md:p-4">
                  
                      
                        <p class="ml-2 h-15 text-[#17242a] text-sm">
                      <FormattedMessage id ={subitem.instruction} />
                        </p>
                    
                   
                </footer> */}

            </article>
       
        </div>  
        </div>  
             ) ))
            ))}
        

    </div>
</div>
</div>
        </>
    );


}
export default ServiceList;