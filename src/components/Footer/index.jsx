import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/zenith_big_logo.jpg';

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

    if (newsletter_fullname && newsletter_email) {
      const url = 'https://script.google.com/macros/s/AKfycbzjWRtA2shub150D7ZfdfsuBxALCL1nSu1fTkIInHM61gBGo4El/exec';
      const urlWithParams = `${url}?newsletter_fullname=${encodeURIComponent(newsletter_fullname)}&newsletter_email=${encodeURIComponent(newsletter_email)}`;
      fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.setState({
          newsletter_fullname: '',
          newsletter_email: ''
        });
      }).catch(console.log);
    }
  }

  render() {
    return (
      <div className="footer fadein-slideready fadein-slideup">
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
            <Link to="/">
              <img src={logo} style={{maxHeight: '61px'}} alt="property-logo"/>
            </Link>
          </div>

          <div className="footer__contact-info">
            <p>Zenith Dakhla<br/>
              book@zenith-dakhla.com<br/>
              +212 653-624584<br/>
              Pk 27 km Al Argoub<br/>
              73000 Dakhla, Morocco</p>
          </div>
        </div>

        <div className="footer__bottom-section">
          <div className="footer__menu">
            <ul id="menu-meridian-footer-menu" className="">
              <li id="menu-item-868" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-868">
                <Link to="/" className="animsition-link">CONTACT</Link>
              </li>
              <li id="menu-item-2467" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2467">
                <Link to="/" className="animsition-link">The Resorts</Link>
              </li>
            </ul>
          </div>
          <div className="footer__social-copyright">
            <ul className="footer__socialbox">
              <li>
                <a href="http://www.facebook.com/Zenithdakhla" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"/>
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com/zenithdakhla" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"/>
                </a>
              </li>
            </ul>
            <div className="footer__copyright">
              <p className="footer__copyright--original active">Zenith Dakhla <span>© 2019</span></p>
              <p className="footer__copyright--hover">by <a href="https://uk.linkedin.com/in/markrivelles" target="_blank" rel="noopener noreferrer">Brolopers</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
