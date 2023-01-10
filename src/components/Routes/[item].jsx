import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowBackIcon } from "../Icons";
import InputBar from "../InputBar/InputBar";
import OTP from "../OTP/OTP";
import Footer from "../Footer/Footer";
import Loading from "../LoadingScreen/Loading";

const Item = (props) => {
  const { name,inst,input,action } = props;
  const [card, setCard] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  
  if (name === "homepage") {
    return <div id="page">{name}</div>;
  } else {
    return (
      <div id="page">
      {card ? <InputBar name={name}inst={inst} input={input} onCardChange={setCard} onOTPChange={() => setSelectedOption(selectedOption)} selectedOption={selectedOption}/>: 
      <>
      <OTP action={action} otp={selectedOption}/> 
      </>}
    </div>
    );
  }
};

export default Item;
