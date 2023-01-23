import React, {useCallback, useState, useEffect} from "react";
import {FormattedMessage} from "react-intl";
import DropdownSelector from "../Dropdown/DropdownSelector";
import { dummyData } from "..";
import Description from "../Description/Description";


const InputBar = (props) => {
    const[id, setId] = useState('');
    // const [input, setInput] = useState('');
    // const [apiId, setApiId] = useState('');
    const [otp, setOtp] = useState('');
    const [service, setService] = useState({   
      id: 2,
      name: "track-request-status",
      instruction: "track-request-status-inst",
      path: "trs",
      input: "RID",
      otpReq: false,
      action: "track-request-status-action",
      apiID: "mosip.resident.checkstatus"
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
      }, [props.onCardChange])


      useEffect(() => {
      const serviceName = 'track-request-status';
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
    
   
    
    }, [])
    useEffect(() => {
     
      props.setID(id)
    }, [id])
    useEffect(() => {
     
      props.setService(service)
    }, [service])
    
    
  return (
  <>
    <div class=" bg-[#184e66] flex">
      <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
        <form onSubmit={handleGoState}>
          
          <div className="flex justify-center items-center p-2"><h6 className="text-center font-bold text-white  lg:text-2xl md:text-xs mr-4"><FormattedMessage id={"select-service-type"}/>: </h6><DropdownSelector  options={['track-request-status','update-demographic-data', 'lock-auth-type', 'unlock-auth-type', 'download-eUIN', 'reprint-uin', 'view-trans-hist', 'generate-virtual-id', 'revoke-virtual-id']} onCallback = {handleService}/></div> 
            <div className="flex justify-center items-center p-2"><h6 className="text-center font-bold text-white  lg:text-xl md:text-xs mr-4"><FormattedMessage id={"select-OTP-method"}/>: </h6><DropdownSelector  options={['send-phone', 'send-email']} onCallback = {handleCallback}/></div> 
          
         
              {/* <h1 className="text-center font-bold text-white  lg:text-4xl md:text-2xl p-4"><FormattedMessage id={service.name}/></h1> */}
              {/* <p className="text-center font-bold text-white  text-base p-4"><FormattedMessage id={`page-inst-${service.input}`}/></p>
             */}
              <div class="flex items-center justify-center p-3">
                   {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div> */}
                 <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={id} placeholder={service.input}  onChange={handleChange}
                 required/>
              </div>
              <div class="justify-center items-center p-1">
                  <button type="submit"  class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id="go"/></button>
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
    <Description inst={service.instruction}/>
  </>
  );

}
export default InputBar;