import {React, useState, useEffect, ChangeEvent} from "react";
import FileBase from 'react-file-base64';
import moment from "moment/moment";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import {FormattedMessage} from "react-intl";
import { useTransition } from "react-transition-state";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";

import { createPost } from "../services/ResidentServices";

const Options = () => {}
const UpdateName = (props) =>{
   
    const [data, setData] = useState();
    const [file, setFile] = useState();
    const [{ status, isMounted }, toggle] = useTransition({
      timeout: 500,
      mountOnEnter: true,
      unmountOnExit: true,
      preEnter: true
    });
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
    const handleClick = ()=>{
      props.onClick(true)
    }

    const handleFileChange = (key, value) => {
      setFile({...data, [key]: value});
    };
    
    useEffect(() => {
        props.onCallback(file);
      }, [props.active])
    
    return(
    
   <>
    <label for="checked-checkbox" class="ml-2 lg:text-xl text-base font-medium text-gray-500 "><FormattedMessage id={"first-name"}/></label>
    <input class="block w-full  lg:p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="First Name"  onChange={(e) => handleChange('first-name', e.target.value)}
    value={props.firstName} required/>
    <label for="checked-checkbox" class="ml-2 lg:text-xl text-base font-medium text-gray-500 "><FormattedMessage id={"father-name"}/></label>
     <input class="block w-full  lg:p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Last Name"  onChange={(e)=> handleChange('last-name', e.target.value)}
    value={props.lastName} required/>
     <label for="checked-checkbox" class="ml-2 lg:text-xl text-base font-medium text-gray-500 "><FormattedMessage id={"grand-father-name"}/></label>
     <input class="block w-full  lg:p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Last Name"  onChange={(e)=> handleChange('last-name', e.target.value)}
    value={props.lastName} required/>
    
    <label class="ml-2 lg:text-xl text-base font-medium text-gray-500" for="file_input"><FormattedMessage id={"upload-file"}/></label>
    {/* <input class="block md:w-full lg:w-1/3 p-1.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="file_input" type="file" onChange={ (e) => handleFileChange('first-name', e.target.value)} /> */}
    <div className="flex flex-col gap-4">
        <div className="block w-full text-base text-gray-500 rounded-md border border-gray-300  bg-white placeholder-gray-400">
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFile({...file,  name:base64 })} onChange={(e) => e.target.files[0]} />
        </div>
            <button type="submit" onClick={handleClick} class="inline-block px-5 py-2 w-full bg-[#005471] text-white font-semibold text-base leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={'send-update-request'}/></button>
    </div>  
      </>
        );
}
const UpdateEmail = (props) => {
    const [data, setData] = useState();
    const [file, setFile] = useState();
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
    const handleClick = ()=>{
      props.onClick(true)
    }
    
    useEffect(() => {
        props.onCallback(file);
      }, [props.active])
    return(<>
      <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"email"}/></label>
      <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Email"  onChange={(e) => handleChange('email', e.target.value)}
        value={props.email} required/>
     
    {/* <input class="block md:w-full lg:w-1/3 p-1.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="file_input" type="file" onChange={ (e) => handleFileChange('first-name', e.target.value)} /> */}
    <div className="block md:w-full lg:w-1/6 p-1.5  text-sm  border  rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400">
      
       <button type="submit" onClick={handleClick} class="inline-block px-4 py-1 ml-auto  bg-[#005471] text-white font-semibold text-base leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={'send-update-request'}/></button>

     </div>
    </>);
}
const UpdatePhone = (props) => {
    const [data, setData] = useState();
    const [file, setFile] = useState();
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
    const handleClick = ()=>{
      props.onClick(true)
    }
    
    useEffect(() => {
        props.onCallback(file);
      }, [props.active])
    
    return(<>
      <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"phone"}/></label>
          <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Phone"  onChange={(e) => handleChange('phone', e.target.value)}
        value={props.email} required/>
       <label class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]" for="file_input"><FormattedMessage id={"upload-file"}/></label>
    {/* <input class="block md:w-full lg:w-1/3 p-1.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="file_input" type="file" onChange={ (e) => handleFileChange('first-name', e.target.value)} /> */}
    <div className="block md:w-full lg:w-1/6 p-1.5  text-sm  border  rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400">
      
      <button type="submit" onClick={handleClick} class="inline-block px-4 py-1 ml-auto  bg-[#005471] text-white font-semibold text-base leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={'send-update-request'}/></button>

    </div>
    </>);
}

