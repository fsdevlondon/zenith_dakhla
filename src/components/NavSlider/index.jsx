import React from 'react';
import { Link } from 'react-router-dom';
import Spherical002 from '../../assets/img/Spherical-Urbanica-0509-e1534557790516.jpg';
import Spherical003 from '../../assets/img/Spherical-Urbanica-9868_edit.jpg';
import Spherical004 from '../../assets/img/Spherical-Urbanica-0425.jpg';
import Spherical005 from '../../assets/img/Spherical-Urbanica-9991.jpg';
import Spherical006 from '../../assets/img/Spherical-Urbanica-9698.jpg';
import Spherical007 from '../../assets/img/Spherical-Urbanica-0328-1.jpg';

const NavSlider = ({ openMenu }) => (
  <div className={`nav-slider ${openMenu ? 'nav-slider--open' : ''}`}>
    <div className="nav-slider__images">
      <div className="nav-slider__image nav-slider__image--default active" style={{backgroundImage: `url(${Spherical002})`}}/>
      <div className="nav-slider__image nav-slider__image--1607" style={{backgroundImage: `url(${Spherical003})`}}/>
      <div className="nav-slider__image nav-slider__image--1608" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1609" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1610" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1611" style={{backgroundImage: `url(${Spherical004})`}}/>

      <div className="nav-slider__image nav-slider__image--1620" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1621" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1622" style={{backgroundImage: `url(${Spherical004})`}}/>

      <div className="nav-slider__image nav-slider__image--1630" style={{backgroundImage: `url(${Spherical004})`}}/>
      <div className="nav-slider__image nav-slider__image--1631" style={{backgroundImage: `url(${Spherical007})`}}/>
      <div className="nav-slider__image nav-slider__image--1632" style={{backgroundImage: `url(${Spherical007})`}}/>
      <div className="nav-slider__image nav-slider__image--1633" style={{backgroundImage: `url(${Spherical007})`}}/>
      <div className="nav-slider__image nav-slider__image--1634" style={{backgroundImage: `url(${Spherical007})`}}/>

      <div className="nav-slider__image nav-slider__image--2298" style={{backgroundImage: `url(${Spherical005})`}}/>

      <div className="nav-slider__image nav-slider__image--2122" style={{backgroundImage: `url(${Spherical006})`}}/>
    </div>
    <div className="nav-slider__menu">
      <div className="nav-slider__menu-wrap" style={{paddingRight: '0px'}}>
        <div className="nav-slider__menu-container">
          <ul id="menu-meridian-slide-menu" className="nav-slider__menu--desktop">
            <li id="menu-item-1607"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1607">
              <Link to="/rooms" className="animsition-link">Our Rooms</Link>
              <ul className="sub-menu">
                <li id="menu-item-1608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608">
                  <Link to="/rooms/pool-villa-room" data-id="1608" className="animsition-link">Pool Villa</Link>
                </li>
                <li id="menu-item-1609" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609">
                  <Link to="/rooms/loft-room" data-id="1609" className="animsition-link">Loft</Link>
                </li>
                <li id="menu-item-1610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610">
                  <Link to="/rooms/villa-room" data-id="1610" className="animsition-link">Villa</Link>
                </li>
                <li id="menu-item-1611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1611">
                  <Link to="/rooms/riad-room" data-id="1611" className="animsition-link">Riad</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-1620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1620">
              <Link to="/food-drink" data-id="1620" className="animsition-link">Food + Drink</Link>
              <ul className="sub-menu">
                <li id="menu-item-1621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1621">
                  <Link to="/food-drink/food-marchand" data-id="1621" className="animsition-link">The Food Marchand</Link>
                </li>
                <li id="menu-item-1622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1622">
                  <Link to="/food-drink/poolbar" data-id="1622" className="animsition-link">Pool Bar</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-1630" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1630">
              <Link to="/kite-trips" data-id="1630" className="animsition-link">Kite + Trips</Link>
              <ul className="sub-menu">
                <li id="menu-item-1631" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1631">
                  <Link to="/kite-trips/school" data-id="1631" className="animsition-link">Kite School</Link>
                </li>
                <li id="menu-item-1632" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1632">
                  <Link to="/kite-trips/packages" data-id="1632" className="animsition-link">Packages</Link>
                </li>
                <li id="menu-item-1633" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1633">
                  <Link to="/kite-trips/spots" data-id="1633" className="animsition-link">Spots</Link>
                </li>
                <li id="menu-item-1634" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1634">
                  <Link to="/kite-trips/shop" data-id="1634" className="animsition-link">Shop</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-1640" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2298">
              <Link to="/gallery" data-id="2298" className="animsition-link">Gallery</Link>
            </li>
            <li id="menu-item-1650" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2122">
              <Link to="/contact" data-id="2122" className="animsition-link">Contact</Link>
            </li>
          </ul>

          <ul id="menu-meridian-slide-menu-1" className="nav-slider__menu nav-slider__menu--mobile">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1607">
              <Link to="/rooms" data-id="1607" className="animsition-link">Our Rooms</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608">
                  <Link to="/rooms/pool-villa-room" data-id="1608" className="animsition-link">Pool Villa</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609">
                  <Link to="/rooms/loft-room" data-id="1609" className="animsition-link">Loft</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610">
                  <Link to="/rooms/villa-room" data-id="1610" className="animsition-link">Villa</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1611">
                  <Link to="/rooms/riad-room" data-id="1611" className="animsition-link">Riad</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1624">
              <Link to="/food-drink" data-id="1620" className="animsition-link">Food + Drink</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625">
                  <Link to="/food-drink/food-marchand" data-id="1621" className="animsition-link">The Food Marchand</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626">
                  <Link to="/food-drink/poolbar" data-id="1622" className="animsition-link">Pool Bar</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1630">
              <Link to="/kite-trips" data-id="1630" className="animsition-link">>Kite + Trips</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1631">
                  <Link to="/kite-trips/school" data-id="1631" className="animsition-link">Kite School</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1632">
                  <Link to="/kite-trips/packages" data-id="1632" className="animsition-link">Packages</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1633">
                  <Link to="/kite-trips/spots" data-id="1633" className="animsition-link">Spots</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1634">
                  <Link to="/kite-trips/shop" data-id="1634" className="animsition-link">Shop</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2298">
              <Link to="/gallery/" data-id="2298" className="animsition-link">Gallery</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2122">
              <Link to="/contact" data-id="2122" className="animsition-link">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="nav-slider__links">
          <ul id="menu-meridian-slide-links" className="nav-slider__links-desktop">
            <li id="menu-item-2210" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2210">
              <Link to="/" className="animsition-link">The Resorts</Link>
            </li>
            <li id="menu-item-2200" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2200">
              <Link to="/about" className="animsition-link">About Zenith Dakhla</Link>
            </li>
          </ul>
          <ul id="menu-meridian-slide-links-1" className="nav-slider__links-mobile">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2389">
              <Link to="/" className="animsition-link">The Resorts</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2390">
              <Link to="/about" className="animsition-link">About Zenith Dakhla</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default NavSlider;
