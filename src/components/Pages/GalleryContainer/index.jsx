import React, { Fragment } from 'react';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import expandIcon from '../../../assets/img/expandicon.png';
import image001 from '../../../assets/img/Spherical-Urbanica-9593-1.jpg';
import image002 from '../../../assets/img/Spherical-Urbanica-9856small.png';
import image003 from '../../../assets/img/Spherical-Urbanica-0399-1.jpg';
import image004 from '../../../assets/img/Spherical-Urbanica-0629.jpg';
import image005 from '../../../assets/img/Spherical-Urbanica-9984.jpg';
import image006 from '../../../assets/img/Spherical-Urbanica-0135-1.jpg';
import image007 from '../../../assets/img/Spherical-Urbanica-Hotels-Meridian-South-Beach_Exterior_01.jpg';

const GalleryContainer = () => (
  <Fragment>
    <NavHeader />
    <div className="wrapper__background-pattern"/>
    <div className="nav-block"/>
    <div className="section section--background-left">
      <div className="intro-content  fadein-slideready fadein-slideup">
        <h2 className="intro-content__subtitle"/>
        <h1 className="intro-content__title">Gallery</h1>
      </div>
      <div className="filters fadein-slideready fadein-slideup">
        <ul>
          <li className="filters__item  filters__item--active active" data-filter="iso-hotel"><a href="#">Hotel</a></li>
          <li className="filters__item " data-filter="iso-rooms"><a href="#">Rooms</a></li>
          <li className="filters__item " data-filter="iso-food-drink"><a href="#">Food + Drink</a></li>
          <li className="filters__item " data-filter="iso-neighborhood"><a href="#">Neighborhood</a></li>
        </ul>
      </div>
    </div>
    <div className="section">
      <div className="gallery gallery--desktop" style={{position: 'relative', height: '7349.65px'}}>
        <div className="gallery__gutter"/>
        <div className="gallery__item  iso-hotel" style={{position: 'absolute', left: '0%', top: '0px'}}>
          <img src={image001} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image001}
               title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item gallery__item--half iso-rooms" style={{position: 'absolute', left: '0%', top: '2715px'}}>
          <img src={image002} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image002} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item gallery__item--half iso-food-drink" style={{position: 'absolute', left: '50.5203%', top: '2715px'}}>
          <img src={image003} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image003} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item  iso-neighborhood" style={{position: 'absolute', left: '0%', top: '4059px'}}>
          <img src={image004} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image004} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item gallery__item--half iso-neighborhood"
             style={{position: 'absolute', left: '0%', top: '3260px'}}>
          <img src={image005} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image005} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item gallery__item--half iso-rooms" style={{position: 'absolute', left: '0%', top: '5282px'}}>
          <img src={image006} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image006} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
        <div className="gallery__item  iso-Hotel" style={{position: 'absolute', left: '0%', top: '5895px'}}>
          <img src={image007} alt="" className="fadein-slideready fadein-slideup"/>
          <div className="gallery__item-expander">
            <a href={image007} title="" className="dropanchor">
              <div className="gallery__item-shade"/>
              <div className="gallery__item-caption">
                <h3/>
              </div>
              <div className="gallery__item-expandicon">
                <img src={expandIcon} alt="Expand Icon"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-block"/>
    <Footer/>
  </Fragment>
);

export default GalleryContainer;
