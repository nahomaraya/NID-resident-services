import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';


import { dummyData } from "..";
import {FormattedMessage} from "react-intl";
import NID from './NID.svg';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <Nav>
          <NavIcon to='#'>
            <MenuIcon onClick={showSidebar} />
          </NavIcon>
          <NavIcon className='ml-auto'>
          <Link to="">
        <img
          src={NID}
          alt="NID"
          />
        </Link>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <CloseIcon onClick={showSidebar} />
            </NavIcon>
            {dummyData.map((itemData, index) => {
              return <SubMenu item={itemData} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
     
    </>
  );
};

export default SideNav;
