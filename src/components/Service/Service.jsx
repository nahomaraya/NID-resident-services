import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowBackIcon } from "../Icons";
import InputBar from "../InputBar/InputBar";
import {  useLocation, useHistory, useNavigate, } from "react-router-dom";
import OTP from "../OTP/OTP";
import Footer from "../Footer/Footer";
import Loading from "../LoadingScreen/Loading";
import Description from "../Description/Description";
import otpContext from "../../providers/OTPprovider";
import { useMediaQuery } from 'react-responsive'
import ServiceList from "../ServiceList/ServiceList";
import { useScrollTo } from "react-use-window-scroll";
import { useTransition } from "react-transition-state";

const Service = (props) => {
  const { name,inst,input,action,apiId,requestType } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [card, setCard] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [individualID, setIndividualID] = useState('');
  const [individualType, setIndividualIDType] = useState('');
  const [transitionID, setTransactionID] = useState('');
  const [service, setService] = useState({});
  const serviceType = location.state.service;
  const scrollTo = useScrollTo();
  useEffect(() => {
    console.log("to the top");
    scrollTo(0, 0);
    toggle(true);
  }, [])
  
 
  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true
  });

  const setOtp = (otp) => {
      
       setSelectedOption(otp);
       
       
  } 
  const setID = (id) => {
      
       setIndividualID(id);
     
      
  } 
  // const setIDtype = (idType) => {
  //     setIndividualIDType(idType);
      
  // }
  // const setRequestType = (request) => {
  //   setRequest(request);
  // }
  const setServiceType = (serviceType) => {
    
    setService(serviceType)
  }


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  

  
  if (name === "homepage") {
    return <div id="page">{name}</div>;
  } else {
    return (
      <div id="page" className={isDesktopOrLaptop? "pt-14  h-full bg-service bg-cover bg-center  ": " bg-service bg-cover bg-center h-full"}>
      {card ? 
        (isMounted &&  
          <div className={`transition duration-1000${
           status === "preEnter" || status === "exiting"
             ? " transform scale-90 opacity-0 "
             : " "
         }`}  > 
      <InputBar name={name} input={input} service={serviceType} onCardChange={setCard} setOtp={setOtp} setID={setID}  setService={setServiceType}/>
          </div>)
      : 
     
     ( isMounted &&   
        <div className={`transition duration-1000${
           status === "preEnter" || status === "exiting"
             ? " transform scale-90 opacity-0 "
             : " "
         }`}  > 
           <OTP  otp={selectedOption} id={individualID} service={service}/> 
           </div>
      )
      }
      
      
    </div>
    );
  }
};

export default Service;
