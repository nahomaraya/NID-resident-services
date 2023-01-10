import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebarr.css';
import NID from './NID.svg'

import { dummyData } from "..";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import {FormattedMessage} from "react-intl"
import NIDIcon from '../Icon/NIDIcon';

const Sidebarr = ({children}) => {

  const [showNav, setShowNav] = useState(true)

  return <div className={`body-area${showNav ? ' body-pd' : ''}`}>
    <header className={`header${showNav ? ' body-pd' : ''}`}>
      <div className="header_toggle">
        <i
          className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
          onClick={() => setShowNav(!showNav)} />
        
      </div>
      <div className="header_img">
        <img
          src={NID}
          alt="Clue Mediator" />
      </div>
    </header>
    <div className={`l-navbar${showNav ? ' show' : ''}`}>
      <nav className="nav">
        <div>
          <Link to={""} className="nav_logo">
            <NIDIcon/>
            <span className="nav_logo-name">FAYDA</span>
          </Link>
          <div className="nav_list">
            {/* <a href="https://cluemediator.com" target="_blank" className="nav_link">
              <i className='bi bi-people nav_icon' /><span className="nav_name">Users</span>
            </a>
            <a href="https://cluemediator.com" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Role</span>
            </a> */}
        {dummyData.map((itemData, index) => (
            <Link to={itemData.path} className="nav_link">
              {itemData.icon} <span className="nav_name"><FormattedMessage id={itemData.name}/></span>
          </Link>
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