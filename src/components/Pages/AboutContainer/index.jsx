import React, { Fragment } from 'react';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import Spherical001 from '../../../assets/img/Spherical-Urbanica-9593-1.jpg';
import Spherical002 from '../../../assets/img/Spherical-Urbanica-0234.jpg';
import Spherical003 from '../../../assets/img/Spherical-Urbanica-0071.jpg';
import Spherical004 from '../../../assets/img/Spherical-Urbanica-9642-small.png';
import Spherical005 from '../../../assets/img/Spherical-Urbanica-0563-e1539553484790.jpg';
import Spherical006 from '../../../assets/img/Spherical-Urbanica-0616-e1539588109901.jpg';
import Spherical007 from '../../../assets/img/DSC_53329small.jpg';
import Spherical008 from '../../../assets/img/Brand-Home_Image-1-1-e1539588254127.jpg';
import Spherical009 from '../../../assets/img/Spherical-Urbanica-0447-small-e1539588160877.png';
import Spherical010 from '../../../assets/img/Spherical-Urbanica-9991-e1539117553769.jpg';
import Spherical011 from '../../../assets/img/Spherical-Urbanica-0418-e1539588427506.jpg';

const AboutContainer = () => (
  <Fragment>
    <NavHeader />
    <div className="nav-block"/>
    <div className="section section--background-left">
        <div className="step-imagecon">
          <div className="step-imagecon__header fadein-slideready fadein-slideup">
            <h1 className="step-imagecon__subtitle">A Sense of Belonging.</h1>
            <h2 className="step-imagecon__title">About Urbanica The Hotels </h2>
          </div>
          <div className="step-imagecon__content fadein-slideready fadein-slideup">
            <h4 className="special-title">A Strong Sense of Purpose</h4>
            <p>As travelers, we believe that a hotel should make you feel as comfortable as your own home and so we make
              sure that we offer everything you need and some things you don’t expect; a healthy meal, a great night’s
              sleep, some of the creature comforts that make your stay relaxing &amp; memorable. A feeling of family and
              belonging that makes you say “Wow” I’m Home!</p>
            <p>&nbsp;</p>
          </div>
          <div className="step-imagecon__images fadein-slideready fadein-slideup">
            <div className="step-imagecon__container">
              <div className="step-imagecon__imagebox" style={{marginTop: '-137.8px'}}>
                <img src={{Spherical001}}
                     alt="spherical-urbanica-9593-2"/>
              </div>
              <div className="step-imagecon__imagebox">
                <img src={{Spherical002}}
                     alt="spherical-urbanica-0234"/>
              </div>
              <div className="step-imagecon__imagebox" style={{marginTop: '103.35px'}}>
                <img src={{Spherical003}}
                alt="spherical-urbanica-0071"/>
              </div>
              <div className="clear"/>
            </div>
          </div>
        </div>
        <div className="intro-content intro-content--80 fadein-slideready fadein-slideup">
          <h2 className="intro-content__subtitle"/>
          <h2 className="intro-content__title">It’s all about the people</h2>
          <div className="intro-content__content ">
            <p style={{textAlign: 'center'}}>Not just rooms, not just a café or another restaurant, Urbanica is a place to
              meet friends or just relax, hangout and of course come have a bite to eat and a drink. We are immersed in
              the local culture. We are friends of the neighborhood. Even our staff is right around the block.</p>
          </div>
        </div>
        <div className="flexim-slider flexim-slider--desktop fadein-slideready fadein-slideup">
          <div className="flexim-slider__boxxy">
            <div className="flexim-slider__container" style={{width: '4123.47px'}}>
              <div className="flexim-slider__imagebox">
                <img
                  src={{Spherical004}}
                  alt="spherical-urbanica-9642-small"/>
              </div>
              <div className="flexim-slider__imagebox">
                <img
                  src={{Spherical005}}
                  alt="spherical-urbanica-0563"/>
              </div>
              <div className="flexim-slider__imagebox">
                <img
                  src={{Spherical006}}
                  alt="spherical-urbanica-0616"/>
              </div>
              <div className="flexim-slider__imagebox">
                <img src={{Spherical007}}
                     alt="dsc_53329small"/>
              </div>
              <div className="flexim-slider__imagebox">
                <img
                  src={{Spherical008}}
                  alt="brand-home_image-1-2"/>
              </div>
              <div className="flexim-slider__imagebox">
                <img
                  src={{Spherical009}}
                  alt="spherical-urbanica-0447-small"/>
              </div>

            </div>
          </div>
        </div>
        <div className="flexim-slider flexim-slider--mobile fadein-slideready fadein-slideup">
          <div className="flexim-slider__boxxy">
            <div className="flexim-slider__container flexim-slider__container-js slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: 1, width: '0px', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical009}}
                          alt="spherical-urbanica-0447-small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical004}}
                          alt="spherical-urbanica-9642-small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical005}}
                          alt="spherical-urbanica-0563"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical006}}
                          alt="spherical-urbanica-0616"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img src={{Spherical007}}
                             alt="dsc_53329small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical008}}
                          alt="brand-home_image-1-2"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="5" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical009}}
                          alt="spherical-urbanica-0447-small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical004}}
                          alt="spherical-urbanica-9642-small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical005}}
                          alt="spherical-urbanica-0563"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical006}}
                          alt="spherical-urbanica-0616"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img src={{Spherical007}}
                             alt="dsc_53329small"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical008}}
                          alt="brand-home_image-1-2"/>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabIndex="-1" style={{width: '0px'}}>
                    <div>
                      <div className="flexim-slider__imagebox" style={{width: '100%', display: 'inline-block'}}>
                        <img
                          src={{Spherical009}}
                          alt="spherical-urbanica-0447-small"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-content ">
          <div className="photo-content__container ">
            <div className="photo-content__item    photo-content__item--right fadein-slideready fadein-slideup" data-time="">
              <div className="photo-content__content-block photo-content__content-block--left">
                <span className="photo-content__subtitle">WE ARE LOCAL</span>
                <span className="photo-content__title">Explore Guides</span>
                <p>Guides to our favorite places close by. We’ve compiled a list so that you can experience the
                  neighborhood as we do.</p>
                <div className="photo-content__links">
                  <div className="photo-content__link">
                    <a href="#" className="btn btn--plain btn--text-black valign-bottom"><span>View Guides</span></a>
                  </div>
                </div>
              </div>
              <div className="photo-content__imglist">
                <div className="photo-content__img">
                  <img className="img-desktop"
                       src={{Spherical010}}
                       alt="spherical-urbanica-9991"/>
                  <img className="img-mobile"
                       src={{Spherical010}}
                       alt="spherical-urbanica-9991"/>
                </div>
              </div>
              <div className="photo-content__content-block photo-content__content-block--right">
                <span className="photo-content__subtitle">WE ARE LOCAL</span>
                <span className="photo-content__title">Explore Guides</span>
                <p>Guides to our favorite places close by. We’ve compiled a list so that you can experience the
                  neighborhood as we do.</p>
                <div className="photo-content__links">
                  <div className="photo-content__link">
                    <a href="#" className="btn btn--plain btn--text-black valign-bottom"><span>View Guides</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-contdo">
          <div className="photo-contdo__container">
            <div className="photo-contdo__content photo-contdo__content--desktop fadein-slideready fadein-slideup">
              <span className="photo-contdo__subtitle">Meaningful Partnerships</span>
              <span className="photo-contdo__title">Lasting Relationships</span>
              <p>The Hotel belongs to the neighborhood. We create a sense of community by inviting our neighbors in to
                take part of our ambiance. You may be sitting having breakfast next to someone from across the world or
                someone from down the block. Either way, our goal is to create lasting relationships and to make you
                feel as though Urbanica is your home away from home.</p>
              <div className="photo-contdo__logo" />
            </div>

            <div className="photo-contdo__imglist fadein-slideready fadein-slideup">
              <div className="photo-contdo__imagebox">
                <img src={{Spherical003}}
                     alt="spherical-urbanica-0071-3"/>
              </div>
              <div className="photo-contdo__imagebox">
                <img
                  src={{Spherical011}}
                  alt="spherical-urbanica-0418"/>
              </div>
              <div className="photo-contdo__btn">
                <div className="photo-contdo__btnbox">
                  <div className="photo-contdo__btn-label">
                    <span>Partner With us</span>
                  </div>
                  <a href="#"/>
                </div>
                <div className="clear"/>
              </div>
            </div>

            <div className="photo-contdo__content photo-contdo__content--mobile fadein-slideready fadein-slideup">
              <span className="photo-contdo__subtitle">Meaningful Partnerships</span>
              <span className="photo-contdo__title">Lasting Relationships</span>
              <p>The Hotel belongs to the neighborhood. We create a sense of community by inviting our neighbors in to
                take part of our ambiance. You may be sitting having breakfast next to someone from across the world or
                someone from down the block. Either way, our goal is to create lasting relationships and to make you
                feel as though Urbanica is your home away from home.</p>
              <div className="photo-contdo__logo" />
            </div>
          </div>
        </div>
    </div>
    <Footer/>
  </Fragment>
);

export default AboutContainer;