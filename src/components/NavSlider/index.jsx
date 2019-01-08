import React from 'react';
import { Link } from 'react-router-dom';
import Spherical001 from '../../assets/img/Spherical-Urbanica-Hotels-Meridian-South-Beach_pool-cabana_01.jpg';

const NavSlider = ({ openMenu }) => (
  <div className={`nav-slider ${openMenu ? 'nav-slider--open' : ''}`}>
    <div className="nav-slider__images">
      <div className="nav-slider__image nav-slider__image--default active" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-e1534557790516.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--1607" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9868_edit.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--1608"/>
      <div className="nav-slider__image nav-slider__image--1609"/>
      <div className="nav-slider__image nav-slider__image--1610"/>
      <div className="nav-slider__image nav-slider__image--1619"/>
      <div className="nav-slider__image nav-slider__image--1620"/>
      <div className="nav-slider__image nav-slider__image--1621"/>
      <div className="nav-slider__image nav-slider__image--1622"/>
      <div className="nav-slider__image nav-slider__image--1624" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0425.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--1625"/>
      <div className="nav-slider__image nav-slider__image--1626"/>
      <div className="nav-slider__image nav-slider__image--1461" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-9991.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--2298" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-9698.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--2122" style={{backgroundImage: 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0328-1.jpg)'}}/>
      <div className="nav-slider__image nav-slider__image--1956" style={{backgroundImage: `url(${Spherical001})`}}/>
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
                  <Link to="/rooms/the-terrace" data-id="1608" className="animsition-link">The Terrace</Link>
                </li>
                <li id="menu-item-1609" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609">
                  <Link to="/rooms/club" data-id="1609" className="animsition-link">Club</Link>
                </li>
                <li id="menu-item-1610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610">
                  <Link to="/rooms/club-2-full" data-id="1610" className="animsition-link">Club 2 Full</Link>
                </li>
                <li id="menu-item-1619" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1619">
                  <Link to="/rooms/grand" data-id="1619" className="animsition-link">Grand Room</Link>
                </li>
                <li id="menu-item-1620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1620">
                  <Link to="rooms/grand-2-queen" data-id="1620" className="animsition-link">Grand 2 Queen</Link>
                </li>
                <li id="menu-item-1621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1621">
                  <Link to="/rooms/standard/" data-id="1621" className="animsition-link">Standard</Link>
                </li>
                <li id="menu-item-1622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1622">
                  <Link to="/rooms/mini/" data-id="1622" className="animsition-link">Mini</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-1624" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1624">
              <Link to="/food-drink" data-id="1624" className="animsition-link">Food + Drink</Link>
              <ul className="sub-menu">
                <li id="menu-item-1625" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625">
                  <Link to="/food-drink/food-marchand/" data-id="1625" className="animsition-link">The Food Marchand</Link>
                </li>
                <li id="menu-item-1626" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626">
                  <Link to="/food-drink/minibar/" data-id="1626" className="animsition-link">Minibar</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-1461" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461">
              <Link to="/kitesurf" data-id="1461" className="animsition-link">KiteSurf</Link>
            </li>
            <li id="menu-item-2298" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2298">
              <Link to="/gallery/" data-id="2298" className="animsition-link">Gallery</Link>
            </li>
            <li id="menu-item-2122" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2122">
              <Link to="/contact" data-id="2122" className="animsition-link">Contact</Link>
            </li>
          </ul>

          <ul id="menu-meridian-slide-menu-1" className="nav-slider__menu nav-slider__menu--mobile">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1607">
              <Link to="/rooms" data-id="1607" className="animsition-link">Our Rooms</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608">
                  <Link to="/rooms/the-terrace/" data-id="1608" className="animsition-link">The Terrace</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609">
                  <Link to="/rooms/club/" data-id="1609" className="animsition-link">Club</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610">
                  <Link to="/rooms/club-2-full/" data-id="1610" className="animsition-link">Club 2 Full</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1619">
                  <Link to="/rooms/grand/" data-id="1619" className="animsition-link">Grand Room</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1620">
                  <Link to="/rooms/grand-2-queen/" data-id="1620" className="animsition-link">Grand 2 Queen</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1621">
                  <Link to="/rooms/standard/" data-id="1621" className="animsition-link">Standard</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1622">
                  <Link to="/rooms/mini/" data-id="1622" className="animsition-link">Mini</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1624">
              <Link to="/food-drink/" data-id="1624" className="animsition-link">Food + Drink</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625">
                  <Link to="/food-drink/food-marchand/" data-id="1625" className="animsition-link">The Food Marchand</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626">
                  <Link to="/food-drink/minibar/" data-id="1626" className="animsition-link">Minibar</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461">
              <Link to="/kitesurf" data-id="1461" className="animsition-link">Kitesurf</Link>
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
            <li id="menu-item-2389" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2389">
              <Link to="/" className="animsition-link">The Resorts</Link>
            </li>
            <li id="menu-item-2390" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2390">
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
