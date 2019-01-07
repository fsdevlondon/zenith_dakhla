import styled from 'styled-components';

export const Nav = styled.nav`
  display: block;
  height: 120px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 3;
  transition: background-color 0.5s ease;
  
  @media (max-width: 767px) {
    height: 105px;
  }
`;

export const NavLogo = styled.div`
  position: fixed;
  top: 25px;
  left: 40px;
  z-index: 5;
`;

export const NavLogoImg = styled.img`
  max-height: 75px;
  width: auto;
`;

export const NavReserve = styled.div`
  position: fixed;
  right: 170px;
  top: 50px;
  z-index: 11;
`;

export const ReserveBtn = styled.div`
  border-bottom: 1px solid #000;
  font-size: 16px;
  margin: 0;
  color: #000;
  min-width: 0;
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-family: 'FuturaMedium', sans-serif;
  letter-spacing: 2px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  
  @media (max-width: 767px) {
    display: none;
  }
`;