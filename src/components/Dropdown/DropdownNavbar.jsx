import React from "react";
import { Link } from "react-router-dom";

import {FormattedMessage} from "react-intl"

const DropdownNavbar = ({ submenus }) => {
    return (
      <div className="flex flex-col">
        {submenus.map((submenu, index) => (
        <Link to={submenu.path} style={{ textDecoration: 'none' }} className="text-[#304f55] text-sm font-medium hover:text-[#96b5bb] mr-6">
           {submenu.icon} <FormattedMessage id={submenu.name}/>
    </Link>
        ))}
      </div>
    );
  };
  
export default DropdownNavbar;