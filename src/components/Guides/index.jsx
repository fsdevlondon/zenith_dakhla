import React from 'react';
import logo from '../../assets/zenith_small.png';

const Guides = () => (
  <div className="intro-content  fadein-slideready fadein-slideup">
    <h2 className="intro-content__subtitle">Explore Our Guides </h2>
    <h1 className="intro-content__title">Dakhla Edition</h1>
    <div className="intro-content__content ">
      <p>Dakhla for many is the definition of perfect kitesurfing
        conditions, it’s the classic loaction. Bosting One of the&nbsp;largest kitesurf lagoons in the world, and if
        that was not enough there is a perfect wave spots just across the 40 km long peninsula. On top of that, the wind
        probability can match the steady and constant wind you thought only to be in Brazil. Dakla has a wind statistic
        of over 300 kiteable days a year, which is just epic!</p>
      <p>The outcome: A complete kite destination for beginners, intermediates, freestylers and wave kiters.</p>
      <p>However, until now, another side of this golden coin existed. Basic camps with little or no comfort as well
        as crowded kite centres. This has kept most from visiting Western Sahara, the land with an endless coastal
        line.</p>
      <p>With excitement we received the message from our long-time partner in Essaouira that they had found a
        solution to the known disadvantages of the destination Dakhla. A new, comfortable kite accommodation with six
        mini villas, all of them facing the spot, a pool on the terrace and an astonishing boutique hotel design,
        which gives the accommodations and common rooms a fresh flair and atmosphere. And, all this on one off the
        best spots in the lagoon.</p>
      <p>Furthermore there are also new flight times so no overnight stop needed to get there anymore! Hence, you’ll
        reach the wind paradise Dakhla in only 6-8 hours (From Europe).</p>
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
