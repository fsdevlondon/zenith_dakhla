import React from 'react';
import { Ham, HamLines, HamLine } from './wrappers';

const NavHam = ({ onClick }) => (
  <Ham onClick={onClick}>
    <HamLines>
      <HamLine num="one" />
      <HamLine num="two" />
      <HamLine num="three" />
    </HamLines>
  </Ham>
);

export default NavHam;
