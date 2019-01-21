import React from 'react';
import { Link } from 'react-router-dom';
import Spherical001 from '../../assets/img/Spherical-Urbanica-0125.jpg';
import Spherical002 from '../../assets/img/Spherical-Urbanica-9868_edit.jpg';
import Spherical003 from '../../assets/img/kitecenter.jpg';
import Spherical004 from '../../assets/img/camp2.jpg';

const Rooms = () => (
  <div className="photo-content-double-slider fadein-slideready fadein-slideup">
    <div className="photo-content-double-slider__items photo-content-double-slider-js owl-carousel owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2870px'}}>
          <div className="owl-item active" style={{width: '1435px'}}>
            <div className="photo-content-double-slider__item">
              <div className="photo-content-double-slider__images">
                <div className="photo-content-double-slider__image photo-content-double-slider__image--left">
                  <img src={Spherical001} alt="spherical-urbanica-0125"/>
                </div>

                <div className="photo-content-double-slider__image photo-content-double-slider__image--right">
                  <img src={Spherical002} alt="spherical-urbanica-9868_edit"/>
                </div>
              </div>

              <div className="photo-content-double-slider__content">
                <div className="photo-content-double-slider__content-innerwrap">
                  <span className="photo-content-double-slider__counter">01</span>
                  <span className="photo-content-double-slider__subtitle">Simple details are our luxury</span>
                  <h2 className="photo-content-double-slider__title">Rooms + Suites</h2>
                  <p><span style={{fontWeight: 400}}>All rooms feature natural wood elements that stand out against a white palate, creating the feeling of Dakhla at the desert beach.&nbsp;</span>
                    <span style={{fontWeight: 400}}>The bed is truly the centerpiece of the room, and its comfort is one of our best amenities. </span>
                  </p>
                  <p>.</p>
                  <div className="photo-content-double-slider__btn-container">
                    <Link className="link" to="/rooms"><span>View Rooms</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-item" style={{width: '1435px'}}>
            <div className="photo-content-double-slider__item">
              <div className="photo-content-double-slider__images">
                <div className="photo-content-double-slider__image photo-content-double-slider__image--left">
                  <img src={Spherical003} alt="spherical-urbanica-0399"/>
                </div>
                <div className="photo-content-double-slider__image photo-content-double-slider__image--right">
                  <img src={Spherical004} alt="spherical-urbanica-hotels-meridian-south-beach_bar_02b-2"/>
                </div>
              </div>

              <div className="photo-content-double-slider__content">
                <div className="photo-content-double-slider__content-innerwrap">
                  <span className="photo-content-double-slider__counter">02</span>
                  <span className="photo-content-double-slider__subtitle">Have Fun </span>
                  <h2 className="photo-content-double-slider__title">Kite + Events</h2>
                  <p>Our Kite school is next to the hotel. Experienced instructors and brand new equipment, combined with perfect beginner and intermediate conditions in a flat-water lagoon directly at your hotel makes for the easiest way to learn kitesurfing.
                    There is a motorboat ready for downwind excursions or every situation where it might be needed.<br/>
                    The weekly excursion to the white dune is included in your travel price.<br/>
                    You can store your own equipment at the centre and our energetic assistants are always ready to help launching and landing your kite (always included in the price).<br/>
                    Activity-guarantee for all guests
                    In the rare case of windless days we offer an alternative program for all of our guests: Surfing, Stand-Up paddeling (SUP) and other excursions for no extra charge.</p>
                  <div className="photo-content-double-slider__btn-container">
                    <Link className="link" to="/"><span>Learn More </span></Link>
                  </div>
                </div>
              </div>
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

    <div className="photo-content-double-slider__nav">
      <div className="photo-content-double-slider__nav-prev disabled">
        <i className="ion ion ion-md-arrow-dropleft"/>
      </div>
      <div className="photo-content-double-slider__nav-next">
        <i className="ion ion ion-md-arrow-dropright"/>
      </div>
    </div>
  </div>
);

export default Rooms;

/*
          <div className="owl-item" style={{width: '1435px'}}>
            <div className="photo-content-double-slider__item">
              <div className="photo-content-double-slider__images">
                <div className="photo-content-double-slider__image photo-content-double-slider__image--left">
                  <img src={Spherical003} alt="spherical-urbanica-0399"/>
                </div>
                <div className="photo-content-double-slider__image photo-content-double-slider__image--right">
                  <img src={Spherical004} alt="spherical-urbanica-hotels-meridian-south-beach_bar_02b-2"/>
                </div>
              </div>

              <div className="photo-content-double-slider__content">
                <div className="photo-content-double-slider__content-innerwrap">
                  <span className="photo-content-double-slider__counter">02</span>
                  <span className="photo-content-double-slider__subtitle">Eat Well </span>
                  <h2 className="photo-content-double-slider__title">Food + Drink</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur enim ut arcu
                    accumsan, sit amet iaculis eros malesuada. Nam euismod volutpat orci sed malesuada. Nullam id
                    luctus nibh, ac condimentum risus. Sed feugiat urna in mauris gravida semper. Donec dui
                    mauris, consequat ut nunc quis, tincidunt vulputate nisl. Aliquam vitae facilisis ante. Morbi
                    nisl erat, ut pretium urna laoreet sit amet.</p>
                  <div className="photo-content-double-slider__btn-container">
                    <Link className="link" to="/"><span>Learn More </span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>



          */