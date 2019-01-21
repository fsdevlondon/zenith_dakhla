import React from 'react';
import Spherical0297 from '../../assets/img/Spherical-Urbanica-0297.jpg';
import Spherical0298 from '../../assets/img/villa-night.jpg';
import Spherical0299 from '../../assets/img/hamman-reception.jpg';

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

          <div className="content-images-booking__btn">
            <button className="btn hotelRunnerReserveBtn">Reserve</button>
          </div>

        </div>
      </div>

      <div className="content-images-booking__btn mobile">
        <button className="btn hotelRunnerReserveBtn">Reserve</button>
      </div>

    </div>

    <div className="content-images-booking__img-block">
      <div className="content-images-booking__img-1 fadein-slideready fadein-slideup">
        <img className="img-desktop" src={Spherical0297} alt="spherical-0297" />
        <img className="img-mobile" src={Spherical0297} alt="spherical-0297" />
      </div>

      <div className="content-images-booking__img-2 fadein-slideready fadein-slideup">
        <img className="img-desktop" src={Spherical0298} alt="spherical" />
        <img className="img-mobile" src={Spherical0298} alt="spherical" />
      </div>

      <div className="content-images-booking__img-3 fadein-slideready fadein-slideup">
        <img className="img-desktop" src={Spherical0299} alt="spherical" />
        <img className="img-mobile" src={Spherical0299} alt="spherical" />
      </div>
    </div>
  </div>
);

export default SectionBoking;
