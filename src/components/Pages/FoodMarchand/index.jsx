import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/Spherical-Urbanica-Hotels-Meridian-South-Beach_pool-cabana_01.jpg';
import image002 from '../../../assets/img/Spherical-Urbanica-0425-e1534556888521.jpg';
import image003 from '../../../assets/img/Spherical-Urbanica-0451-small.png';
import image004 from '../../../assets/img/Spherical-Urbanica-0421-e1539582866753.jpg';
import image005 from '../../../assets/img/Spherical-Urbanica-0225.jpg';


const FoodMarchand = () => (
  <Fragment>
    <NavHeader />
    <div className="wrapper__background-pattern"/>
    <div className="nav-block"/>
    <div className="banner banner--70 banner-mobile--70" style={{height: '539.4px'}}>
      <div className="banner__slanted-box">
        <div className="banner__slanted-img">
        </div>
      </div>
      <div className="banner__close btn--hvr-fade">
        <Link to="/food-drink">
          <img src={xMark} alt="x mark"/>
        </Link>
      </div>
      <div className="banner__image-wrap banner__image-desktop ">
        <div className="banner__image"
             style={{backgroundImage: `url('${image001}')`}}/>
      </div>
      <div className="banner__image-wrap banner__image-mobile ">
        <div className="banner__image"
             style={{backgroundImage: `url('${image001}')`}}/>
      </div>
    </div>
    <div className="section">
      <div className="content-layout">
        <div className="content-layout__innerwrap">
          <div className="content-subnav">
            <div className="content-subnav__nav content-subnav__nav--desktop fadein-slideready fadein-slideup"
                 style={{top: '3636.609375px'}}>
              <ul>
                <li data-filter="overview" className="overview">
                  <span className="btn btn--plain btn--xsmall btn--text-black">Overview</span>
                </li>
                <li data-filter="gallery-restaurant" className="gallery-restaurant">
                  <span className="btn btn--plain btn--xsmall btn--text-black">Gallery</span>
                </li>
                <li data-filter="menus" className="menus active">
                  <span className="btn btn--plain btn--xsmall btn--text-black">Menus</span>
                </li>
              </ul>
            </div>
            <div className="content-subnav__nav content-subnav__nav--mobile fadein-slideready fadein-slideup">
              <div className="content-subnav__filter-select">
                <div className="content-subnav__filter-selected">Overview</div>
                <div className="content-subnav__select">
                  <div className="content-subnav-select__items selected" data-filter="overview">Overview</div>
                  <div className="content-subnav-select__items " data-filter="gallery-restaurant">Gallery</div>
                  <div className="content-subnav-select__items " data-filter="menus">Menus</div>
                </div>
                <span className="content-subnav__filter-select-arrowdown">
							    <i className="fa fa-angle-down" aria-hidden="true"/>
						    </span>
              </div>
            </div>

            <div className="content-subnav__content">
              <div id="content-subnav__item-overview" className="content-subnav__item fadein-slideready fadein-slideup"
                   tabIndex="1">
                <div className="content-layout content-layout--restaurant">
                  <div className="content-subnav__header-box">
                    <h1 className="content-subnav__subtitle">The art of curating</h1>
                    <h2 className="content-subnav__title">The Food Marchand</h2>
                  </div>
                  <p>Using local ingredients from the city’s most famed purveyors and blends them to create our modern
                    delicious menu that spans from Breakfast to a late night fare. Eat like a Moroccan King.</p>
                </div>
              </div>
              <div id="content-subnav__item-reservation"
                   className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="reserve-box">
                  <div className="reserve-box__imgbox">
                    <img className="img-desktop"
                         src={image002}
                         alt=""/>
                    <img className="img-tablet"
                         src={image002}
                         alt=""/>
                    <img className="img-mobile"
                         src={image002}
                         alt=""/>
                  </div>
                </div>

                <div className="booking-info">
                  <div className="booking-info__container">
                    <div className="booking-info__col">
                      <h4>Hours</h4>
                      <p><b>Open Everyday&nbsp;</b>&nbsp;– 7:30am-Midnight</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="content-subnav__item-gallery-restaurant"
                   className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="category-gallery">
                  <div className="category-gallery__categorybox">
                    <div id="category-gallery__category-restaurant"
                         className="category-gallery__category category-gallery__category--active category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage"
                             style={{transform: 'translate3d(-2480px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6200px'}}>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image003}
                                alt="spherical-0451-small-2"/>
                                <span>Breakfast </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image003}
                                alt="spherical-0451-small-2"/>
                                <span>Breakfast </span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image003}
                                alt="spherical-0451-small-2"/>
                                <span>Breakfast </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image003}
                                alt="spherical-0451-small-2"/>
                                <span>Breakfast </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image003}
                                alt="spherical-0451-small-2"/>
                                <span>Breakfast </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev">
                          <span aria-label="Previous">‹</span>
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                          <span aria-label="Next">›</span>
                        </button>
                      </div>
                      <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active"><span/></button>
                      </div>
                    </div>


                    <div id="category-gallery__category-cafe"
                         className="category-gallery__category  category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage"
                             style={{transform: 'translate3d(-2480px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6200px'}}>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image004}
                                alt="spherical-0421-2"/>
                                <span>Midday Refreshments </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image004}
                                alt="spherical-0421-2"/>
                                <span>Midday Refreshments </span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image004}
                                alt="spherical-0421-2"/>
                                <span>Midday Refreshments </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image004}
                                alt="spherical-0421-2"/>
                                <span>Midday Refreshments </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image004}
                                alt="spherical-0421-2"/>
                                <span>Midday Refreshments </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev">
                          <span aria-label="Previous">‹</span>
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                          <span aria-label="Next">›</span>
                        </button>
                      </div>
                      <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active"><span/></button>
                      </div>
                    </div>


                    <div id="category-gallery__category-room-services"
                         className="category-gallery__category  category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage"
                             style={{transform: 'translate3d(-2480px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6200px'}}>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image005}
                                alt="spherical-0225"/>
                                <span>Take your time </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image005}
                                alt="spherical-0225"/>
                                <span>Take your time </span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image005}
                                alt="spherical-0225"/>
                                <span>Take your time </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image005}
                                alt="spherical-0225"/>
                                <span>Take your time </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1240px'}}>
                            <div className="category-gallery__image">
                              <img
                                src={image005}
                                alt="spherical-0225"/>
                                <span>Take your time </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev">
                          <span aria-label="Previous">‹</span>
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                          <span aria-label="Next">›</span>
                        </button>
                      </div>
                      <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active"><span/></button>
                      </div>
                    </div>
                  </div>

                  <div className="category-gallery__nav dragscroll" tabIndex="1"
                       style={{overflow: 'hidden', outline: 'none'}}>
                    <ul>
                      <li data-filter="restaurant" className="active">Breakfast</li>
                      <li data-filter="cafe" className="">Lunch</li>
                      <li data-filter="room-services" className="">Room Service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="content-subnav__item-partnership"
                   className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="content-layout content-layout--restaurant">
                  <div className="content-subnav__header-box">
                    <h2 className="content-subnav__subtitle">We inspire community</h2>
                    <h2 className="content-subnav__title">Local Partnership </h2>
                  </div>
                  <div className="content-subnav__column-left col-50 valign-top">
                    <p>We create local bonds to support the community. We partner with local purveyors and businesses
                      such as Zac The Baker, Panther Coffee, Expressed Juice, Laurie’s Granola, Bousa Beer and others.
                      Our brands are our friends. We offer the best brands in the city so you can experience it like a
                      local.</p>
                    <p><img className="alignnone size-medium wp-image-2174"
                            src="https://urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0418_2-200x300.jpg"
                            alt="" width="200" height="300"
                            srcSet="https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0418_2-200x300.jpg 200w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0418_2-768x1151.jpg 768w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0418_2-683x1024.jpg 683w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0418_2.jpg 1001w"
                            sizes="(max-width: 200px) 100vw, 200px"/></p>
                  </div>
                  <div className="content-subnav__column-right col-50 valign-top">
                    <p><img className="alignnone size-medium wp-image-2170"
                            src="https://urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2-300x300.jpg"
                            alt="" width="300" height="300"
                            srcSet="https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2-300x300.jpg 300w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2-150x150.jpg 150w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2-768x769.jpg 768w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2-1024x1024.jpg 1024w, https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0399_2.jpg 1501w"
                            sizes="(max-width: 300px) 100vw, 300px"/></p>
                  </div>
                </div>
              </div>
              <div id="content-subnav__item-menus" className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="accordion">
                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Breakfast</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content" style={{display: 'none'}}>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Eggs </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Eggs &amp; Toast</span>
                              <p>Two Cage Free Eggs Scrambled or Sunny Side w/ Sullivan St Bakery Whole Wheat Toast</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Egg Sandwich</span>
                              <p>Scrambled Eggs w/ Swiss Cheese, Avocado &amp; Tomato</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Smoked Salmon &amp; Eggs</span>
                              <p>Two Cage Free Eggs Scrambled or Sunnyside, Smoked Salmon, Sliced Avocado w/ Sullivan St
                                Bakery Whole Wheat Toast</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Smoked Ham &amp; Eggs</span>
                              <p>Two Cage Free Eggs Scramble or Sunny Side, Smoked Ham w/ Sullivan St Bakery Wheat
                                Toast</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Toasts</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Avocado Toast</span>
                              <p>Sliced Avocado, Crumbled Feta Cheese, Pepper Flakes</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Brie &amp; Prosciutto </span>
                              <p>Warm Brie Cheese, Fig Jam and Prosciutto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Burrata Toast</span>
                              <p>Plum Tomato, Pesto, Balsamic glaze, Homemade Pesto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Croissants </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Croissant</span>
                              <p>Plain, Warm </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Ham &amp; Swiss Cheese</span>
                              <p>Smoked Ham w/ Swiss Cheese, Warm Croissant</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Nutella </span>
                              <p>Warm Croissants filled with Nutella</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Smoked Salmon Croissant</span>
                              <p>Cream Cheese, Capers, Arugula</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Bowls</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Yogurt Parfait </span>
                              <p>Greek Yogurt, Fresh Granola by Laurie's Pantry, Berries</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Acai</span>
                              <p>Diced Berries, Banana, Fresh Granola, Coco Flakes </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Salads</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Arugula Tuna Poke </span>
                              <p>Avocado, Mango, Scallions, Tomatoes, Sesame Seeds, Poke Sauce</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Spinach &amp; Feta </span>
                              <p>Sliced Almonds, Green Apples, Cranberries, Lemon Olive Oil</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Burrata &amp; Prosciutto Salad </span>
                              <p>Argula, Tomatoes, Lemon Olive Oil, Balsamic Glaze</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$14</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Breakfast Drinks</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content" style={{display: 'none'}}>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Coffee</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">American</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Espresso </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cortadito</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Machiatto </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Capuccino</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$4.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Latte </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Iced Coffee</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Iced Latte</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Vanilla Latte</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Teas</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Green Tea </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Black Tea</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chamomile Tea</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Herbal Tea</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chai Tea</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Smoothies</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Antioxidant </span>
                              <p>Blueberries, Raspberries, Blackberries, Strawberries, and Almond Milk</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Tropical Goodness </span>
                              <p>Pineapple, Mango, Strawberries, and Fresh Orange Juice</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Green Monster</span>
                              <p>Spinach, Pineapple, Green Apple, Banana, and Almond Milk</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Juices</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Fresh Orange Juice </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed K8</span>
                              <p>Kale, spinach, chard, parsley, celery, lime, bok choy, apple</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed P3</span>
                              <p>Pineapple, pear, apple, mint, lime</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed D3 </span>
                              <p>Dragonfruit, coconut water, pineapple, lime</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed B4</span>
                              <p>Beetroot, celery, apple, lemon</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed W4</span>
                              <p>Watermelon, strawberry, ruby red grapefruit</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed A3</span>
                              <p>Apple, carrot, ginger, lemon</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cold Pressed SP2 </span>
                              <p>Spinach, coconut, water, pineapple, lime</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Main Menu</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content" style={{display: 'none'}}>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Sandwiches</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Capresse </span>
                              <p>Italian Burrata Cheese, Spinach, Plum Tomatoes, Pesto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chicken Club </span>
                              <p>Organic Chicken Breast, Provolone Cheese, Avocado and Homemade Pesto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Toasts</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Avocado Toast</span>
                              <p>Sliced Avocado, Crumbled Feta Cheese, Pepper Flakes </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Brie &amp; Prosciutto Toast</span>
                              <p>Warm Brie Cheese, Organic Fig Jam, and Prosciutto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Burrata Toast</span>
                              <p>Plum Tomato, Balsamic glaze, Pesto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chicken Toast</span>
                              <p>Organic Chicken Breast, Sweet, and Spicy Sauce, Pesto, and Arugula</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Tuna Poke Toast</span>
                              <p>Raw Red Tuna, Sliced Avocado, Poke Sauce and Sesame Seeds</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Bowl </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Acai </span>
                              <p>Diced Berries, Banana, Granola, Coco Flakes</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Salads </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Arugula Tuna Poke</span>
                              <p>Avocado, Mango, Poke Sauce, Tomatoes, Sesame Seeds</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Spinach &amp; Feta</span>
                              <p>Sliced Almonds, Green Apples, Cranberries, Lemon Olive Oil</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Burrata &amp; Prosciutto Salad </span>
                              <p>Arugula, Tomatoes, Lemon Olive Oil, Balsamic Glaze, Sullivan St Toast</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$14</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Coffee</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">American</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Espresso</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cortadito </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Machiatto</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cappuccino</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$4.5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Latte</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Iced Coffee</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Iced Latte</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Vanilla Latte</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Smoothies </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Antioxidant</span>
                              <p>Blueberries, Raspberries, Blackberries, Strawberries and Almond Milk</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Tropical Goodness</span>
                              <p>Pineapple, Mango, Strawberries, and Fresh Orange Juice</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Green Monster</span>
                              <p>Spinach, Pineapple, Green Apple, Banana, and Almond Milk</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Drinks</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content" style={{display: 'none'}}>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Cocktails</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Urbanica Mimosa</span>
                              <p>Orange Juice and Prosecco</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Just Mojito</span>
                              <p>Classic Mojito made with Flor de Cana and house made syrup</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Spritz Rose</span>
                              <p>Aperol, Prosseco and Soda</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Bubbles</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Veuve Clicquot Yellow Label NV </span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$125</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Moet &amp; Chandon Ice Imperial NV</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$98</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Philippe Gonet Rose</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$79</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Maniscalco Prosecco NV</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$39</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Beer </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Large Grolsch</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Lagunitas IPA</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Bud Light</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$5</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Radler Grapefruit</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Red Wine</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">San Pedro De Yacochuya Malbec</span>
                              <p>By the glass, $12</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$49</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cuevas Del Sur Merlot</span>
                              <p>By the glass, $7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$33</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Manos Negras, Pinot Noir '15</span>
                              <p>By the glass, $9</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$36</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Don Sainte Egue Le Clos '15</span>
                              <p>By the glass, $9</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$36</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">White Wine </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span
                                className="accordion__menu-content-name">Borgo "M" Pinto Grigio (Veneto, Italy)</span>
                              <p>By the Glass, $10 </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$39</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Norton Moscato (Mendoza, Argentina)</span>
                              <p>By the Glass, $7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$37</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">LaLande Chardonnay (Gazcon, France)</span>
                              <p>By the Glass, $7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$28</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Manos Negras Sauv. Blanc.</span>
                              <p>By the Glass, $7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$28</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Rose</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Trompeter Malbec Rose</span>
                              <p>By the Glass, $8</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$36</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">D'Or &amp; De Gueles Rose</span>
                              <p>By the Glass, $8</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="two-image-slider fadein-slideready fadein-slideup">
        <div className="two-image-slider__innerwrap">
          <div className="two-image-slider-carousel-js owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage"/>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled"/>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-block"/>
    <Footer/>
  </Fragment>
);

export default FoodMarchand;


