import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import xMark from '../../../assets/img/'; // https://www.urbanicathehotels.com/wp-content/themes/amapa/images/x_mark.png
import resizeIcon from '../../../assets/img/'; // https://hotelamapa.compass.sphrcl.co/wp-content/themes/amapa/images/contact_resize_icon.png
import Spherical001 from '../../../assets/img/'; // https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0320.jpg

const ContactContainer = () => (
  <Fragment>
    <NavHeader />
    <div className="wrapper__background-pattern"/>
    <div className="nav-block"/>
    <div className="banner banner--100 banner-mobile--100 banner--spacing" style={{height: '822px'}}>
      <div className="banner__slanted-box">
        <div className="banner__slanted-img">
        </div>
      </div>
      <div className="banner__close btn--hvr-fade">
        <Link to="/">
          <img src={xMark} alt="x mark"/>
        </Link>
      </div>
      <div className="banner__image-wrap banner__image-desktop ">
        <div className="banner__image" style={{backgroundImage: `url('${Spherical001}')`}}/>
      </div>
      <div className="banner__image-wrap banner__image-mobile ">
        <div className="banner__image" style={{backgroundImage: `url('${Spherical001}')`}}/>
      </div>
      <div className="banner__booking-widget">
        <div className="booking-widget">
          <div className="booking-widget__text">
            <p/>
          </div>
          <div className="booking-widget__wrap">
            <div className="booking-widget__border">
              <form className="booking-widget__form formy">
                <input type="hidden" name="Hotel" value="5108"/>
                <div className="formy__row">
                  <div className="formy__col formy__col--33 formy__col--noresize-mobile">
                    <div className="formy__datepicker">
                      <div className="formy__datepicker-text">
                        <div>
                          <input type="text" className="formy__datepicker--banner-inline hasDatepicker"
                                 id="banner_inline_reserve_arrive_text" placeholder="Arrive"/>
                          <input type="text" className="formy__datepicker--overlay"
                                   id="overlay_reserve_arrive_text" placeholder="Arrive"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="formy__col formy__col--33 formy__col--noresize-mobile">
                    <div className="formy__datepicker">
                      <div className="formy__datepicker-text">
                        <div>
                          <input type="text" className="formy__datepicker--banner-inline hasDatepicker"
                                 id="banner_inline_reserve_depart_text" placeholder="Depart"/>
                          <input type="text" className="formy__datepicker--overlay"
                                 id="overlay_reserve_depart_text" placeholder="Depart"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="formy__col formy__col--33 formy__col--noresize-mobile formy__col--end">
                    <div className="formy__select">
                      <div className="formy__select-text">
                        <div>Adults</div>
                      </div>
                      <div className="formy__select-options">
                        <div className="formy__select-option" data-value="1">1 Adult</div>
                        <div className="formy__select-option" data-value="2">2 Adults</div>
                        <div className="formy__select-option" data-value="3">3 Adults</div>
                        <div className="formy__select-option" data-value="4">4 Adults</div>
                      </div>
                      <input type="hidden" name="adult" value="1"/>
                    </div>
                  </div>
                  </div>
                  <div className="clear"/>
                  <div className="booking-widget__reserve">
                    <button className="btn btn--round btn--brown hvr-sweep-to-right" type="submit">Reserve</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section section--background-left">
      <div className="intro-content  fadein-slideready fadein-slideup">
        <h2 className="intro-content__subtitle"/>
        <h1 className="intro-content__title">Contact</h1>
        <div className="intro-content__content ">
          <p style={{textAlign: 'center'}}>Reservations:&nbsp;+212 653-624584</p>
          <div role="form" className="wpcf7" id="wpcf7-f401-o1" lang="en-US" dir="ltr">
            <div className="screen-reader-response"/>
            <form method="post" className="wpcf7-form" noValidate="novalidate">
              <div className="formy">
                <div className="formy__row">
                  <div className="formy__col formy__col--50"><span className="wpcf7-form-control-wrap firstname"><input
                    type="text" name="firstname" value="" size="40"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required formy__input"
                    aria-required="true" aria-invalid="false" placeholder="First Name"/></span></div>
                  <div className="formy__col formy__col--50"><span className="wpcf7-form-control-wrap lastname"><input
                    type="text" name="lastname" value="" size="40"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required formy__input"
                    aria-required="true" aria-invalid="false" placeholder="Last Name"/></span></div>
                </div>
                <div className="formy__row">
                  <div className="formy__col formy__col--50 formy__col--end"><span
                    className="wpcf7-form-control-wrap email"><input type="text" name="email" value="" size="40"
                                                                     className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required formy__input"
                                                                     aria-required="true" aria-invalid="false"
                                                                     placeholder="Email"/></span></div>
                  <div className="formy__col formy__col--50"><span className="wpcf7-form-control-wrap phone"><input
                    type="number" name="phone" value=""
                    className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number formy__input"
                    aria-invalid="false" placeholder="Phone"/></span></div>
                  <div className="clear"/>
                </div>
                <div className="formy__row">
                  <div className="formy__col formy__col--100 formy__col--end">
                    <div className="formy__textarea">
                      <span className="wpcf7-form-control-wrap message"><textarea name="message" cols="40" rows="10"
                                                                                  className="wpcf7-form-control wpcf7-textarea formy__textarea"
                                                                                  aria-invalid="false"
                                                                                  placeholder="Message"/></span>
                      <p></p>
                      <div className="formy__textarea-resize-icon">
                        <img src={resizeIcon} alt="resize icon"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formy__row formy__row--submit">
                  <div className="formy__col formy__col--100 formy__col--end">
                    <div className="formy__submit formy__submit--hover">
                      <input type="submit" value="Submit" className="wpcf7-form-control wpcf7-submit formy__submit"/>
                      <span className="ajax-loader"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpcf7-response-output wpcf7-display-none"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-block"/>
    <Footer/>
  </Fragment>
);

export default ContactContainer;