const UpdateDOB = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState({});
    const [file, setFile] = useState();
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
    const handleClick = ()=>{
      props.onClick(true)
    }
    
    useEffect(() => {
        props.onCallback(file);
      }, [props.active])
    
    return (
        <>
    <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"select-dob"}/></label>
    <input type="date" class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select Date"  onChange={(e) => handleChange('date', e.target.value)}
    value={props.date} max={moment().format("YYYY-MM-DD")} required/>
     <label class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]" for="file_input"><FormattedMessage id={"upload-file"}/></label>
    {/* <input class="block md:w-full lg:w-1/3 p-1.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="file_input" type="file" onChange={ (e) => handleFileChange('first-name', e.target.value)} /> */}
    <div className="flex gap-4">
        <div className="block w-1/2  text-base text-gray-500 rounded-md border border-gray-300  bg-white placeholder-gray-400">
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFile({...file,  name:base64 })} onChange={(e) => e.target.files[0]} />
        </div>
            <button type="submit" onClick={handleClick} class="inline-block px-4 py-1 ml-auto  bg-[#005471] text-white font-semibold text-base leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={'send-update-request'}/></button>
    </div>
 
        </>
    );
}
const UpdateAddress = (props) => {
    const [data, setData] = useState({});
    const [file, setFile] = useState();
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
    const handleClick = ()=>{
      props.onClick(true)
    }
    useEffect(() => {
        props.onCallback(file);
      }, [props.active])
    
     
    return(
        <>
        
        <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"kebele"}/></label>
        <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-[#00efc6] focus:border-[#00efc6]" placeholder="Kebele"  onChange={(e) => handleChange('kebele', e.target.value)}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"woreda"}/></label>
        <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-[#00efc6] focus:border-[#00efc6]" placeholder="Woreda"  onChange={(e) => handleChange('woreda', e.target.value)}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"city"}/></label>
         <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-[#00efc6] focus:border-[#00efc6]" placeholder="City"  onChange={(e) => handleChange('city', e.target.value)}
        value={props.mobile} required/>
          <label for="checked-checkbox" class="mt-2 ml-2 text-xl font-medium text-gray-500 "><FormattedMessage id={"state"}/></label>
          <input class="block w-full  p-2  md:placeholder:text-left text-base text-black rounded-md border border-gray-300  bg-white focus:ring-[#00efc6] focus:border-[#00efc6]" placeholder="State"  onChange={(e) => handleChange('state', e.target.value)}
        value={props.mobile} required/>
        
        <label class="mt-8 ml-2 text-xl font-medium text-[#edf2f3]" for="file_input"><FormattedMessage id={"upload-file"}/></label>
    {/* <input class="block md:w-full lg:w-1/3 p-1.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="file_input" type="file" onChange={ (e) => handleFileChange('first-name', e.target.value)} /> */}
    <div className="flex gap-4">
        <div className="block w-1/2  text-base text-gray-500 rounded-md border border-gray-300  bg-white placeholder-gray-400">
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFile({...file,  name:base64 })} onChange={(e) => e.target.files[0]} />
        </div>
            <button type="submit" onClick={handleClick} class="inline-block px-4 py-1 ml-auto  bg-[#005471] text-white font-semibold text-base leading-tight uppercase rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={'send-update-request'}/></button>
    </div>
        </>);

}


const UpdateUIN = (props) => {
    const navigate = useNavigate();
    const [request, setRequest] = useState({name:false,phone:false, email:false, gender: false, dob:false, address:false})
    const [update, setUpdate] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [{ status, isMounted }, toggle] = useTransition({
      timeout: 500,
      mountOnEnter: true,
      unmountOnExit: true,
      preEnter: true
    });
    

    const [isLoading, setIsLoading] = useState(true);
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();
    const handleChange = (key,value) => {
        setData({...data, [key]: value});
    }
  
    const [sendRequest, setSendRequest] = useState(false);
   
   

    const handleDemographics = (childData) => {
      
          if(request){
        
          
        //   setDocuments([
        //     ...documents,
        //     childData
        //   ]);
          documents.push(childData)
        }
       
          
        
          

    }
   
  
   
    const handleClick = () => {
        setSendRequest(true);
        setOpen(true);
        console.log("true");

    }
    
    const handlePost = () => {
        console.log(location.state);

       
        const arr = documents.filter(elem => elem != null);
        console.log(arr);
        location.state.request.request.documents = arr;
        console.log(location.state);
        createPost(location.state)
        .then(response => {
            console.log("sucess");
        //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
        navigate('/updateconfirm',{state:{arr}});
   
      });
    }
   
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

      useEffect(() => {
        if(location.state!=null){
        const timer = setTimeout(()=> {
           setIsLoading(false);
        }, 5000);
        toggle(true);
      
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
     {isMounted &&   
        <div className={`transition duration-1000${status === "preEnter" || status === "exiting"
             ? " transform translate-x-full opacity-0 "
             : " "
         }`}  > 
          <div class={isDesktopOrLaptop?"md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-30 w-50 p-10": "md:container  mx-auto mt-24 bg-[#e8e8e8] border-2 border-[#f6f6f6] rounded-3xl h-50 w-70 p-10"}>
   
            
            {!update ?
            <>
            
             <h2 className="text-center font-bold text-[#005471]  lg:text-4xl md:text-2xl"><FormattedMessage id={"please-select-fields"}/></h2>
        <div class="flex flex-wrap   mt-8 ml-4  mb-4 gap-10">
             {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div> */}
           
   <div class="flex items-center">
          <input id="default-checkbox" type="checkbox" value="name" onClick={()=>{request.name=!request.name}} class="w-4 h-4 text-[#00efc6] bg-gray-100 border-gray-300 rounded focus:ring-[#00efc6] focus:ring-2 "/>
          <label for="default-checkbox" class="ml-2 text-xl font-semibold text-gray-500 "><FormattedMessage id={"name"}/></label>
  </div>
 
  <div class="flex items-center ">
          <input id="checked-checkbox" type="checkbox" value="phone" onClick={()=> {request.phone=!request.phone}} class="w-4 h-4 text-[#00efc6] bg-gray-100 border-gray-300 rounded focus:ring-[#00efc6] focus:ring-2 "/>
          <label for="checked-checkbox" class="ml-2 text-xl font-semibold text-gray-500 "><FormattedMessage id={"phone"}/></label>
  </div>
  <div class="flex items-center ">
          <input id="checked-checkbox" type="checkbox" value="email" onClick={()=> {request.email=!request.email}} class="w-4 h-4 text-[#00efc6] bg-gray-100 border-gray-300 rounded focus:ring-[#00efc6] focus:ring-2 "/>
          <label for="checked-checkbox" class="ml-2 text-xl font-semibold text-gray-500 "><FormattedMessage id={"email"}/></label>
  </div>
  <div class="flex items-center">
          <input id="checked-checkbox" type="checkbox" value="dob" onClick={()=> {request.dob=!request.dob}} class="w-4 h-4 text-[#00efc6] bg-gray-100 border-gray-300 rounded focus:ring-[#00efc6] focus:ring-2"/>
          <label for="checked-checkbox" class="ml-2 text-xl font-semibold text-gray-500 "><FormattedMessage id={"dob"}/></label>
  </div>
  <div class="flex items-center">
          <input id="checked-checkbox" type="checkbox" value="address" onClick={()=> {request.address=!request.address}} class="w-4 h-4 text-[#00efc6] bg-gray-100 border-gray-300 rounded focus:ring-[#00efc6] focus:ring-2 "/>
          <label for="checked-checkbox" class="ml-2 text-xl font-semibold text-gray-500 "><FormattedMessage id={"address"}/></label>
  </div>
  
</div>
      <div class="justify-start items-center ">
          <button type="submit" onClick={()=>{setUpdate(true)}} class="w-1/3 inline-block px-7 py-3  bg-[#005471] text-white font-semibold text-base leading-tight  rounded-xl shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out"><FormattedMessage id={"submit"}/></button>
      </div>
      
    
      </>
      :
      <>
     
          <h2 className="text-center font-bold text-[#005471]  lg:text-4xl text-2xl">Enter New Data for Update</h2>
       <div class="flex flex-col justify-start items-start gap-2">
       { (request.name)&&  <UpdateName onCallback = {handleDemographics} onClick={handleClick} active={sendRequest} />}
       { (request.phone)&&  <UpdatePhone onCallback = {handleDemographics} active={sendRequest}/>}
       { (request.email)&&  <UpdateEmail onCallback = {handleDemographics} active={sendRequest}/>}
      
       { (request.dob) && <UpdateDOB onCallback = {handleDemographics} active={sendRequest}/>}
       { (request.address) && <UpdateAddress onCallback = {handleDemographics} active={sendRequest}/>}
{/*       
          <button type="submit" onClick={handleClick} class="inline-block px-7 py-3   bg-[#5e90a9] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Send Update Request</button>
       */}
       </div>
      </>}
    </div>
  </div>}
        <Dialog open={open} handler={handleDemographics}  animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 },}}>
                    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 lg:p-12 xl:p-16">
                            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl"><FormattedMessage id={"update-demographics"}/></h2>
                            <p className="text-gray-600 mb-4 md:text-xl lg:text-2xl xl:text-3xl"><FormattedMessage id={"are-you-sure-demographic"}/></p>
                            <div class="flex justify-center text-center mt-4 gap-6">
                            <button onClick={handlePost} className=" inline-block px-7 py-3 bg-green-400 text-gray-800 hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="yes"/>
                            </button>
                            <button onClick={()=>setOpen(!open)} className="inline-block px-7 py-3 bg-red-400 text-gray-800 hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out font-bold  rounded-full md:py-3 lg:py-4 xl:py-5">
                            <FormattedMessage id="no"/>
                            </button>
                            </div>
                        </div>
                    </div>
        </Dialog>
  </div>
 
}
</>
    );

}
export default UpdateUIN;