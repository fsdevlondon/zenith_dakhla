import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import Spherical001 from '../../../assets/img/Spherical-Urbanica-0058.jpg'; //https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0058.jpg
import Spherical002 from '../../../assets/img/Spherical-Urbanica-0509-e1534557790516.jpg'; //https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-e1534557790516.jpg

const BarContainer = () => (
  <Fragment>
    <NavHeader />
    <div className="wrapper__background-pattern"/>
    <div className="nav-block"/>
    <div className="section section--background-left">
      <div className="intro-content  fadein-slideready fadein-slideup">
        <h2 className="intro-content__subtitle"/>
        <h1 className="intro-content__title">Food + Drink</h1>
        <div className="intro-content__content ">
        </div>
      </div>
      <div className="photo-content ">
        <div className="photo-content__container ">
          <div className="photo-content__item    photo-content__item--right fadein-slideready fadein-slideup" data-time="">
            <div className="photo-content__content-block photo-content__content-block--left">
              <span className="photo-content__subtitle">The art of curating</span>
              <span className="photo-content__title">The Food Marchand</span>
              <p>World renowned Chef Fernando Trocca uses local ingredients from the city’s most famed purveyors and
                blends them to create our modern delicious menu that spans from Breakfast to a late night fare. Eat like
                a Moroccan King.</p>
              <div className="photo-content__links">
                <div className="photo-content__link">
                  <Link to="/food-drink/food-marchand" className="btn btn--plain btn--text-black valign-bottom"><span>View Details</span></Link>
                </div>
              </div>
            </div>
            <div className="photo-content__imglist">
              <div className="photo-content__img">
                <img className="img-desktop"
                     src={Spherical001}
                     alt="spherical-urbanica-0058-2"/>
                <img className="img-mobile"
                     src={Spherical001}
                     alt="spherical-urbanica-0058-2"/>
              </div>
            </div>

            <div className="photo-content__content-block photo-content__content-block--right">
              <span className="photo-content__subtitle">The art of curating</span>
              <span className="photo-content__title">The Food Marchand</span>
              <p>World renowned Chef Fernando Trocca uses local ingredients from the city’s most famed purveyors and
                blends them to create our modern delicious menu that spans from Breakfast to a late night fare. Eat like
                a Moroccan King.</p>
              <div className="photo-content__links">
                <div className="photo-content__link">
                  <Link to="/food-drink/food-marchand" className="btn btn--plain btn--text-black valign-bottom"><span>View Details</span></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="photo-content__item    photo-content__item--left fadein-slideready fadein-slideup" data-time="">
            <div className="photo-content__content-block photo-content__content-block--left">
              <span className="photo-content__subtitle">#notyouraverageminibar</span>
              <span className="photo-content__title">Minibar </span>
              <p>If you’re into delicious craft cocktails and good times then head to Minibar. The
                #notyouraverageminibar is one of Dakhla’s hottest new bars. Minibar provides fresh, mid-century lounge
                with a sexy, contemporary twist located in the oasis of the Dakhla Lagoon at Zenith Dakhla Resort.</p>
              <div className="photo-content__links">
                <div className="photo-content__link">
                  <Link to="/food-drink/minibar" className="btn btn--plain btn--text-black valign-bottom"><span>View Details</span></Link>
                </div>
              </div>
            </div>
            <div className="photo-content__imglist">
              <div className="photo-content__img">
                <img className="img-desktop"
                     src={Spherical002}
                     alt="spherical-urbanica-0509"/>
                <img className="img-mobile"
                     src={Spherical002}
                     alt="spherical-urbanica-0509"/>
                </div>
            </div>

            <div className="photo-content__content-block photo-content__content-block--right">
              <span className="photo-content__subtitle">#notyouraverageminibar</span>
              <span className="photo-content__title">Minibar </span>
              <p>If you’re into delicious craft cocktails and good times then head to Minibar. The
                #notyouraverageminibar is one of Dakhla’s hottest new bars. Minibar provides fresh, mid-century lounge
                with a sexy, contemporary twist located in the oasis of the Dakhla Lagoon at Zenith Dakhla Resort.</p>
              <div className="photo-content__links">
                <div className="photo-content__link">
                  <Link to="/food-drink/minibar" className="btn btn--plain btn--text-black valign-bottom"><span>View Details</span></Link>
                </div>
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

export default BarContainer;


