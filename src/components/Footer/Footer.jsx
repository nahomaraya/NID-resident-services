import React from "react";
import "./Footer.css";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useMediaQuery } from 'react-responsive';
import {FormattedMessage} from "react-intl";

// "https://id.gov.et"
// "https://www.facebook.com/IDethiopia/?ref=pages_you_manage"
// "https://twitter.com/IDethiopia"



const Footer = () => {

const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1224px)'
});
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (
<footer className="bg-footer bg-right-bottom bg-cover" >

 
  <div class="mx-2 p-4 text-center md:text-left">
    <div className={isDesktopOrLaptop?"flex gap-8":"flex-col gap-8"}>
      
     
        <div class="flex justify-center items-center mb-4 ml-8 lg:ml-96 mt-8 border-b-2 border-t-2 border-r-2 border-l-2 border-white rounded-full  ">
  
    <h1 className="self-center lg:px-24 py-2 text-xl lg:text-4xl  font-semibold whitespace-nowrap text-white"><span className="text-[#12d2ad] p-2"><FormattedMessage id={"nid"}/></span><FormattedMessage id={"online-helpdesk"}/></h1>
</div>
      
     
      
      <div class="ml-auto mr-4 lg:mr-64">
        <h5 class="font-black text-white self-start">
         <FormattedMessage id={"address"}/> 
        </h5>
        <p class="flex justify-start  text-white">
         <LocationOnOutlinedIcon />
          <span className="text-base ml-4 "><FormattedMessage id={"home-address"}/></span></p>
       
        <p class="flex justify-start text-white text-xl ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            class="w-4 mr-3 " role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          <span className="ml-2  mr-2 text-[#072c3f] font-bold"><FormattedMessage id={"call-us"}/> </span>+251111400787
        </p>
       
      <div class="flex justify-center  mt-10">
      <a href="https://www.facebook.com/IDethiopia/?ref=pages_you_manage" class="ml-10 text-white ">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
          class="w-2.5 " role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
          </path>
        </svg>
      </a>
      <a href="https://twitter.com/IDethiopia" class="ml-10 text-white ">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
          class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
          </path>
        </svg>
      </a>
     
      <a href="#!" class="ml-10 text-white">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
          class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          </path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/idethiopia" class="ml-10 text-white">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
          class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
          </path>
        </svg>
      </a>
     
    </div>
      </div>
    </div>
  </div>
  

   
</footer>
    );
};

export default Footer;