import React, { Fragment } from 'react';
import NavHeader from '../../Header';
import SectionBoking from '../../SectionBooking';
import TwinSlider from '../../TwinSlider';
import Rooms from '../../Rooms';
import Guides from '../../Guides';
import Footer from '../../Footer';
import NavSlider from '../../NavSlider';
import Opinions from '../../Opinions';

const HomeContainer = () => (
  <Fragment>
    <NavHeader />
    <TwinSlider/>
    <div className="section section--background-left">
      <SectionBoking />
      <Rooms/>
      <Opinions/>
      <Guides />
    </div>
    <Footer/>
    <NavSlider/>
  </Fragment>
);

export default HomeContainer;