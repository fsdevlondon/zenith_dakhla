import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import imageRoom001 from '../../../assets/img/loft-out.jpg';
import imageRoom002 from '../../../assets/img/villas-out2.jpg';
import imageRoom003 from '../../../assets/img/riad-in.jpg';


class RoomsContainer extends Component {
  componentDidMount() {
    if (window) {
      window.addBtnReseve();
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <Fragment>
        <NavHeader/>
        <div className="wrapper__background-pattern"/>
        <div className="nav-block"/>
        <div className="section section--background-left">
          <div className="intro-content  fadein-slideready fadein-slideup">
            <h2 className="intro-content__subtitle"/>
            <h1 className="intro-content__title">Our Rooms </h1>
            <div className="intro-content__content ">
              <div className="two-column">
                <p>All rooms feature natural wood elements that stand out against a white palate, creating the feeling
                  of
                  Miami at the beach. Our beds are truly the centerpiece of every room, and its comfort is one of our
                  best
                  amenities. The rooms are thoughtfully designed in a simple clean and modern style, and we’ve included
                  all
                  the comforts of home and something more.</p>
              </div>
            </div>
          </div>
          <div className="photo-content ">
            <div className="photo-content__container ">
              <div className="photo-content__item    photo-content__item--right fadein-slideready fadein-slideup"
                   data-time="">
                <div className="photo-content__content-block photo-content__content-block--right">
                  <span className="photo-content__subtitle">Just Like Home</span>
                  <span className="photo-content__title">The Loft</span>
                  <p>Loft room is actually a little understated for what we have built in Dakhla. These are not only rooms, but rather absolute luxury loft apartments with two rooms and a large bathroom including an outside area.</p>
                  <p>Start your kitesurfing day relaxed and check out the wind and the spot from your giant double bed. Afterwards or after your session on the lagoon you can enjoy your very own Jacuzzi. You have read correctly. Not one Jacuzzi for all loft rooms, but each apartment has its own Jacuzzi. Pure luxury!</p>
                  <div className="photo-content__links">
                    <div className="photo-content__link">
                      <Link to="/rooms/loft-room" className="btn btn--plain btn--text-black valign-bottom"><span>VIEW MORE</span></Link>
                    </div>
                    <div className="photo-content__link">
                      <div className="btn btn--highlight btn--hvr-sweep-to-right btn--text-black valign-bottom hotelRunnerReserveBtn"><span>RESERVE</span></div>
                    </div>
                  </div>
                </div>
                <div className="photo-content__imglist">
                  <div className="photo-content__img">
                    <img className="img-desktop"
                         src={imageRoom001}
                         alt="spherical-0182-small"/>
                    <img className="img-mobile"
                         src={imageRoom001}
                         alt="spherical-0182-small"/>
                  </div>
                </div>
              </div>


              <div className="photo-content__item    photo-content__item--right fadein-slideready fadein-slideup"
                   data-time="">
                <div className="photo-content__imglist">
                  <div className="photo-content__img">
                    <img className="img-desktop"
                         src={imageRoom002}
                         alt="spherical-0182-small"/>
                    <img className="img-mobile" style={{marginTop: '40px'}}
                         src={imageRoom002}
                         alt="spherical-0182-small"/>
                  </div>
                </div>
                <div className="photo-content__content-block photo-content__content-block--right">
                  <span className="photo-content__subtitle">Just Like Home</span>
                  <span className="photo-content__title">The Villa</span>
                  <p>The six mini villas are lined up just next to each other. Thanks to fascinating architecture all
                    bedrooms and terraces offer you a view to the lagoon without having your privacy disturbed.</p>
                  <p>The mini villas consist of a very ample bedroom, which, based on request, can be equipped with
                    different beds; a double bed with a comfortable 160cm wide mattress, an additional large single
                    bed for triple occupancy or two single beds to create a twin room. A writing desk with cupboards
                    and bedside tables makes your bedroom complete.<br/>
                    In the back part of the villas you will find a spacious shower and a second room with the WC.
                    Behind this is a dressing room with two separate sinks and trays.<br/>
                    The absolute highlight is the additional, roofless outside bathing area with a large bathtub and a
                    rainforest shower.</p>
                  <div className="photo-content__links">
                    <div className="photo-content__link">
                      <Link to="/rooms/villa-room" className="btn btn--plain btn--text-black valign-bottom"><span>VIEW MORE</span></Link>
                    </div>
                    <div className="photo-content__link">
                      <div className="btn btn--highlight btn--hvr-sweep-to-right btn--text-black valign-bottom hotelRunnerReserveBtn"><span>RESERVE</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="photo-content__item    photo-content__item--right fadein-slideready fadein-slideup"
                   data-time="">
                <div className="photo-content__content-block photo-content__content-block--right">
                  <span className="photo-content__subtitle">Just Like Home</span>
                  <span className="photo-content__title">The Riad</span>
                  <p>Besides the mini villas, we have built a new Riad for you. A Riad is a small townhouse built
                    mainly for wealthy families. We used this construction type and converted it into a hotel. Here
                    you will stay with Kitesurfers from all over the world, creating a very special atmosphere. It has
                    been decorated&nbsp;with lots of love and with a Moroccan feel and charm, from the&nbsp;smoothly
                    plastered sand colored walls and the warm lighting .</p>
                  <p>It is a building consisting of one floor with&nbsp;6 rooms built around a courtyard.Each room has
                    its own ensuite bathroom. They are situated behind a partition wall with a spacious shower.<br/>
                    The rooms are smaller than the mini villas, but still with ample space for you and your
                    belongings.<br/>
                    In the middle of the Riad you will find a big open court with a lot of plants, where you can
                    relax and recuperate after a day on the water. &nbsp;This is a great value alternative to the mini
                    villas</p>
                  <div className="photo-content__links">
                    <div className="photo-content__link">
                      <Link to="/rooms/riad-room" className="btn btn--plain btn--text-black valign-bottom"><span>VIEW MORE</span></Link>
                    </div>
                    <div className="photo-content__link">
                      <div className="btn btn--highlight btn--hvr-sweep-to-right btn--text-black valign-bottom hotelRunnerReserveBtn"><span>RESERVE</span></div>
                    </div>
                  </div>
                </div>
                <div className="photo-content__imglist">
                  <div className="photo-content__img">
                    <img className="img-desktop"
                         src={imageRoom003}
                         alt="spherical-0182-small"/>
                    <img className="img-mobile" style={{marginTop: '40px'}}
                         src={imageRoom003}
                         alt="spherical-0182-small"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-block"/>
        <Footer/>
      </Fragment>
    );
  }
}

export default RoomsContainer;


