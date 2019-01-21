import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import NavHam from './components/NavHam';
import { Nav, NavLogo, NavLogoImg, NavReserve, ReserveBtn } from './wrappers';
import logo from '../../assets/img/zenith_big_logo.jpg';
import NavSlider from '../NavSlider';

class NavHeader extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <Fragment>
        <Nav openMenu={this.state.isOpen}>
          <NavLogo>
            <Link to="/">
              <NavLogoImg src={logo} alt="logon0000-2"/>
            </Link>
          </NavLogo>

          <NavReserve>
            <ReserveBtn className="hotelRunnerReserveBtn">Reserve Now</ReserveBtn>
          </NavReserve>

          <NavHam openMenu={this.state.isOpen} onClick={() => { this.setState({ isOpen: !this.state.isOpen })}}/>
        </Nav>
        <NavSlider openMenu={this.state.isOpen}/>
      </Fragment>
    );
  }
}

export default NavHeader;
