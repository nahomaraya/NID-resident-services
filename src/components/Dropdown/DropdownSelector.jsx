import React, { useState, useCallback } from 'react';

function DropdownSelector(props) {
  

  function handleChange(event) {
    props.onChange(event.target.value);
  }


  return (
    <div className="relative inline-block text-left text-sm">
      <select
        className="block appearance-none w-full bg-[#F7F6FB] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        value={props.selectedOption}
        onChange={handleChange}
      >
        <option value="Send OTP via Phone">Send OTP via Phone</option>
        <option value="Send OTP via Email">Send OTP via Email</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

export default DropdownSelector;