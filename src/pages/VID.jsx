import {React, useState, useEffect} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import { createPost } from "../services/ResidentServices";
import {FormattedMessage} from "react-intl";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const VIDtype = (props) => {
  const handleClick = (type, lock) => {
    props.setSelectedOption(type);
  
   
};
  return(
   <div class=" mx-8 my-2  w-full  lg:w-1/3">

  <article  onClick={() => {handleClick(props.type, props.locked)}} class=" border-2 border-[#f6f6f6] bg-white hover:bg-blue-200  hover:-translate-y-1 hover:scale-110 hover:cursor-pointer  overflow-hidden rounded-xl shadow-lg">

    
   
      <header class="flex  justify-center leading-tight p-2 md:p-4">
    
     
                <img alt="Placeholder" class="block h-12 w-12  mr-2 " src={require('../assets/'+ (props.type.icon))}/>:
              
  
        
         
          <h1 class="text-base lg:text-xl text-[#365c66] font-bold ">
            
             {props.type.name}
            
           
             
          </h1>
          
      </header>
      <hr className="text-[#00efc6]"/>
      <p class="text-[#00efc6] text-xs lg:text-base font-normal">
          {props.type.desc}
              </p>

   
    
      {/* <footer class="flex items-center justify-between leading-none p-2  md:p-4">
        
            
              <p class="ml-2 h-15 text-[#17242a] text-sm">
            <FormattedMessage id ={subitem.instruction} />
              </p>
          
         
      </footer> */}

  </article>

</div> 
  );
}

const VID = (props) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [vidType, setVidType] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
   
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
    const types = location.state.request.types;
    
    // location.state.request.request.cardType = "UIN";
    // console.log(location.state);
    //  createPost(location.state)
    //     .then(response => {
    //         console.log("sucess");
    //     //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
    //   });
    
    const navigatePage = () => {
      // 👇️ navigate to /
      //  createPost(request)
      //   .then(response => {
         
      //     setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
      // });
      //navigate to path here
      
      navigate('/vidconfirm',{state:{vidType}});
      
   
    };
    
    
    const handleClick = (type) => {
      setOpen(!open);
      setVidType(type.name);
      console.log(type.name);
  
    }
    const handlePost = (type) => {
      setOpen(false);
      console.log(type);
      location.state.request.request.authType = type
      console.log(location.state.request.request.authType);
      navigatePage();
      createPost(location.state)
       .then(response => {
           setIsLoading(true);
           console.log("sucess");
         // setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         navigatePage();
         
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
      <div class={isDesktopOrLaptop?"md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-50 p-10": "md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-70 p-10"}>
        <h2 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl">Chosse VID type to generate</h2>
      
        <div className="flex items-center justify-center px-6 py-6">
      { types.map(type => (
    //     <div class="flex flex-col items-center justify-center p-3 mb-5">
       
    //  <button class="inline-block lg:mr-10 w-full px-4 py-4 mb-4 bg-[#072c3f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#083247] hover:shadow-lg  transition duration-150 ease-in-out" onClick={() => {handleClick(type)}}>{type}</button>  
    //  <h6 className="font-bold text-white  lg:text-xl md:text-xs mr-4">THis is a {type} VID</h6> 
    //     </div>
    <VIDtype type={type} setSelectedOption={handleClick}/>
      ))}
    </div>
    <div class="flex justify-center items-center  gap-16">
                  <button type="submit" onClick={() => navigate('/')} class="w-1/3 inline-block  py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="w-1/3 inline-block py-3 px-4  bg-[#005471] text-white font-semibold text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
              </div>
      </div>
      </div>
     
}
<Dialog open={open} handler={handleClick}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">Generate VID</h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl">Are you sure you want to generate a {vidType} VID?</p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={()=>handlePost(vidType)} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                            <button onClick={()=>handleClick(vidType)} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    </Dialog>
</>
    );

}
export default VID;