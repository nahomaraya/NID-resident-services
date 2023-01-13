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

const Item = (props) => {
  const { name,inst,input,action } = props;
  const [card, setCard] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const setOtp = (otp) => {
       setSelectedOption(otp);
       console.log(selectedOption);
  }  

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  
  if (name === "homepage") {
    return <div id="page">{name}</div>;
  } else {
    return (
      <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
      {card ? <InputBar name={name} input={input} onCardChange={setCard} setOtp={setOtp}/>: 
      <>
      
           <OTP action={action} otp={selectedOption}/> 
    
      </>}
      <Description inst={inst}/>
     
    </div>
    );
  }
};

export default Item;
