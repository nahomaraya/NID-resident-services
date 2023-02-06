import React, {useCallback, useState, useEffect} from "react";
import {FormattedMessage} from "react-intl";
import DropdownSelector from "../Dropdown/DropdownSelector";
import { dummyData } from "..";
import Description from "../Description/Description";
import Spinner from "../Spinner/Spinner";
import { useMediaQuery } from 'react-responsive'
import { load } from "@syncfusion/ej2-react-grids";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const InputBar = (props) => {
    const[id, setId] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState({   
  
    });
    
    
    const handleChange = (event) => {
      setId(event.target.value);
     
    }
    
    const handleCallback = (childData) => {
       
         props.setOtp(childData);
    }

    const handleService = (childData) => {
      let result = null;
      
      for (const datum of dummyData) {
        if(datum.name != "services"){
         
          continue
        }
        else{
        result = datum.subMenu.find(subdata => {
            if (childData === subdata.name) {
                
                return subdata;
            }
        });

        if (result)
            break;
      }
     }
    
     setService(result);
    
  
     
      
    }
    
    const handleGoState = useCallback(event => {
     
      // props.setService(service)
      // props.setRequest(service);
      props.onCardChange(event.target.value)
      }, [props.onCardChange]
    )


    const initalService = () => {
      const serviceName = props.service;
      let result = null;
      // const serv = dummyData.find(item => item.subItems.some(subItem => subItem.name == 'track-request-status'));
      for (const datum of dummyData) {
        if(datum.name != "services"){
         
          continue
        }
        else{
        result = datum.subMenu.find(subdata => {
            if (serviceName === subdata.name) {
                
                return subdata;
            }
        });

        if (result)
            break;
      }
    }
   
    setService(result);
}
    
    
    useEffect(() => {
     initalService();
  

    }, [])
   


    useEffect(() => {
     
      props.setID(id)
    }, [id])

    useEffect(() => {
   
      console.log(service)
      props.setService(service)
   
      // const toRef = setTimeout(() => {
      //   setLoading(true);
      //   clearTimeout(toRef);
      //   // it is good practice to clear the timeout (but I am not sure why)
      // }, 1000);
    }, [service])
  

   
    
    // useEffect(() => {
     
    //   if (loading) {
    //     const toRef = setTimeout(() => {
    //       setLoading(false);
    //       clearTimeout(toRef);
    //   }, 1000);
    // }
    // }, [!loading]);
   
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    }); 
  return (
  <>
        
      
        <div  class={isDesktopOrLaptop?" md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-50 p-20": " md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-30 w-70 p:10"}>
        {loading? 
        
        <Spinner/>
         : 
         <>
          <div  class="flex flex-col">
                        <span> <h1 class="text-center font-bold text-[#005471] lg:text-3xl text-xl">Please Enter Your Fayda Number</h1></span>
                        
                    </div>
          <form  className="p-15 " onSubmit={handleGoState}>
         
       
                <div class="flex items-center justify-start p-3 mr-auto  lg:ml-10  mb-2">
                     {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                     </div> */}
                     
                    <h6 className="font-normal text-black lg:text-2xl text-base mr-4">{service.input == "RID"? <FormattedMessage id={"enter-rid"}/>: <FormattedMessage id={"enter-uin"}/>}</h6> 
                   <input class=" block md:w-full lg:w-1/2 p-3 md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" value={id} placeholder={service.input}  onChange={handleChange}
                  maxLength="12" minLength="12" required/>
                </div>
                <div className="flex justify-start items-center p-3 mr-auto lg:ml-10  md:p-2">
                  <h6 className="font-normal text-black  lg:text-2xl text-base mr-4"><FormattedMessage id={"select-OTP-method"}/>: </h6>
                  <DropdownSelector options={['send-phone', 'send-email']} onCallback = {handleCallback}/>
                </div> 
       
                <div class="flex justify-start items-center p-1 lg:mt-4 md:mt-2 mr-auto lg:ml-10 md:ml-0">
                    <button type="submit"  class="inline-block px-7 py-3  bg-[#005471] text-white font-small text-base lg:w-1/4 md:w-full  leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#214b60] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="go"/></button>
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
          </>
         }
        </div>
   
    
  
 
    
   
  </>
  );

}
export default InputBar;