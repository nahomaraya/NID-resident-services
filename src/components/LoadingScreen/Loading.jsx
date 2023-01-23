import {React, useEffect, useState} from 'react'
import Home from '../../pages/Home';


const LoadingScreen = (children) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(()=> {
       setIsLoading(false);
    }, 5000);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])
  
  let loadingGif = require("../../assets/fingerprint.gif");
  if(isLoading){
  return (
    <div className="bg-[#FCFCFF] flex items-center justify-center h-screen">
       <img src={loadingGif} alt="wait until the page loads" className='h-48'/>
</div>

  );
  }
  return <Home/>
}

export default LoadingScreen;