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
