import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../../Header';
import Footer from '../../Footer';
import xMark from '../../../assets/img/x_mark.png';
import image001 from '../../../assets/img/Spherical-Urbanica-0534-e1539577593416.jpg';
import image002 from '../../../assets/img/Spherical-Urbanica-Hotels-Meridian-South-Beach_bar_01.jpg';
import image003 from '../../../assets/img/Spherical-Urbanica-9739.jpg';
import image004 from '../../../assets/img/DSC_53329small.jpg';
import image005 from '../../../assets/img/DSC_0095.jpeg';

const PoolBar = () => (
  <Fragment>
    <NavHeader />
    <div className="wrapper__background-pattern"/>
    <div className="nav-block"/>
    <div className="banner banner--90 banner-mobile--90" style={{height: '727.8px'}}>
      <div className="banner__slanted-box">
        <div className="banner__slanted-img" />
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
            <div className="content-subnav__nav content-subnav__nav--desktop fadein-slideready fadein-slideup" style={{top: '1992.203125px'}}>
              <ul>
                <li data-filter="overview" className="overview">
                  <span className="btn btn--plain btn--xsmall btn--text-black">Overview</span>
                </li>
                <li data-filter="gallery-restaurant" className="gallery-restaurant active">
                  <span className="btn btn--plain btn--xsmall btn--text-black">Gallery</span>
                </li>
                <li data-filter="menus" className="menus">
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
              <div id="content-subnav__item-overview" className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="content-layout content-layout--restaurant">
                  <div className="content-subnav__header-box">
                    <h1 className="content-subnav__subtitle">#notyouraverageminibar</h1>
                    <h2 className="content-subnav__title">Minibar</h2>
                  </div>
                  <p>If you’re into delicious craft cocktails and good times then head to Minibar. The
                    #notyouraverageminibar is one of Dakhla’s hottest new bars. Minibar provides fresh, mid-century
                    lounge with a sexy, contemporary twist located in the Dakhla Lagoon at The Zenith Dakhla Resort</p>
                </div>
              </div>
              <div id="content-subnav__item-reservation" className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="reserve-box">
                  <div className="reserve-box__imgbox">
                    <img className="img-desktop" src={image002} alt=""/>
                    <img className="img-tablet" src={image002} alt=""/>
                    <img className="img-mobile" src={image002} alt=""/>
                  </div>
                </div>
                <div className="booking-info">
                  <div className="booking-info__container">
                    <div className="booking-info__col">
                      <h4>Hours</h4>
                      <p><b>Sunday – Thursday</b> – 5:00 PM – 2:00 AM<br/>
                        <b>Friday – Saturday</b> – 5:00 PM – 5:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="content-subnav__item-gallery-restaurant" className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="category-gallery">
                  <div className="category-gallery__categorybox">
                    <div id="category-gallery__category-happy-hour" className="category-gallery__category category-gallery__category--active category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: 'translate3d(-2688px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6720px'}}>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image003} alt="spherical-9739"/>
                              <span>Its always happening here</span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image003} alt="spherical-9739"/>
                              <span>Its always happening here</span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image003} alt="spherical-9739"/>
                              <span>Its always happening here</span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image003} alt="spherical-9739"/>
                              <span>Its always happening here</span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image003} alt="spherical-9739"/>
                              <span>Its always happening here</span>
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

                    <div id="category-gallery__category-late-night" className="category-gallery__category  category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: 'translate3d(-2688px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6720px'}}>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image004} alt="dsc_53329small"/>
                              <span>Come on by </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image004} alt="dsc_53329small"/>
                              <span>Come on by </span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image004} alt="dsc_53329small"/>
                              <span>Come on by </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image004} alt="dsc_53329small"/>
                              <span>Come on by </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image004} alt="dsc_53329small"/>
                              <span>Come on by </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
                        <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                      </div>
                      <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active"><span /></button>
                      </div>
                    </div>

                    <div id="category-gallery__category-bar-bites" className="category-gallery__category  category-gallery-carousel-js owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: 'translate3d(-2688px, 0px, 0px)', transition: 'all 0s ease 0s', width: '6720px'}}>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image005} alt="dsc_0095"/>
                              <span>We encourage midnight snacks </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image005} alt="dsc_0095"/>
                              <span>We encourage midnight snacks </span>
                            </div>
                          </div>
                          <div className="owl-item active" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image005} alt="dsc_0095"/>
                              <span>We encourage midnight snacks </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image005} alt="dsc_0095"/>
                              <span>We encourage midnight snacks </span>
                            </div>
                          </div>
                          <div className="owl-item cloned" style={{width: '1344px'}}>
                            <div className="category-gallery__image">
                              <img src={image005} alt="dsc_0095"/>
                              <span>We encourage midnight snacks </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
                        <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                      </div>
                      <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active"><span /></button>
                      </div>
                    </div>
                  </div>

                  <div className="category-gallery__nav dragscroll" tabIndex="1" style={{overflow: 'hidden', outline: 'none'}}>
                    <ul>
                      <li data-filter="happy-hour" className="active">Happy Hour</li>
                      <li data-filter="late-night" className="">Late Night</li>
                      <li data-filter="bar-bites" className="">Bar Bites</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="content-subnav__item-menus" className="content-subnav__item fadein-slideready fadein-slideup" tabIndex="1">
                <div className="accordion">
                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Cocktails </span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Aperitifs</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">South of Spritz </span>
                              <p>Aperol, Prosecco, Fresh Florida Orange Juice, Club Soda</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">How Dirty </span>
                              <p>Classic Martini with Dirty Vermouth</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Gimlet</span>
                              <p>Absolut Vodka, Fresh Pressed Lime</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Don of the Night</span>
                              <p>Don Benedicto Pisco, Lime, Prosecco, Blueberry</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">House Specialties </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Birds in Traps</span>
                              <p>Malibu Black Rum, Campari, Pineapple Juice, Fresh Pressed Lime, Blended into a Frozen
                                Cocktail</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Pucker Up</span>
                              <p>Olmec Altos Tequila, Ancho Verde, Spicy Liquor, Muddle Watermelon, Fresh Pressed
                                Citrus, Spicy Salt Rim</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Noo Que Rico</span>
                              <p>Havana Club, Guava, Fresh Pressed Lemon Juice, Egg White</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Mini Mary</span>
                              <p>Absolut Vodka, House Bloody Mary Mix</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">South Beach "Z" Pack</span>
                              <p>Olmeca Altos Tequila, Fresh Pressed, Ginger, Grapefruit, Lemon, Honey, Splash of
                                Mezcal</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$13</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">House Michelada</span>
                              <p>Pacifico Cerveza, Lime Juice, Homemade Michelada Mix</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">1796 Old Fashioned 14</span>
                              <p>Santa Teresa 1796 Rum, Chocolate, Angostura Bitters, Orange </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Digestifs </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">DIY</span>
                              <p>A hands on approach on a classic Negroni, Gin, Campari, Sweet Vermouth</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Gaucho</span>
                              <p>Fernet Branca - Coca Cola</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cortadito</span>
                              <p>Cynar, Amaro Lucano, Coffee Liquor Cream Float</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Moscow Mule</span>
                              <p>Absolut Vodka, Ginger Beer, Lime</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Beer</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Bottle </span>
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
                              <span className="accordion__menu-content-name">Guinness </span>
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
                        <span className="accordion__menu-name">Draft</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Amberbock</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Kona IPA</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Peroni</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Veza Sur Latin Lager</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Wine</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">White + Rose Wine </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Norton Moscato (Mendoza, Argentina)</span>
                              <p>By the glass, 7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$37</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Borgo "M" Pinot Grigio (Veneta, Italy)</span>
                              <p>By the glass, 10</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$39</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Lalande Chardonnay (Gascon, France)</span>
                              <p>By the glass, 7 </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$28</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Manos Negras Sauv. Blanc (Valle Central, Chile)</span>
                              <p>By the glass, 7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$28</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Trumpter Malbec Rose (Mendoza, Argentina)</span>
                              <p>By the glass, 8</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$36</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">D'Or &amp; De Gueulas Rose</span>
                              <p>By the glass, 8 </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$30</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Red Wine</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Cuevas del Sur Merlot (Curico Valley, Chile)</span>
                              <p>By the glass, 7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$33</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">San Pedro de Yacochuya Malbec (Salta, Argentina)</span>
                              <p>By the glass, 12</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$49</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Don Sainte Euge Le Clos (France)</span>
                              <p>By the glass, 7</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$25</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Manos Negras Pinot Noir (Argentina)</span>
                              <p>By the glass, 9</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$36</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Bubbles</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Veuve Clicquot Yellow Label NV (Reims, France)</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$125</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Moet &amp; Chandon Ice Imperial (Epernay, France)</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$98</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Philippe Gonet Rose (France)</span>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$79</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Maniscalo Prosseco NY (Veneto, Italy)</span>
                              <p>By the glass, 8</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$39</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item accordion__item--large">
                    <div className="accordion__title-container">
                      <span className="accordion__title">Food</span>
                      <span className="accordion__symbol accordion__symbol--plus"/>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Mini Bites</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Homemade Empanadas</span>
                              <p>(Order 2) Beef, Chicken, Spinach + Cheese or Onion + Cheese</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Tequenos (5) </span>
                              <p>Served w/ Cilantro Sauce</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$8</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Guac + Chips </span>
                              <p>Homemade Guacamole and Corn Tortilla Chips</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Tacos </span>
                              <p>White Roasted Corn, Red Onion, Cilantro, Peppers, Spice Sauce *Add Chicken + $3</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$7</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chicken Quesadilla</span>
                              <p>Guac, Pico, Sour Cream</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Mini Snacks </span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Incredible Popcorn</span>
                              <p>Caramel + Cheddar or Spicy Buffalo (non-GMO - Gluten Free)</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$3</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Sandwiches</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Veggie Burger</span>
                              <p>Vegan Quinoa Patty, Arugula, Dijon Mustard, Tomato, Guacamole, Bianca Vegan Bun, W/
                                Chips</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Chicken Club</span>
                              <p>Organic Chicken Breast, Provolone Cheese, Avocado, and Homemade Pesto</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$12</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Grilled Cheese</span>
                              <p>Melted Sharp Cheddar and American Cheese on Sillivan St Bakery White Bread</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__menu">
                        <span className="accordion__menu-name">Toast</span>
                        <div className="accordion__menu-items">
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Avocado Toast</span>
                              <p>Sliced Avocado, Crumbled Feta Cheese, Pepper Flakes *Add Smoked Salmon + $4</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Brie + Prosciutto Toast </span>
                              <p>Warm Brie Cheese, Organic Fig Jam and Prosciutto Di Parma</p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$11</span>
                            </div>
                          </div>
                          <div className="accordion__menu-item">
                            <div className="accordion__group-content">
                              <span className="accordion__menu-content-name">Burrata Toast</span>
                              <p>Plum Tomato, Balsamic Glaze, Pesto *Add Prosciutto +$3 </p>
                            </div>
                            <div className="accordion__menu-content-price">
                              <span>$9</span>
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

export default PoolBar;


