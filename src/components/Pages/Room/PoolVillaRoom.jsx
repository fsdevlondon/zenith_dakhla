import React from 'react';
import { Link } from 'react-router-dom';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/unnamed-1.jpg';

const LoftRoom = () => (
  <div className="page-template page-template-page-templates page-template-page-detail page-template-page-templatespage-detail-php page page-id-435 page-child parent-pageid-360 tribe-js">
    <div className="animsition" style={{animationDuration: '1500ms', opacity: 1}}>
      <div className="wrapper">
        <div className="wrapper__background-pattern"/>
        <div className="banner banner--70 banner-mobile--70" style={{height: '659.4px'}}>
          <div className="banner__slanted-box">
            <div className="banner__slanted-img">
            </div>
          </div>
          <div className="banner__close btn--hvr-fade">
            <Link to="/rooms">
              <img src={xMark} alt="x mark"/>
            </Link>
          </div>
          <div className="banner__image-wrap banner__image-desktop ">
            <div className="banner__image" style={{backgroundImage: `url('${image001}')`}}/>
          </div>
          <div className="banner__image-wrap banner__image-mobile ">
            <div className="banner__image" style={{backgroundImage: `url('${image001}')`}}/>
          </div>
        </div>
        <div className="section">
          <div className="rooms-popup-content col-container fadein-slideready fadein-slideup">
            <div className="rooms-popup-content__headings">
              <span className="rooms-popup-content__subtitle">Just Like Home</span>
              <h1 className="rooms-popup-content__title">The Terrace</h1>
            </div>
            <div className="col-60 valign-top">
              <p><span>Sitting atop The Meridian, The Terrace Rooms are our exclusive villa style units that come complete with large private Terraces that boast views of South Beach and our surrounding lush neighborhood.<br/>
                Your space is designed with natural elements including a natural oak desk &amp; personal espresso machine, a walk-in shower and C.O. Bigelow bath products.<br/>
              </span></p>
              <a href="#" className="btn btn--hvr-fade" target="_self">RESERVE</a>
            </div>
            <div className="col-40 valign-top">
              <div className="bulleted-list ">
                <ul>
                  <li>Private Terrace with Outdoor Furniture and Shower.</li>
                  <li>1 King bed</li>
                  <li>Air Conditioned</li>
                  <li>Mini Refrigerator</li>
                  <li>Espresso Machine</li>
                  <li>Safe, in room, laptop size</li>
                  <li>Iron and ironing board</li>
                  <li>Wi-Fi Internet Access</li>
                  <li>Phone</li>
                  <li>TV LED 48” w/Satellite Cable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoftRoom;
