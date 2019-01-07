import React from 'react';
import NavHam from './components/NavHam';
import { Nav, NavLogo, NavLogoImg, NavReserve, ReserveBtn } from './wrappers';
import logo from '../../assets/zenith_big_logo.png';

const NavHeader = () => (
  <Nav>
    <NavLogo>
      <a href="https://www.zenithdakhla.com">
        <NavLogoImg src={logo} alt="logon0000-2" />
      </a>
    </NavLogo>

    <NavReserve>
      <ReserveBtn onClick={() => {}}>Reserve Now</ReserveBtn>
    </NavReserve>

    <NavHam onClick={() => {}} />
  </Nav>
);

export default NavHeader;
