import React, { Fragment, Component } from 'react';
import NavHeader from '../../Header';
import SectionBoking from '../../SectionBooking';
import TwinSlider from '../../TwinSlider';
import Rooms from '../../Rooms';
import Guides from '../../Guides';
import Footer from '../../Footer';
import Opinions from '../../Opinions';

class HomeContainer extends Component {
  componentDidMount() {
    if (window) {
      window.addBtnReseve();
      window.scrollTo(0,0);
    }
  }

  render () {
    return (
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
      </Fragment>
    );
  }
}


export default HomeContainer;
