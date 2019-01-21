import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/villa-in2.jpg';

class VillaRoom extends Component {
  componentDidMount() {
    if (window) {
      window.addBtnReseve();
      window.scrollTo(0,0);
    }
  }

  render () {
    return (
      <div
        className="page-template page-template-page-templates page-template-page-detail page-template-page-templatespage-detail-php page page-id-435 page-child parent-pageid-360 tribe-js">
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
                  <h1 className="rooms-popup-content__title">The Villa</h1>
                </div>
                <div className="col-60 valign-top">
                  <p>The six mini villas are lined up just next to each other. Thanks to fascinating architecture all
                    bedrooms and terraces offer you a view to the lagoon without having your privacy disturbed.</p>
                  <p>The mini villas consist of a very ample bedroom, which, based on request, can be equipped with
                    different beds; a double bed with a comfortable 160cm wide mattress, an additional large single
                    bed for triple occupancy or two single beds to create a twin room. A writing desk with cupboards
                    and bedside tables makes your bedroom complete.<br/>
                    In the back part of the villas you will find a spacious shower and a second room with the WC.
                    Behind this is a dressing room with two separate sinks and trays.<br/>
                    The absolute highlight is the additional, roofless outside bathing area with a large bathtub and a
                    rainforest shower.</p>
                  <div className="btn btn--hvr-fade hotelRunnerReserveBtn">RESERVE</div>
                </div>
                <div className="col-40 valign-top">
                  <div className="bulleted-list ">
                    <ul>
                      <li>Private Terrace with Outdoor Furniture, Shower and Jacuzzi for two.</li>
                      <li>Raining shower</li>
                      <li>1 King bed or 3 singles</li>
                      <li>1 couch</li>
                      <li>Mini Refrigerator</li>
                      <li>Wardrobe</li>
                      <li>Safe, in room, laptop size</li>
                      <li>Deluxe bathrobes</li>
                      <li>Wi-Fi Internet Access</li>
                      <li>Morning views to the dunes</li>
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

export default VillaRoom;
