import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/riad-in.jpg';

class RiadRoom extends Component {
  componentDidMount() {
    if (window) {
      window.addBtnReseve();
      window.scrollTo(0, 0);
    }
  }

  render() {
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
                  <h1 className="rooms-popup-content__title">The Riad</h1>
                </div>
                <div className="col-60 valign-top">
                  <p>Besides the mini villas, we have built a new Riad for you. A Riad is a small townhouse built
                    mainly for wealthy families. We used this construction type and converted it into a hotel. Here
                    you will stay with Kitesurfers from all over the world, creating a very special atmosphere. It has
                    been decorated&nbsp;with lots of love and with a Moroccan feel and charm, from the&nbsp;smoothly
                    plastered sand colored walls and the warm lighting .</p>
                  <p>It is a building consisting of one floor with&nbsp;6 rooms built around a courtyard.Each room has
                    its own ensuite bathroom. They are situated behind a partition wall with a spacious shower.<br/>
                    The rooms are smaller than the mini villas, but still with ample space for you and your
                    belongings.<br/>
                    In the middle of the Riad you will find a big open court with a lot of plants, where you can
                    relax and recuperate after a day on the water. &nbsp;This is a great value alternative to the mini
                    villas</p>
                  <div className="btn btn--hvr-fade hotelRunnerReserveBtn">RESERVE</div>
                </div>
                <div className="col-40 valign-top">
                  <div className="bulleted-list ">
                    <ul>
                      <li>1 King bed or 3 singles</li>
                      <li>Wi-Fi Internet Access</li>
                      <li>Deluxe bathrobes</li>
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

export default RiadRoom;
