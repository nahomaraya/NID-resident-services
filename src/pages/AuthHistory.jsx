import {React, useState, useEffect, useMemo} from "react";
import {  useLocation, useHistory, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LoadingScreen from "../components/LoadingScreen/Loading";
import Table from "../components/Table/Table";
import { createPost } from "../services/ResidentServices";
// import  '@mui/styles';
// import ResponsiveTable from 'material-ui-ts-responsive-table'
import {FormattedMessage} from "react-intl";
import MaterialReactTable from 'material-react-table';
import { Box } from "@mui/system";

// import Table from 'react-tailwind-table';



const AuthHistory = () => {
    const columns = [
        'Auth Type',
        'Date',
        'Time',
        'Transaction ID'
      ]
      
      const data = [
        {
          id: '1234',
          authType: 'OTP',
          date:'28-01-2023',
          time:'14:56 PM',
          transactionID: '#12231xX@#'
        },
        {
          id: '1234',
          authType: 'Demographic',
          date:'30-01-2023',
          time:'16:56 PM',
          transactionID: '#12231xX@#'
       
        },
        {
          id: '1234',
          authType: 'Demographic',
          date:'30-01-2023',
          time:'16:56 PM',
          transactionID: '#12231xX@#'
       
        },
        {
          id: '1234',
          authType: 'Demographic',
          date:'30-01-2023',
          time:'16:56 PM',
          transactionID: '#12231xX@#'
       
        },
      ]
      
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    let loadingGif = require("../assets/fingerprint.gif");
    const location = useLocation();


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
      const handlePost = () => {
     
        createPost(location.state)
            .then(response => {
                console.log("sucess");
            //   setRequest({id: '', version:'', requestTime:'', request:{individualId: '',  individualIdType: '',  otp: ''}})
             
          });
      }
      
    
      useEffect(() => {
        if(location.state!=null){
        const timer = setTimeout(()=> {
           setIsLoading(false);
        }, 5000);
        handlePost();
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
      <div id="page" className={isDesktopOrLaptop? "pt-16 h-full bg-welcome": "h-full bg-welcome"}>
        
        <div class="container  rounded-lg p-20">
        <h1 className="text-center font-bold text-white  lg:text-4xl md:text-base">Auth Transaction History</h1>
        
         <Table columns={columns} data={data}/>

              <div class="justify-center items-center">
                  <button type="submit" onClick={() => navigate('/')} class="inline-block lg:mr-10 px-7 py-3  bg-[#5e90a9] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Home</button>
                  <button type="submit" onClick={() => navigate('/services')} class="inline-block px-7 py-3  bg-[#5e90a9] text-white font-small text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#083247] hover:shadow-lg focus:bg-[#3b5a6a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out">Back to Services</button>
              </div> 
        </div>
        
    </div>
    }
    </>
    );

}
export default AuthHistory;