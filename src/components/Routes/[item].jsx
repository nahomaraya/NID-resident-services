import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowBackIcon } from "../Icons";
import InputBar from "../InputBar/InputBar";
import OTP from "../OTP/OTP";
import Footer from "../Footer/Footer";

const Item = (props) => {
  const { name,inst,input } = props;
  const [card, setCard] = useState(true);
  if (name === "homepage") {
    return <div id="page">{name}</div>;
  } else {
    return (
      <div id="page">
      {card ? <InputBar name={name}inst={inst} input={input} onCardChange={setCard}/>:  <OTP/> }
      {/* <InputBar name={name}inst={inst} input={input} onCardChange={setCard}/>
      <OTP/> */}
        <Footer/>
      </div>
    );
  }
};

export default Item;
