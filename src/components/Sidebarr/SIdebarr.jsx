import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sidebarr.css';
import NID from './NID.svg'

import { dummyData } from "..";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import {FormattedMessage} from "react-intl"
import NIDIcon from '../Icon/NIDIcon';

const Sidebarr = ({children}) => {

  const [showNav, setShowNav] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false);


  return <div className={`body-area${showNav ? ' body-pd' : ''}`}>
    <header className={`header${showNav ? ' body-pd' : ''}`}>
      <div className="header_toggle_open">
        <i
          
          className={`bi ${showNav ? '' : 'bi-list'}`}
          onClick={() => setShowNav(!showNav)} 
          />
        
      </div>
      <div className="header_img">
        <Link to="">
        <img
          src={NID}
          alt="NID"
          />
        </Link>
      </div>
    </header>
    <div className={`l-navbar${showNav ? ' show' : ''}`} >
      <nav className="nav">
        <div>
          <div className="nav_logo">
          <div className="header_toggle">
        <i
          className={`bi ${showNav ? 'bi-x' : ''}`}
          onClick={() => setShowNav(!showNav)} />
        
      </div>
            <span className="nav_logo-name">FAYDA</span>
          </div>
          <div className="nav_list">
            {/* <a href="https://cluemediator.com" target="_blank" className="nav_link">
              <i className='bi bi-people nav_icon' /><span className="nav_name">Users</span>
            </a>
            <a href="https://cluemediator.com" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Role</span>
            </a> */}
        {dummyData.map((itemData, index) => (
          itemData.subMenu ? 
          <NavDropdown
          id="nav_link"
          title={<> {itemData.icon} <span  className="ml-2"><FormattedMessage id={itemData.name}/></span></>}
          menuVariant="dark"
          
        >
        {itemData.subMenu.map((subitemData, index) => (
        <Link to={subitemData.path} className="nav-link" onClick={() => setShowNav(false)}>
          {subitemData.icon} <span className=' text-[#b9cdd2] hover:bg-[#101a1c] hover:shadow-lg focus:bg-[#487680] focus:shadow-lg focus:outline-none focus:ring active:shadow-lg '><FormattedMessage  id={subitemData.name}/></span>
      </Link>
       ))}
        </NavDropdown>
        :
          <>
            <Link to={itemData.path} className="nav_link" onClick={() => setShowNav(false)}>
              {itemData.icon} <span className="nav_name"><FormattedMessage id={itemData.name}/></span>
          </Link>
          </>
           ))}
          </div>
        </div>
      </nav>
    </div>
    <div >
       {children}
      </div>
  </div>
}

export default Sidebarr;