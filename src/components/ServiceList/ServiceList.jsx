
import React, {useCallback, useState, useEffect} from "react";
import {Routes, Route, useNavigate, Navigate, useLocation} from 'react-router-dom'
import { dummyData } from "..";
import {FormattedMessage} from "react-intl";



const ServiceList = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const navigateService = (service) =>
    {
      
        console.log(service);
        navigate('/service',{state:{service}});
    };
   
  
    
    return(
        <>
       
       <div class=" bg-welcome  ">
        <div class="container  mt-12 mx-auto px-4 pt-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 ">

    {dummyData.map((item, index) => (
            item.subMenu && 
            item.subMenu.map((subitem, index) => (
            <div class=" my-1 p-3 pl-5 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article onClick={()=>navigateService(subitem.name)} class="border-2 border-[#47f4c7] bg-[#76b5d4]  hover:bg-[#6aa2be] hover:border-[#6bf6d2] hover:border-2  hover:scale-105 hover:cursor-pointer overflow-hidden rounded-lg shadow-lg">

                <a onClick={()=>navigateService(subitem.name)}>
                    <img alt="Placeholder" class="block h-40 w-full" src={require('../../assets/images/' + subitem.image)}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg text-[#17242a]">
                      
                        <FormattedMessage id={subitem.name}/>
                     
                    </h1>
                   
                </header>

                <footer class="flex items-center justify-between leading-none p-2  md:p-4">
                  
                      
                        <p class="ml-2 h-10 text-[#17242a] text-sm">
                      <FormattedMessage id ={subitem.instruction} />
                        </p>
                    
                   
                </footer>

            </article>
       
        </div>  
            
            ))
            ))}
        

    </div>
</div>
</div>
        </>
    );


}
export default ServiceList;