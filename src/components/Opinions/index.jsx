import React from 'react';

const Opinions = () => (
  <div className="tripadvisor-slider">
    <div className="tripadvisor-slider__container tripadvisor-js owl-carousel owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div className="owl-stage"
             style={{transform: 'translate3d(-1040px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2600px'}}>
          <div className="owl-item cloned" style={{width: '520px'}}>
            <div className="tripadvisor-slider__item">
              <div className="tripadvisor-slider__quote">
                <p>“An Inmaculate Designed Oasis in Dakhla Lagoon”</p>
              </div>

              <div className="tripadvisor-slider__name">
                <span>- AJ L</span>
              </div>
            </div>
          </div>
          /*
          <div className="owl-item cloned" style={{width: '520px'}}>
            <div className="tripadvisor-slider__item">
              <div className="tripadvisor-slider__quote">
                <p>“An Inmaculate Designed Oasis in Dakhla Lagoon”</p>
              </div>

              <div className="tripadvisor-slider__name">
                <span>- AJ L</span>
              </div>
            </div>
          </div>
          <div className="owl-item active" style={{width: '520px'}}>
            <div className="tripadvisor-slider__item">
              <div className="tripadvisor-slider__quote">
                <p>“An Inmaculate Designed Oasis in Dakhla Lagoon”</p>
              </div>

              <div className="tripadvisor-slider__name">
                <span>- AJ L</span>
              </div>
            </div>
          </div>
          <div className="owl-item cloned" style={{width: '520px'}}>
            <div className="tripadvisor-slider__item">
              <div className="tripadvisor-slider__quote">
                <p>“An Inmaculate Designed Oasis in Dakhla Lagoon”</p>
              </div>

              <div className="tripadvisor-slider__name">
                <span>- AJ L</span>
              </div>
            </div>
          </div>
          <div className="owl-item cloned" style={{width: '520px'}}>
            <div className="tripadvisor-slider__item">
              <div className="tripadvisor-slider__quote">
                <p>“An Inmaculate Designed Oasis in Dakhla Lagoon”</p>
              </div>

              <div className="tripadvisor-slider__name">
                <span>- AJ L</span>
              </div>
            </div>
          </div>
          */
        </div>
      </div>
      <div className="owl-nav disabled">
        <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>
        </button>
        <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
      </div>

      <div className="owl-dots disabled">
        <button className="owl-dot active"><span /></button>
      </div>
    </div>
  </div>
);

export default Opinions;
