import React, { useState } from 'react';

const Dialog = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };


  return (
    <div>
      {/* <button onClick={openDialog} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
        Open Dialog
      </button> */}
      {isOpen &&  (
     
        <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">Verification Complete</h2>
            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">Proceed to your required service</p>
            <button onClick={closeDialog} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full md:py-3 lg:py-4 xl:py-5">
              Close
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dialog;