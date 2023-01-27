import React, { useState, useCallback, useEffect } from 'react';

import {FormattedMessage} from "react-intl";

function DropdownSelector(props) {
  
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  function handleChange(event) {
    const newOption = event.target.value;
    setSelectedOption(newOption);
  }
  
  useEffect(() => {
    props.onCallback(selectedOption);
  }, [selectedOption])
  


  return (
    <div className="relative inline-block text-left text-sm">
      
      <select
        className="block appearance-none w-full bg-[#83bcd8] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        value={selectedOption}
        onChange={handleChange}
      >
        {/* <option className=' bg-[#a7c1c7]' value="Send OTP via Phone"><FormattedMessage id={"send-phone"}/> </option>
        <option className=' bg-[#a7c1c7]' value="Send OTP via Email"><FormattedMessage id={"send-email"}/></option> */}
       { props.options.map(option => (<option className='bg-[#a7c1c7]' key={option} value={option}><FormattedMessage id={option}/></option>))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

export default DropdownSelector;