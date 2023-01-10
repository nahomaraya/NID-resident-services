import React from 'react'


const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src="../../public/fingerprint.gif" alt="Loading..." className="w-16 h-16" />
    </div>
  );
}

export default LoadingScreen;