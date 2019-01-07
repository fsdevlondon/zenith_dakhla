import React, { Component } from 'react';
import logo from '../../assets/zenith_big_logo.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { newsletter_fullname: '', newsletter_email: '' };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  sendSignupForm = () => {
    const { newsletter_fullname, newsletter_email } = this.state;
    const url = 'https://script.google.com/macros/s/AKfycbzjWRtA2shub150D7ZfdfsuBxALCL1nSu1fTkIInHM61gBGo4El/exec';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newsletter_fullname, newsletter_email })
    }).then(console.log).catch(console.log)
  }

  render() {
    return (
      <div className="footer fadein-slideready">
        <div className="instagram">
          <div id="instagram__list" className="instagram__list instagram-carousel owl-carousel owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage"/>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled"/>
          </div>
        </div>
        <div className="newsletter">
          <div className="newsletter__text">
            <p>Sign up for offers &amp; packages</p>
          </div>

          <div className="newsletter__form">
            <form>
              <div className="newsletter__fieldbox">
                <div className="newsletter__field">
                  <input type="text" name="newsletter_fullname" id="newsletter_fullname" className="newsletter__input"
                         placeholder="FULL NAME"
                         onChange={this.handleChange}/>
                </div>
                <div className="newsletter__field">
                  <input type="text" name="newsletter_email" id="newsletter_email" className="newsletter__input"
                         placeholder="YOUR EMAIL"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="newsletter__submit">
                <button type="button" className="btn btn--hvr-sweep-to-right" onClick={this.sendSignupForm}>Sign Up</button>
              </div>
            </form>
          </div>


        </div>
        <div className="footer__top-section">
          <div className="footer__logo">
            <a href="https://www.zenithdakhla.com">
              <img src={logo} style={{'max-height': '61px'}} alt="property-logo"/>
            </a>
          </div>

          <div className="footer__contact-info">
            <p>Zenith Dakhla<br/>
              zenith.dakhla@gmail.com<br/>
              +212 653-624584<br/>
              Pk 27 km Al Argoub<br/>
              73000 Dakhla, Morocco</p>
          </div>
        </div>

        <div className="footer__bottom-section">
          <div className="footer__menu">
            <ul id="menu-meridian-footer-menu" className="">
              <li id="menu-item-868" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-868">
                <a
                  href="https://www.zenithdakhla.com/contact" className="animsition-link">CONTACT</a></li>
              <li id="menu-item-2467"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2467"><a
                href="https://www.zenithdakhla.com" className="animsition-link">The Resorts</a></li>
            </ul>
          </div>
          <div className="footer__social-copyright">
            <ul className="footer__socialbox">
              <li><a href="http://www.facebook.com/Zenithdakhla" target="_blank"><i className="fa fa-facebook"></i></a>
              </li>
              <li><a href="http://www.instagram.com/zenithdakhla" target="_blank"><i
                className="fa fa-instagram"></i></a>
              </li>
            </ul>
            <div className="footer__copyright">
              <p className="footer__copyright--original active">Zenith Dakhla <span>© 2019</span></p>
              <p className="footer__copyright--hover">by <a href="https://brolopers.com/" target="_blank">Brolopers</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
