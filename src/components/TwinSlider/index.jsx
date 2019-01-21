import React from 'react';
import Spherical0447 from '../../assets/img/footable.jpg';
import Spherical0448 from '../../assets/img/pool-vertical-min.jpg';
import Spherical0509 from '../../assets/img/drone-villas.jpg';
import Spherical0510 from '../../assets/img/kite-core.jpg';
import amapaLogo from '../../assets/img/hotel_amapa_logo.png';

const TwinSlider = () => (
  <div className="twin-slider">
    <div className="twin-slider__numbers">
      <i className="ion ion-arrow-left-b"/>
      <span>23.9139° N, 15.7812° W</span>
    </div>

    <div className="twin-slider__left fadein-slideready fadein-slideup">
      <div className="twin-slider__imglist twin-slider-left-js owl-carousel drag drag-left owl-loaded">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={{transform: 'translate3d(-1722px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '3444px'}}>
            <div className="owl-item cloned" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0447} alt="spherical-urbanica-0447"/>
                <img className="img-mobile" src={Spherical0447} alt="spherical-urbanica-0447"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0448} alt="spherical-urbanica-9593"/>
                <img className="img-mobile" src={Spherical0448} alt="spherical-urbanica-9593-2"/>
              </div>
            </div>
            <div className="owl-item" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0447} alt="spherical-urbanica-0447"/>
                <img className="img-mobile" src={Spherical0447} alt="spherical-urbanica-0447"/>
              </div>
            </div>
            <div className="owl-item active" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0448} alt="spherical-urbanica-9593"/>
                <img className="img-mobile" src={Spherical0448} alt="spherical-urbanica-9593-2"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0447} alt="spherical-urbanica-0447"/>
                <img className="img-mobile" src={Spherical0447} alt="spherical-urbanica-0447"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '574px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0448} alt="spherical-urbanica-9593"/>
                <img className="img-mobile" src={Spherical0448} alt="spherical-urbanica-9593-2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
          <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
        </div>
        <div className="owl-dots disabled"/>
      </div>
    </div>

    <div className="twin-slider__right fadein-slideready fadein-slideup">
      <div className="twin-slider__right-logo fadein-slideready fadein-slideup">
        <img src={amapaLogo} alt="logo"/>
      </div>

      <div className="twin-slider__imglist twin-slider-right-js owl-carousel drag drag-right owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={{transform: 'translate3d(-1446px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '2892px'}}>
            <div className="owl-item cloned" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
                <img className="img-mobile" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0510} alt="spherical-urbanica-0614"/>
                <img className="img-mobile" src={Spherical0510} alt="spherical-urbanica-0614"/>
              </div>
            </div>
            <div className="owl-item" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
                <img className="img-mobile" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
              </div>
            </div>
            <div className="owl-item active" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0510} alt="spherical-urbanica-0614"/>
                <img className="img-mobile" src={Spherical0510} alt="spherical-urbanica-0614"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
                <img className="img-mobile" src={Spherical0509} alt="spherical-urbanica-0509-2"/>
              </div>
            </div>
            <div className="owl-item cloned" style={{width: '482px'}}>
              <div className="twin-slider__img">
                <img className="img-desktop" src={Spherical0510} alt="spherical-urbanica-0614"/>
                <img className="img-mobile" src={Spherical0510} alt="spherical-urbanica-0614"/>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
          <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
        </div>
        <div className="owl-dots disabled"/>
      </div>
    </div>

    <div className="twin-slider__nav-caption fadein-slideready fadein-slideup">
      <div className="twin-slider__nav">
        <div className="twin-slider__nav-prev">
          <i className="ion ion-md-arrow-dropleft"/>
        </div>
        <div className="twin-slider__nav-next">
          <i className="ion ion-md-arrow-dropright"/>
        </div>
      </div>
      <div className="twin-slider__captions">
        <span className="twin-slider__caption twin-slider__caption--active">Good Vibes in Dakhla</span>
        <span className="twin-slider__caption">Good Vibes in Dakhla</span>
      </div>
    </div>
  </div>
);

export default TwinSlider;
