import React from 'react';
//import {  } from './wrappers';

const SectionBoking = () => (
  <div className="content-images-booking">
    <div className="content-images-booking__content-block fadein-slideready fadein-slideup">
      <div className="content-images-booking__heading">
        <span className="content-images-booking__subtitle">Make yourself at home</span>
        <h1 className="content-images-booking__title">See You Soon</h1>
      </div>

      <div className="content-images-booking__content">
        <p>In the tradition of Modern design, all rooms feature minimalist furnishings and luxurious comfort.
          Regardless of the room type you choose, you can expect comfortable accommodations and personalized
          service.</p>
      </div>

      <div className="content-images-booking__booking">
        <div className="booking-widget">
          <div className="booking-widget__text">
            <span>We've got a room and a good time waiting...</span>
          </div>

          <div className="booking-widget__wrap">
            <form className="booking-widget__form" action="https://be.synxis.com/?" method="GET">
              <input type="hidden" name="Hotel" value="5108"/>
              <input type="hidden" name="Chain" value="24140"/>
              <input type="hidden" id="inline_reserve_arrive" name="arrive"/>
              <input type="hidden" id="inline_reserve_depart" name="depart"/>
            </form>
          </div>

        </div>
      </div>

      <div className="content-images-booking__btn mobile">
        <form className="booking-widget__form" action="https://be.synxis.com/" method="GET">
          <input type="hidden" name="Hotel" value="5108"/>
          <input type="hidden" name="Chain" value="24140"/>
          <input type="hidden" id="inline_reserve_arrive" name="arrive"/>
          <input type="hidden" id="inline_reserve_depart" name="depart"/>
          <input id="book_locale" type="hidden" name="locale" value="en-US"/>
          <button className="btn" type="submit">Reserve</button>
        </form>
      </div>

    </div>

    <div className="content-images-booking__img-block">
      <div className="content-images-booking__img-1 fadein-slideready fadein-slideup">
        <img className="img-desktop"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0297.jpg"
             alt="spherical-urbanica-0297" />
        <img className="img-mobile"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0297.jpg"
             alt="spherical-urbanica-0297" />
      </div>

      <div className="content-images-booking__img-2 fadein-slideready fadein-slideup">
        <img className="img-desktop"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-Hotels-Meridian-South-Beach_pool-cabana_01.jpg"
             alt="spherical-urbanica-hotels-meridian-south-beach_pool-cabana_01" />
        <img className="img-mobile"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-Hotels-Meridian-South-Beach_pool-cabana_01.jpg"
             alt="spherical-urbanica-hotels-meridian-south-beach_pool-cabana_01" />
      </div>

      <div className="content-images-booking__img-3 fadein-slideready">
        <img className="img-desktop"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-Hotels-Meridian-South-Beach_Front-Desk_01B.jpg"
             alt="spherical-urbanica-hotels-meridian-south-beach_front-desk_01b" />
        <img className="img-mobile"
             src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-Hotels-Meridian-South-Beach_Front-Desk_01B.jpg"
             alt="spherical-urbanica-hotels-meridian-south-beach_front-desk_01b" />
      </div>

    </div>
  </div>
);

export default SectionBoking;
