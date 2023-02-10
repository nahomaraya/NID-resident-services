import {React, useState, useEffect} from "react";
import {  useLocation,  useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";
import {FormattedMessage} from "react-intl";
import {

  Dialog,
 
} from "@material-tailwind/react";


const DownloadEUin = (props) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [verify, setVerify] = useState(false);
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
    location.state.request.request.cardType = "UIN";
    
    const handleVerify = () => {
          setVerify(!verify);
    }
    const handlePost = () => {
     
        createPost(location.state)
            .then(response => {
                console.log("sucess");
            //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
                navigate('/downloadconfirm');
             
          });
      }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

      useEffect(() => {
        if(location.state!=null){
        const timer = setTimeout(()=> {
           setIsLoading(false);
        }, 5000);
      
        return () => {
          clearTimeout(timer);
        }}
        else{
          navigate('/');
        }
      }, [])
    return(
        <>
        {isLoading? <LoadingScreen/> : 
           <div id="page" className={isDesktopOrLaptop? "pt-16 h-full bg-service bg-cover bg-center": "h-full bg-service bg-cover bg-center"}>
           <div class={isDesktopOrLaptop?"md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-55 w-55 p-20": "md:container  mx-auto mt-32 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-70 w-70 p-10"}>
                <h1 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl"><FormattedMessage id={"e-uin-preview"}/></h1>
                     <div className={isDesktopOrLaptop? "flex items-center justify-center gap-10  px-6 py-6":"flex flex-col items-center justify-center gap-5  px-6  py-6"}>
                         <img alt="Placeholder" className={isDesktopOrLaptop?"block h-50 w-50 mr-8":"block h-55 w-55 mr-8 "} src={require('../assets/front.jpg')}/>
                        <img alt="Placeholder" className={isDesktopOrLaptop? "block h-50 w-50 mr-8":"block h-55 w-55 mr-8 " } src={require('../assets/back.jpg')}/>

                    </div>
            {/* <div class="justify-center items-center  mt-3">
                <button type="submit" onClick={downloadLink} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Download</button>
            </div> */}
                  <div class="flex  justify-center items-center lg:mt-4 mt-2  ">
                       <button type="submit" onClick={handleVerify} class="w-1/3 inline-block py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={"click-euin-down"}/></button>
              </div>
            </div>
            </div>
      
        }
         <Dialog open={verify} handler={handleVerify}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl"><FormattedMessage id={"update-demographics"}/></h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl"><FormattedMessage id={"are-you-sure-demographic"}/></p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={handlePost} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                          <button onClick={()=>setVerify(!verify)} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
        </Dialog>
        </>
    );

}
export default DownloadEUin;