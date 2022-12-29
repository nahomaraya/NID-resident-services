import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import InputBar from "../InputBar/InputBar";

const Item = (props) => {
  const { name,inst,input } = props;
  if (name === "homepage") {
    return <div id="page">{name}</div>;
  } else {
    return (
      <div id="page">
      
        <InputBar name={name}inst={inst} input={input}/>
        
        
      </div>
    );
  }
};

export default Item;
