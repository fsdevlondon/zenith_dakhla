import React from 'react';
import logo from '../../assets/zenith_small.png';

const Guides = () => (
  <div className="intro-content  fadein-slideready">
    <h2 className="intro-content__subtitle">Explore Our Guides </h2>
    <h1 className="intro-content__title">South Beach Edition</h1>
    <div className="intro-content__content ">
      <p>This is your guide to the best places to visit while in Miami Beach. As locals we spend our time at local
        spots. Locations in Miami can be very touristy and may not truly represent the essence of our city. South
        Beach can be difficult to decipher. Many places are tourist traps and unnecessarily expensive. This is the
        reason we’ve put this list together. There are some great venues that locals visit that represent the true
        Miami and South Beach. You may see a celebrity or you may even run into one of the neighbors that usually
        hang out at the hotel.</p>
      <p>There’s a lot to do while in Miami Beach and deciding can be tough and the best way to discern is to
        follow the locals. We’ve compiled this list of recommendations just for you. These locales are where you
        can feel as though you’re one of the residents that call our island home. One of Miami’s quirks is the
        ever-changing landscape, so make sure to visit our front desk for some extra recommendations. Good Luck on
        your explorations and Welcome Home!</p>
    </div>
    <div className="intro-content__btn">
      <a className="btn btn--plain btn--text-black" href="#"><span>Explore here </span></a>
    </div>

    <div className="intro-content__logo">
      <img src={logo} alt="logo-spin"/>
    </div>
  </div>
);

export default Guides;
