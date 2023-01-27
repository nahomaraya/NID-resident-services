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
      <div id="page" className={isDesktopOrLaptop? "pt-16 h-full": "h-full"}>
        <div  class=" bg-[#cadadd] flex h-full">
        <div class="container bg-welcome h-screen w-full bg-cover bg-center rounded-lg p-20">
          {/* <Box >
           <MaterialReactTable className="w-full" columns={columns} data={data} />
           </Box>      
           {/* <ResponsiveTable
  columns={columns}
  data={data}
/> */} 
         <Table columns={columns} data={data}/>
                
        </div>
        </div>
    </div>
    }
    </>
    );

}
export default AuthHistory;