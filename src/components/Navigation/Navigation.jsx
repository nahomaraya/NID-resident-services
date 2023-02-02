import {React, useContext} from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css';
import { LOCALES } from "../../il8n/locales";
import { LanguageContext } from "../../providers/LangProvider";

import {FormattedMessage} from "react-intl"

import { dummyData } from "..";
import logo from './logo.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';
import DropdownNavbar from "../Dropdown/DropdownNavbar";


const Navigation = () => {

//    <Link to={itemData.path} style={{ textDecoration: 'none' }} className="text-[#304f55] text-sm font-medium hover:text-[#96b5bb] mr-6">
//    {itemData.icon} <FormattedMessage id={itemData.name}/>
// </Link>
const { language, setLanguage } = useContext(LanguageContext);
    return (
      <Navbar  expand="lg" fixed="top" className="bg-gray-800 p-2 flex justify-between items-center border-b">
      <Container fluid>
        <Navbar.Brand href="" className="flex items-center ml-10 gap-2">  
        <Link to="">
        <img src={logo} alt="Logo" className="w-10 h-10"/>
        </Link>
        <NavDropdown
              id="nav-dropdown"
              title={<><span className="text-[#005371] text-xl font-semibold"><FormattedMessage id={"lang"}/></span></>}>
              <NavDropdown.Item onClick={() => setLanguage(LOCALES.ENGLISH)}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage(LOCALES.AMHARIC)}>አማርኛ</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
    
        <Navbar.Collapse id="navbar-dark-example">
        <Nav className="ml-auto mr-20 items-center">
         
          {dummyData.map((itemData, index) => (
         <>
           <Nav.Item className="p-2 ml-4 no-underline hover:underline hover:decoration-[#00f7c7]  hover:decoration-4 hover:decoration-offset-10 active:animate-pulse ">
            <Link to={itemData.path}  className="nav-link" >
              <span className="text-[#005371] text-xl font-semibold"><FormattedMessage id={itemData.name}/></span>
            </Link>
          </Nav.Item>
           
            </>
          ))}
          
        </Nav>
         
          
           
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
   

    
      );
      
}
export default Navigation;