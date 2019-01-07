import styled from 'styled-components';

const hamLinePosition = position => {
  switch (position) {
    case 'one':
      return 'top: 0px';
    case 'two':
      return 'top: 6px';
    case 'three':
      return 'bottom: 0px';
    default:
      return '';
  }
}

export const Ham = styled.div`
  cursor: pointer;
  position: fixed;
  right: 35px;
  top: 51px;
  z-index: 11;
`;

export const HamLines = styled.div`
  height: 13px;
  width: 50px;
  position: relative;
`;

export const HamLine = styled.div`
  background-color: #000;
  height: 1px;
  width: 100%;
  position: absolute;
  transition: all 0.4s ease-in-out 0s;
  ${props => hamLinePosition(props.num)};
`;
