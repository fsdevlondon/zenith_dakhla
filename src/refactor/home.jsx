import React from 'react';

const HomePage = () => (
  <div className="animsition" Style={{'animation-duration': '1500ms', opacity: '1'}}>

    <div className="wrapper">
      <div className="wrapper__background-pattern"></div>
      <nav>
        <div className="nav-language">
          <ul>
            <li>
              <a className="nav-language__en" href="#"><span className="nav-language__current">en</span></a>
              <ul className="nav-language__dropdown">
                <li className="icl-es"><a href="https://www.urbanicathehotels.com/es/the-meridian/"><span>es</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <a href="https://www.urbanicathehotels.com/the-meridian/">
            <img src="https://www.urbanicathehotels.com/wp-content/uploads/2018/10/logon0000-2.png" alt="logon0000-2"/>
          </a>
        </div>

        <div className="nav-menu" />

        <div className="nav-reserve">
          <span className="btn btn--plain btn--text-black">Reserve Now</span>
        </div>

        <div className="nav-ham">
          <div className="nav-ham__lines">
            <div className="nav-ham__line nav-ham__line--one"></div>
            <div className="nav-ham__line nav-ham__line--two"></div>
            <div className="nav-ham__line nav-ham__line--three"></div>
          </div>
        </div>
      </nav>
      <div className="nav-block"></div>
      <div className="nav-block-mobile"></div>


      <div className="twin-slider">
        <div className="twin-slider__numbers">
          <i className="ion ion-arrow-left-b"></i>
          <span>25.774189, -80.136368</span>
        </div>

        <div className="twin-slider__left fadein-slideready fadein-slideup">
          <div className="twin-slider__imglist twin-slider-left-js owl-carousel drag drag-left owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage"
                   Style={{transform: 'translate3d(-1722px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '3444px'}}>
                <div className="owl-item cloned" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593.jpg"
                         alt="spherical-urbanica-9593" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593-1.jpg"
                         alt="spherical-urbanica-9593-2" />
                  </div>
                </div>
                <div className="owl-item" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                  </div>
                </div>
                <div className="owl-item active" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593.jpg"
                         alt="spherical-urbanica-9593" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593-1.jpg"
                         alt="spherical-urbanica-9593-2" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0447.jpg"
                         alt="spherical-urbanica-0447" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '574px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593.jpg"
                         alt="spherical-urbanica-9593" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9593-1.jpg"
                         alt="spherical-urbanica-9593-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>


        </div>

        <div className="twin-slider__right fadein-slideready fadein-slideup">
          <div className="twin-slider__right-logo fadein-slideready">
            <img src="https://www.urbanicathehotels.com/wp-content/themes/amapa/images/hotel_amapa_logo.png" />
          </div>

          <div className="twin-slider__imglist twin-slider-right-js owl-carousel drag drag-right owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage"
                   Style={{transform: 'translate3d(-1446px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '2892px'}}>
                <div className="owl-item cloned" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                  </div>
                </div>
                <div className="owl-item" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                  </div>
                </div>
                <div className="owl-item active" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-1.jpg"
                         alt="spherical-urbanica-0509-2" />
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '482px'}}>
                  <div className="twin-slider__img">
                    <img className="img-desktop"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                    <img className="img-mobile"
                         src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0614.jpg"
                         alt="spherical-urbanica-0614" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>

        </div>

        <div className="twin-slider__nav-caption fadein-slideready fadein-slideup">

          <div className="twin-slider__nav">
            <div className="twin-slider__nav-prev">
              <i className="ion ion-md-arrow-dropleft"></i>
            </div>
            <div className="twin-slider__nav-next">
              <i className="ion ion-md-arrow-dropright"></i>
            </div>
          </div>

          <div className="twin-slider__captions">
            <span className="twin-slider__caption twin-slider__caption--active">Good Vibes in Miami</span>
            <span className="twin-slider__caption">Good Vibes in Maimi</span>
          </div>
        </div>

      </div>
      <div className="section section--background-left">
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

        <div className="photo-content-double-slider fadein-slideready">
          <div className="photo-content-double-slider__items photo-content-double-slider-js owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage"
                   Style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2870px'}}>
                <div className="owl-item active" Style={{width: '1435px'}}>
                  <div className="photo-content-double-slider__item">
                    <div className="photo-content-double-slider__images">
                      <div className="photo-content-double-slider__image photo-content-double-slider__image--left">
                        <img
                          src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0125.jpg"
                          alt="spherical-urbanica-0125" />
                      </div>

                      <div className="photo-content-double-slider__image photo-content-double-slider__image--right">
                        <img
                          src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9868_edit.jpg"
                          alt="spherical-urbanica-9868_edit" />
                      </div>
                    </div>

                    <div className="photo-content-double-slider__content">
                      <div className="photo-content-double-slider__content-innerwrap">
                        <span className="photo-content-double-slider__counter">01</span>
                        <span className="photo-content-double-slider__subtitle">Simple details are our luxury</span>
                        <h2 className="photo-content-double-slider__title">Rooms + Suites</h2>
                        <p><span Style={{'font-weight': 400}}>All rooms feature natural wood elements that stand out against a white palate, creating the feeling of Miami at the beach.&nbsp;</span><span
                          Style={{'font-weight': 400}}>The bed is truly the centerpiece of the room, and its comfort is one of our best amenities. </span>
                        </p>
                        <p>.</p>
                        <div className="photo-content-double-slider__btn-container">
                          <a className="link" href="https://www.urbanicathehotels.com/the-meridian/rooms/"><span>View Rooms</span></a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="owl-item" Style={{width: '1435px'}}>
                  <div className="photo-content-double-slider__item">

                    <div className="photo-content-double-slider__images">


                      <div className="photo-content-double-slider__image photo-content-double-slider__image--left">
                        <img
                          src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0399-e1539553231535.jpg"
                          alt="spherical-urbanica-0399" />
                      </div>


                      <div className="photo-content-double-slider__image photo-content-double-slider__image--right">
                        <img
                          src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-Hotels-Meridian-South-Beach_bar_02B-1.jpg"
                          alt="spherical-urbanica-hotels-meridian-south-beach_bar_02b-2" />
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
                          <a className="link" href="https://www.urbanicathehotels.com/the-meridian/food-drink/"><span>Learn More </span></a>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>

          <div className="photo-content-double-slider__nav">
            <div className="photo-content-double-slider__nav-prev disabled">
              <i className="ion ion ion-md-arrow-dropleft"></i>
            </div>
            <div className="photo-content-double-slider__nav-next">
              <i className="ion ion ion-md-arrow-dropright"></i>
            </div>
          </div>
        </div>

        <div className="tripadvisor-slider">
          <div className="tripadvisor-slider__container tripadvisor-js owl-carousel owl-loaded owl-drag">


            <div className="owl-stage-outer">
              <div className="owl-stage"
                   Style={{transform: 'translate3d(-1040px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2600px'}}>
                <div className="owl-item cloned" Style={{width: '520px'}}>
                  <div className="tripadvisor-slider__item">
                    <div className="tripadvisor-slider__quote">
                      <p>“An Inmaculate Designed Oasis in Miami Beach”</p>
                    </div>

                    <div className="tripadvisor-slider__name">
                      <span>- AJ L</span>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '520px'}}>
                  <div className="tripadvisor-slider__item">
                    <div className="tripadvisor-slider__quote">
                      <p>“An Inmaculate Designed Oasis in Miami Beach”</p>
                    </div>

                    <div className="tripadvisor-slider__name">
                      <span>- AJ L</span>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" Style={{width: '520px'}}>
                  <div className="tripadvisor-slider__item">
                    <div className="tripadvisor-slider__quote">
                      <p>“An Inmaculate Designed Oasis in Miami Beach”</p>
                    </div>

                    <div className="tripadvisor-slider__name">
                      <span>- AJ L</span>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '520px'}}>
                  <div className="tripadvisor-slider__item">
                    <div className="tripadvisor-slider__quote">
                      <p>“An Inmaculate Designed Oasis in Miami Beach”</p>
                    </div>

                    <div className="tripadvisor-slider__name">
                      <span>- AJ L</span>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" Style={{width: '520px'}}>
                  <div className="tripadvisor-slider__item">
                    <div className="tripadvisor-slider__quote">
                      <p>“An Inmaculate Designed Oasis in Miami Beach”</p>
                    </div>

                    <div className="tripadvisor-slider__name">
                      <span>- AJ L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div className="owl-dots disabled">
              <button role="button" className="owl-dot active"><span></span></button>
            </div>
          </div>
        </div>


        <div className="video-player fadein-slideready">
          <img className="img-desktop"
               src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Video-cover.jpg" alt="video-cover"/>
            <img className="img-mobile"
                 src="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Video-cover.jpg" alt="video-cover"/>
              <div className="video-player__player"
                   data-videosrc="https://player.vimeo.com/external/296728304.hd.mp4?s=38cfcecd23bb5159b2e36e469a80ff5fde4bb57b&amp;profile_id=174"
                   date-videoposter="https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Video-cover.jpg">
                <div
                  Style={{position: 'absolute', 'z-index': -1, top: '0px', left: '0px', bottom: '0px', right: '0px', overflow: 'hidden', 'background-size': 'cover', 'background-color': 'transparent', 'background-repeat': 'no-repeat', 'background-position': '50% 50%'}}>
                  <video webkit-playsinline="" playsInline=""
                         Style={{margin: 'auto', position: 'absolute', 'z-index': -1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', visibility: 'hidden', opacity: 0, width: '1437px', height: 'auto'}}>
                    <source
                      src="https://player.vimeo.com/external/296728304.hd.mp4?s=38cfcecd23bb5159b2e36e469a80ff5fde4bb57b&amp;profile_id=174.mp4"
                      type="video/mp4"/>
                  </video>
                </div>
              </div>
              <div className="video-player__play-btn">
                <img src="https://www.urbanicathehotels.com/wp-content/themes/amapa/images/transparent_play_button.png"/>
                  <div className="video-player__btn"></div>
              </div>

              <div className="video-player__play-btn-lightbox">
                <a
                  href="https://player.vimeo.com/external/296728304.hd.mp4?s=38cfcecd23bb5159b2e36e469a80ff5fde4bb57b&amp;profile_id=174"
                  className="dropanchor cboxElement"></a>
                <img src="https://www.urbanicathehotels.com/wp-content/themes/amapa/images/transparent_play_button.png"/>
                  <div className="video-player__btn"></div>
              </div>
        </div>
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
            <img src="https://www.urbanicathehotels.com/wp-content/uploads/2018/07/logo-spin.png" alt="logo-spin"/>
          </div>
        </div>
      </div>

    </div>

    <div className="footer fadein-slideready">

      <div className="instagram">
        <div id="instagram__list" className="instagram__list instagram-carousel owl-carousel owl-loaded">
          <div className="owl-stage-outer">
            <div className="owl-stage"></div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
            <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter__text">
          <p>Sign up for offers &amp; packages</p>
        </div>

        <div className="newsletter__form">
          <form
            action="https://urbanicathehotels.us19.list-manage.com/subscribe/post?u=a59bc51e1b82c1d7d908ec9e5&amp;id=168907969f"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
            target="_blank" noValidate="">
            <div className="newsletter__fieldbox">
              <div className="newsletter__field">
                <input type="text" name="FNAME" id="newsletter_fullname" className="newsletter__input"
                       placeholder="FULL NAME"/>
              </div>

              <div className="newsletter__field">
                <input type="text" name="EMAIL" id="newsletter_email" className="newsletter__input"
                       placeholder="YOUR EMAIL"/>
              </div>
            </div>

            <div className="newsletter__submit">
              <button type="submit" className="btn btn--hvr-sweep-to-right">Sign Up</button>
            </div>
          </form>
        </div>


      </div>
      <div className="footer__top-section">
        <div className="footer__logo">
          <a href="https://www.urbanicathehotels.com/the-meridian/">
            <img src="https://www.urbanicathehotels.com/wp-content/uploads/2018/07/property-logo.png"
                 alt="property-logo"/>
          </a>
        </div>

        <div className="footer__contact-info">
          <p>The Meridian<br/>
            meridianfrontdesk@urbanicathehotels.com<br/>
            305-763-8934<br/>
            418 Meridian Ave<br/>
            Miami Beach, FL, 33139</p>

        </div>
      </div>

      <div className="footer__bottom-section">
        <div className="footer__menu">
          <ul id="menu-meridian-footer-menu" className="">
            <li id="menu-item-868" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-868"><a
              href="https://www.urbanicathehotels.com/contact/" className="animsition-link">CONTACT</a></li>
            <li id="menu-item-2467"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2467"><a
              href="https://www.urbanicathehotels.com/" className="animsition-link">The Hotels</a></li>
          </ul>
        </div>
        <div className="footer__social-copyright">
          <ul className="footer__socialbox">
            <li><a href="http://www.facebook.com/UrbanicaMiami" target="_blank"><i className="fa fa-facebook"></i></a>
            </li>
            <li><a href="http://www.instagram.com/urbanicamiami" target="_blank"><i className="fa fa-instagram"></i></a>
            </li>
          </ul>
          <div className="footer__copyright">
            <p className="footer__copyright--original active">COMPASS <span>© 2019</span></p>
            <p className="footer__copyright--hover">by <a href="https://spherical.co/" target="_blank">spherical</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="slide-booking-widget">
      <div className="slide-booking-widget__wrap">
        <input id="book_hotel_id" type="hidden" name="book_hotel_id" value="5108"/>
          <input id="book_chain_id" type="hidden" name="book_chain_id" value="24140"/>
            <input id="book_adult" type="hidden" name="book_adult" value=""/>
              <input id="book_room" type="hidden" name="book_room" value=""/>
                <input id="book_arrival_date" type="hidden" name="book_arrival_date"/>
                  <input id="book_departure_date" type="hidden" name="book_departure_date"/>
                    <input id="book_locale" type="hidden" name="locale" value="en-US"/>

                      <div className="slide-booking-widget__close">
                        <i className="ion ion-android-close" aria-hidden="true"></i>
                      </div>

                      <div className="slide-booking-widget__calendar">
                        <div className="slide-booking-widget__datepicker hasDatepicker" id="dp1546532163178">
                          <div
                            className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi-2 ui-datepicker-multi"
                            Style={{width: '34em', display: 'block'}}>
                            <div className="ui-datepicker-group ui-datepicker-group-first">
                              <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left">
                                <a className="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev"><span
                                  className="ui-icon ui-icon-circle-triangle-w">Prev</span></a>
                                <div className="ui-datepicker-title"><span
                                  className="ui-datepicker-month">January</span>&nbsp;<span
                                  className="ui-datepicker-year">2019</span></div>
                              </div>
                              <table className="ui-datepicker-calendar">
                                <thead>
                                <tr>
                                  <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Sun</span>
                                  </th>
                                  <th scope="col"><span title="Monday">Mon</span></th>
                                  <th scope="col"><span title="Tuesday">Tue</span></th>
                                  <th scope="col"><span title="Wednesday">Wed</span></th>
                                  <th scope="col"><span title="Thursday">Thu</span></th>
                                  <th scope="col"><span title="Friday">Fri</span></th>
                                  <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sat</span>
                                  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td
                                    className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td className=" ui-datepicker-unselectable ui-state-disabled "><span
                                    className="ui-state-default">1</span></td>
                                  <td className=" ui-datepicker-unselectable ui-state-disabled "><span
                                    className="ui-state-default">2</span></td>
                                  <td
                                    className=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                                    data-handler="selectDay" data-event="click" data-month="0" data-year="2019"><a
                                    className="ui-state-default ui-state-highlight ui-state-active ui-state-hover"
                                    href="#">3</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">4</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">5</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">6</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">7</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">8</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">9</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">10</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">11</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">12</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">13</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">14</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">15</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">16</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">17</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">18</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">19</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">20</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">21</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">22</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">23</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">24</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">25</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">26</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="0" data-year="2019"><a className="ui-state-default" href="#">27</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">28</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">29</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">30</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                      data-year="2019"><a className="ui-state-default" href="#">31</a></td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="ui-datepicker-group ui-datepicker-group-last">
                              <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-right">
                                <a className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"
                                   title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                                <div className="ui-datepicker-title"><span
                                  className="ui-datepicker-month">February</span>&nbsp;<span
                                  className="ui-datepicker-year">2019</span></div>
                              </div>
                              <table className="ui-datepicker-calendar">
                                <thead>
                                <tr>
                                  <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Sun</span>
                                  </th>
                                  <th scope="col"><span title="Monday">Mon</span></th>
                                  <th scope="col"><span title="Tuesday">Tue</span></th>
                                  <th scope="col"><span title="Wednesday">Wed</span></th>
                                  <th scope="col"><span title="Thursday">Thu</span></th>
                                  <th scope="col"><span title="Friday">Fri</span></th>
                                  <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sat</span>
                                  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td
                                    className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">1</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">2</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">3</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">4</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">5</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">6</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">7</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">8</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">9</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">10</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">11</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">12</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">13</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">14</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">15</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">16</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">17</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">18</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">19</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">20</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">21</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">22</a></td>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">23</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                      data-month="1" data-year="2019"><a className="ui-state-default" href="#">24</a>
                                  </td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">25</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">26</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">27</a></td>
                                  <td className=" " data-handler="selectDay" data-event="click" data-month="1"
                                      data-year="2019"><a className="ui-state-default" href="#">28</a></td>
                                  <td
                                    className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                  <td
                                    className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="ui-datepicker-row-break"></div>
                          </div>
                        </div>
                      </div>

                      <div className="slide-booking-widget__calendar-mobile">
                        <div className="slide-booking-widget__datepicker-mobile hasDatepicker" id="dp1546532163179">
                          <div
                            className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
                            Style={{display: 'block'}}>
                            <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a
                              className="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev"><span
                              className="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a
                              className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"
                              title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                              <div className="ui-datepicker-title"><span
                                className="ui-datepicker-month">January</span>&nbsp;<span
                                className="ui-datepicker-year">2019</span></div>
                            </div>
                            <table className="ui-datepicker-calendar">
                              <thead>
                              <tr>
                                <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Sun</span></th>
                                <th scope="col"><span title="Monday">Mon</span></th>
                                <th scope="col"><span title="Tuesday">Tue</span></th>
                                <th scope="col"><span title="Wednesday">Wed</span></th>
                                <th scope="col"><span title="Thursday">Thu</span></th>
                                <th scope="col"><span title="Friday">Fri</span></th>
                                <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sat</span>
                                </th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td
                                  className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td
                                  className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td className=" ui-datepicker-unselectable ui-state-disabled "><span
                                  className="ui-state-default">1</span></td>
                                <td className=" ui-datepicker-unselectable ui-state-disabled "><span
                                  className="ui-state-default">2</span></td>
                                <td
                                  className=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                                  data-handler="selectDay" data-event="click" data-month="0" data-year="2019"><a
                                  className="ui-state-default ui-state-highlight ui-state-active ui-state-hover"
                                  href="#">3</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">4</a></td>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">5</a></td>
                              </tr>
                              <tr>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">6</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">7</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">8</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">9</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">10</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">11</a></td>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">12</a></td>
                              </tr>
                              <tr>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">13</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">14</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">15</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">16</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">17</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">18</a></td>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">19</a></td>
                              </tr>
                              <tr>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">20</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">21</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">22</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">23</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">24</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">25</a></td>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">26</a></td>
                              </tr>
                              <tr>
                                <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click"
                                    data-month="0" data-year="2019"><a className="ui-state-default" href="#">27</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">28</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">29</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">30</a></td>
                                <td className=" " data-handler="selectDay" data-event="click" data-month="0"
                                    data-year="2019"><a className="ui-state-default" href="#">31</a></td>
                                <td
                                  className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td
                                  className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="slide-booking-widget__filter">
                        <div className="slide-booking-widget__filter-item left">
                          <div className="slide-booking-widget__filter-select">
                            <div className="slide-booking-widget__filter-selected">1 Adult</div>
                            <div className="slide-booking-widget__select" data-type="book_adult">
                              <div className="slide-booking-widget-select__items selected" data-val="1">1 Adult</div>
                              <div className="slide-booking-widget-select__items" data-val="2">2 Adults</div>
                              <div className="slide-booking-widget-select__items" data-val="3">3 Adults</div>
                              <div className="slide-booking-widget-select__items" data-val="4">4 Adults</div>
                            </div>

                            <span className="slide-booking-widget__filter-select-arrowdown">
						<i className="ion ion-android-arrow-dropdown" aria-hidden="true"></i>
					</span>
                          </div>
                        </div>
                        <div className="slide-booking-widget__filter-item right">
                          <div className="slide-booking-widget__filter-select">
                            <div className="slide-booking-widget__filter-selected">1 Room</div>
                            <div className="slide-booking-widget__select" data-type="book_room">
                              <div className="slide-booking-widget-select__items selected" data-val="1">1 Room</div>
                              <div className="slide-booking-widget-select__items" data-val="2">2 Rooms</div>
                              <div className="slide-booking-widget-select__items" data-val="3">3 Rooms</div>
                              <div className="slide-booking-widget-select__items" data-val="4">4 Rooms</div>
                            </div>
                            <span className="slide-booking-widget__filter-select-arrowdown">
						<i className="ion ion-android-arrow-dropdown" aria-hidden="true"></i>
					</span>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </div>

                      <div className="slide-booking-widget__submit">
                        <a className="btn">Check Availability</a>
                      </div>
      </div>
    </div>


    <div className="nav-slider">
      <div className="nav-slider__images">

        <div className="nav-slider__image nav-slider__image--default active"
             Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-0509-e1534557790516.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--1607"
             Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/08/Spherical-Urbanica-9868_edit.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--1608"></div>


        <div className="nav-slider__image nav-slider__image--1609" ></div>


        <div className="nav-slider__image nav-slider__image--1610" ></div>


        <div className="nav-slider__image nav-slider__image--1619" ></div>


        <div className="nav-slider__image nav-slider__image--1620" ></div>


        <div className="nav-slider__image nav-slider__image--1621" ></div>


        <div className="nav-slider__image nav-slider__image--1622" ></div>


        <div className="nav-slider__image nav-slider__image--1624"
             Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0425.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--1625"></div>


        <div className="nav-slider__image nav-slider__image--1626"></div>


        <div className="nav-slider__image nav-slider__image--1461"
               Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-9991.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--2298"
               Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-9698.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--2122"
               Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-0328-1.jpg)'}}></div>


        <div className="nav-slider__image nav-slider__image--1956"
               Style={{'background-image': 'url(https://www.urbanicathehotels.com/wp-content/uploads/2018/10/Spherical-Urbanica-Hotels-Meridian-South-Beach_pool-cabana_01.jpg)'}}></div>
      </div>

      <div className="nav-slider__menu">
        <div className="nav-slider__menu-wrap" Style={{'padding-right': '0px'}}>
          <div className="nav-slider__menu-container">
            <ul id="menu-meridian-slide-menu" className="nav-slider__menu--desktop">
              <li id="menu-item-1607"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1607">
                <a href="https://www.urbanicathehotels.com/the-meridian/rooms/" data-id="1607"
                   className="animsition-link">Our Rooms</a>
                <ul className="sub-menu">
                  <li id="menu-item-1608"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/the-terrace/" data-id="1608"
                    className="animsition-link">The Terrace</a></li>
                  <li id="menu-item-1609"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/club/" data-id="1609"
                    className="animsition-link">Club</a></li>
                  <li id="menu-item-1610"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/club-2-full/" data-id="1610"
                    className="animsition-link">Club 2 Full</a></li>
                  <li id="menu-item-1619"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1619"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/grand/" data-id="1619"
                    className="animsition-link">Grand Room</a></li>
                  <li id="menu-item-1620"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1620"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/grand-2-queen/" data-id="1620"
                    className="animsition-link">Grand 2 Queen</a></li>
                  <li id="menu-item-1621"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1621"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/standard/" data-id="1621"
                    className="animsition-link">Standard</a></li>
                  <li id="menu-item-1622"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1622"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/mini/" data-id="1622"
                    className="animsition-link">Mini</a></li>
                </ul>
              </li>
              <li id="menu-item-1624"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1624">
                <a href="https://www.urbanicathehotels.com/the-meridian/food-drink/" data-id="1624"
                   className="animsition-link">Food + Drink</a>
                <ul className="sub-menu">
                  <li id="menu-item-1625"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625"><a
                    href="https://www.urbanicathehotels.com/the-meridian/food-drink/food-marchand/" data-id="1625"
                    className="animsition-link">The Food Marchand</a></li>
                  <li id="menu-item-1626"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626"><a
                    href="https://www.urbanicathehotels.com/the-meridian/food-drink/minibar/" data-id="1626"
                    className="animsition-link">Minibar</a></li>
                </ul>
              </li>
              <li id="menu-item-1461"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461"><a
                href="https://www.urbanicathehotels.com/the-meridian/neighborhood/" data-id="1461"
                className="animsition-link">Neighborhood Guide</a></li>
              <li id="menu-item-2298"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2298"><a
                href="https://www.urbanicathehotels.com/the-meridian/gallery/" data-id="2298"
                className="animsition-link">Gallery</a></li>
              <li id="menu-item-2122"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2122"><a
                href="https://www.urbanicathehotels.com/the-meridian/contact/" data-id="2122"
                className="animsition-link">Contact</a></li>
              <li id="menu-item-1956"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-305 current_page_item menu-item-1956">
                <a href="https://www.urbanicathehotels.com/the-meridian/" data-id="1956" className="animsition-link">The
                  Meridian</a></li>
            </ul>
            <ul id="menu-meridian-slide-menu-1" className="nav-slider__menu nav-slider__menu--mobile">
              <li
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1607">
                <a href="https://www.urbanicathehotels.com/the-meridian/rooms/" data-id="1607"
                   className="animsition-link">Our Rooms</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/the-terrace/" data-id="1608"
                    className="animsition-link">The Terrace</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1609"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/club/" data-id="1609"
                    className="animsition-link">Club</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/club-2-full/" data-id="1610"
                    className="animsition-link">Club 2 Full</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1619"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/grand/" data-id="1619"
                    className="animsition-link">Grand Room</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1620"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/grand-2-queen/" data-id="1620"
                    className="animsition-link">Grand 2 Queen</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1621"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/standard/" data-id="1621"
                    className="animsition-link">Standard</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1622"><a
                    href="https://www.urbanicathehotels.com/the-meridian/rooms/mini/" data-id="1622"
                    className="animsition-link">Mini</a></li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1624">
                <a href="https://www.urbanicathehotels.com/the-meridian/food-drink/" data-id="1624"
                   className="animsition-link">Food + Drink</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625"><a
                    href="https://www.urbanicathehotels.com/the-meridian/food-drink/food-marchand/" data-id="1625"
                    className="animsition-link">The Food Marchand</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626"><a
                    href="https://www.urbanicathehotels.com/the-meridian/food-drink/minibar/" data-id="1626"
                    className="animsition-link">Minibar</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461"><a
                href="https://www.urbanicathehotels.com/the-meridian/neighborhood/" data-id="1461"
                className="animsition-link">Neighborhood Guide</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2298"><a
                href="https://www.urbanicathehotels.com/the-meridian/gallery/" data-id="2298"
                className="animsition-link">Gallery</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2122"><a
                href="https://www.urbanicathehotels.com/the-meridian/contact/" data-id="2122"
                className="animsition-link">Contact</a></li>
              <li
                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-305 current_page_item menu-item-1956">
                <a href="https://www.urbanicathehotels.com/the-meridian/" data-id="1956" className="animsition-link">The
                  Meridian</a></li>
            </ul>
          </div>


          <div className="nav-slider__links">
            <ul id="menu-meridian-slide-links" className="nav-slider__links-desktop">
              <li id="menu-item-2389"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2389"><a
                href="https://www.urbanicathehotels.com/" className="animsition-link">The Hotels</a></li>
              <li id="menu-item-2390"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2390"><a
                href="https://www.urbanicathehotels.com/the-hotels/about/" className="animsition-link">About
                Urbanica</a></li>
            </ul>
            <ul id="menu-meridian-slide-links-1" className="nav-slider__links-mobile">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2389"><a
                href="https://www.urbanicathehotels.com/" className="animsition-link">The Hotels</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2390"><a
                href="https://www.urbanicathehotels.com/the-hotels/about/" className="animsition-link">About
                Urbanica</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </div>
);

export default HomePage;

