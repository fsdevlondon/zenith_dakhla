import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/unnamed-1.jpg';

class LoftRoom extends Component {
  componentDidMount() {
    if (window) {
      window.addBtnReseve();
      window.scrollTo(0,0);
    }
  }

  render () {
    return (
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
                  <h1 className="rooms-popup-content__title">The Loft</h1>
                </div>
                <div className="col-60 valign-top">
                  <p>Loft room is actually a little understated for what we have built in Dakhla. These are not only rooms, but rather absolute luxury loft apartments with two rooms and a large bathroom including an outside area.</p>
                  <p>Start your kitesurfing day relaxed and check out the wind and the spot from your giant double bed. Afterwards or after your session on the lagoon you can enjoy your very own Jacuzzi. You have read correctly. Not one Jacuzzi for all loft rooms, but each apartment has its own Jacuzzi. Pure luxury!</p>
                  <div className="btn btn--hvr-fade hotelRunnerReserveBtn">RESERVE</div>
                </div>
                <div className="col-40 valign-top">
                  <div className="bulleted-list ">
                    <ul>
                      <li>Private Terrace with Outdoor Furniture, Sun Bed and Shower.</li>
                      <li>Private Indoor Jacuzzi for two</li>
                      <li>Raining shower</li>
                      <li>1 King bed</li>
                      <li>1 couch</li>
                      <li>Mini Refrigerator</li>
                      <li>Espresso Machine</li>
                      <li>Generous wardrobe</li>
                      <li>Safe, in room, laptop size</li>
                      <li>Deluxe bathrobes</li>
                      <li>Wi-Fi Internet Access</li>
                      <li>Morning views to the dunes with privacy glass</li>
                      <li>Complimentary hair dryer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoftRoom;
