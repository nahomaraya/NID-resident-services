import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowBackIcon } from "../Icons";
import InputBar from "../InputBar/InputBar";
import OTP from "../OTP/OTP";
import Footer from "../Footer/Footer";
import Loading from "../LoadingScreen/Loading";
import Description from "../Description/Description";
import otpContext from "../../providers/OTPprovider";
import { useMediaQuery } from 'react-responsive'

const Service = (props) => {
  const { name,inst,input,action,apiId,requestType } = props;
  const [card, setCard] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [individualID, setIndividualID] = useState('');
  const [individualType, setIndividualIDType] = useState('');
  const [transitionID, setTransactionID] = useState('');
  const [service, setService] = useState({});
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
      <div id="page" className={isDesktopOrLaptop? "pt-16 h-full ": "h-full"}>
      {card ? <InputBar name={name} input={input} onCardChange={setCard} setOtp={setOtp} setID={setID}  setService={setServiceType}/>: 
      <>
      
           <OTP  otp={selectedOption} id={individualID} service={service}/> 
    
      </>}
      
      
    </div>
    );
  }
};

export default Service;
