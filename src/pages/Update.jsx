import {React, useState, useEffect} from "react";
import moment from "moment/moment";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import Datepicker from "react-tailwindcss-datepicker";

import { createPost } from "../services/ResidentServices";

const Options = () => {}
const UpdateName = (props) =>{
    
    return(
    <>
    
    <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">First Name</label>
    <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"  onChange={props.handleMobileChange}
    value={props.mobile} required/>
    <label for="checked-checkbox" class="ml-2 text-xl font-medium text-[#edf2f3]">Last Name</label>
     <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"  onChange={props.handleMobileChange}
    value={props.mobile} required/>
    </>);
}
const UpdateEmail = (props) => {
    return(<>
      <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">Email</label>
         <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"  onChange={props.handleEmailChange}
        value={props.email} required/>
    </>);
}
const UpdatePhone = (props) => {
    return(<>
      <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">Phone</label>
          <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone"  onChange={props.handleEmailChange}
        value={props.email} required/>
    </>);
}
const UpdateGender = () => {
    return(<>
    <h6 className="text-center font-bold text-white ">Select your preferred gender</h6>
        <div class="flex items-center mb-4 mr-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="mr-2 w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div class="flex items-center">
    <input  id="default-radio-2" type="radio" value="" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
    </>)
}
const UpdateDOB = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
    <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">Select Date of Birth</label>
    <input type="date" class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Date"  onChange={props.handleMobileChange}
    value={props.date} max={moment().format("YYYY-MM-DD")} required/>
 
        </>
    );
}
const UpdateAddress = (props) => {
     
    return(
        <>
        <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">Kebele</label>
        <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kebele"  onChange={props.handleMobileChange}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">Woreda</label>
        <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Woreda"  onChange={props.handleMobileChange}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">City</label>
         <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City"  onChange={props.handleMobileChange}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]">State</label>
          <input class="block md:w-full lg:w-1/5 p-4  md:placeholder:text-left text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#18272a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State"  onChange={props.handleMobileChange}
        value={props.mobile} required/>
        </>);

}


const UpdateUIN = (props) => {
    const navigate = useNavigate();
    const [request, setRequest] = useState({name:false,phone:false, email:false, gender: false, dob:false, address:false})
    const [update, setUpdate] = useState(false);
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
  
    const handleClick = () => {
        setUpdate(true);
    }
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
    // location.state.request.request.cardType = "UIN";
    // console.log(location.state);
    //  createPost(location.state)
    //     .then(response => {
    //         console.log("sucess");
    //     //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
         
    //   });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
    return(
        <>
        {isLoading? <LoadingScreen/> : 
        <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
    <div class="bg-[#cadadd] flex">
        <div class="md:container mx-auto bg-welcome h-screen w-full bg-cover bg-center rounded-lg p-14">
           
            
            {!update ?
            <>
             <h2 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Please select field(s) to update</h2>
             <div class="flex flex-col items-center justify-center gap-4">
             {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div> */}
           
   <div class="flex items-center mt-4 mb-4  mr-4">
          <input id="default-checkbox" type="checkbox" value="name" onClick={()=>{request.name=!request.name}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="default-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Name</label>
  </div>
  <div class="flex items-center mb-4  mr-2">
          <input id="checked-checkbox" type="checkbox" value="gender" onClick={()=> {request.gender=!request.gender}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="checked-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Gender</label>
  </div>
  <div class="flex items-center mb-4  mr-4">
          <input id="checked-checkbox" type="checkbox" value="phone" onClick={()=> {request.phone=!request.phone}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="checked-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Phone</label>
  </div>
  <div class="flex items-center mb-4 mr-4">
          <input id="checked-checkbox" type="checkbox" value="email" onClick={()=> {request.email=!request.email}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="checked-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Email</label>
  </div>
  <div class="flex items-center mb-4 ml-8">
          <input id="checked-checkbox" type="checkbox" value="dob" onClick={()=> {request.dob=!request.dob}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="checked-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Date of Birth</label>
  </div>
  <div class="flex items-center mb-4">
          <input id="checked-checkbox" type="checkbox" value="address" onClick={()=> {request.address=!request.address}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="checked-checkbox" class="ml-2 text-base font-medium text-[#edf2f3]">Address</label>
  </div>
  
</div>
      <div class="justify-center items-center  mt-3">
          <button type="submit" onClick={()=>{setUpdate(true)}} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Submit</button>
      </div>
      </>
      :
      <>
        <h2 className="text-center font-bold text-white  lg:text-4xl md:text-2xl">Enter new data for update</h2>
       <div class="flex flex-col items-center justify-center gap-4">
       { (request.name)&&  <UpdateName/>}
       { (request.phone)&&  <UpdatePhone/>}
       { (request.email)&&  <UpdateEmail/>}
       { (request.gender) && <UpdateGender/>}
       { (request.dob) && <UpdateDOB/>}
       { (request.address) && <UpdateAddress/>}
       </div>
       <div class="justify-center items-center  mt-3">
          <button type="submit" onClick={()=>navigate('/')} class="inline-block px-7 py-3  bg-[#50848f] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#3a6c7d] hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Send Update Request</button>
      </div>

      </>
            
        
        
        }
            
           
        

        </div>
    </div>
    </div>
}
</>
    );

}
export default UpdateUIN;