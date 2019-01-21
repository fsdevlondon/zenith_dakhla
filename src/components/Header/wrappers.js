import styled from 'styled-components';
import imgPattern from '../../assets/img/background_pattern.jpg';

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
  ${props => props.openMenu ? 'z-index: 12;background-color: transparent;' : ''}
`;

export const NavLogo = styled.div`
  position: fixed;
  top: 25px;
  left: 40px;
  z-index: 5;
  
  @media (max-width: 767px) {
      top: 15px;
  }
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
  
  @media (max-width: 767px) {
    right: 0;
    bottom: 0;
    left: 0;
    top: auto;
    width: 100%;
    text-align: center;
    height: 70px;
    background-image: url(${imgPattern});
    background-position: center;
    background-size: cover;
    border-top: 1px solid rgba(149,149,149,0.42);
  }  
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
    margin-top: 25px;
  }
`;