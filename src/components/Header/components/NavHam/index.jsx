import React from 'react';
import { Ham, HamLines, HamLine } from './wrappers';

const NavHam = ({ onClick, openMenu }) => (
  <Ham onClick={onClick} style={{ display: 'none' }}>
    <HamLines>
      <HamLine num="one" openMenu={openMenu}/>
      <HamLine num="two" openMenu={openMenu}/>
      <HamLine num="three" openMenu={openMenu}/>
    </HamLines>
  </Ham>
);

export default NavHam;
