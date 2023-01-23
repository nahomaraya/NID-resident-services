import {React, useState, useEffect} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";




const Unlock = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(()=> {
       setIsLoading(false);
    }, 5000);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])
  let loadingGif = require("../assets/fingerprint.gif");
  const location = useLocation();
  const types = location.state.request.types;
  console.log(types);
  // location.state.request.request.cardType = "UIN";
  // console.log(location.state);
   
  const handleClick = (type) => {
    location.state.request.request.authType = type
    console.log(location.state.request.request.authType)
    createPost(location.state)
     .then(response => {
         console.log("sucess");
       // setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
       
   });

  }
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return(
      <>
      {isLoading? <LoadingScreen/> : 
      <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
     
        <div class=" bg-[#184e66] flex">
        <div class="md:container mx-auto bg-[#184e66] rounded-lg p-14">
        <h2 className="text-center font-bold text-white  text-2xl">Choose auth type to unlock</h2>
        <div className="flex flex-wrap">
        { types.map(type => (
         <div className="w-full sm:w-1/4 px-4 py-4">
         <div className="font-mono bg-[#50848f] cursor-pointer rounded-full shadow-md text-white text-center font-small text-sm leading-tight py-4 hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg ">
<a onClick={() => handleClick(type)}>{type}</a>  
</div>
</div>
      ))}
    </div>

    <div class="justify-center items-center p-1">
                  <button type="submit" onClick={() => navigate('/')} class="inline-block lg:mr-10 px-7 py-3  bg-[#84a8b0] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="inline-block px-7 py-3  bg-[#84a8b0] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
              </div>

        </div>
        {/* <Dialog open={otpResent} handler={handleOpen}  animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl"><FormattedMessage id="otp-resent"/></h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">{ phone ? <FormattedMessage id="check-phone"/>: <FormattedMessage id="check-email"/>}</p>
                            <button onClick={handleOpen} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="close"/>
                            </button>
                        </div>
                    </div>
                    </Dialog> */}
        </div>
    </div>
}
</>
    );

}
export default Unlock;