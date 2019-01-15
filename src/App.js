import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './components/Pages/HomeContainer';
import BarContainer from './components/Pages/BarContainer';
import RoomsContainer from './components/Pages/RoomsContainer';
import LoftRoom from './components/Pages/Room/LoftRoom';
import FoodMarchand from './components/Pages/FoodMarchand';
import ContactContainer from './components/Pages/ContactContainer';
import GalleryContainer from './components/Pages/GalleryContainer';
import PoolBar from './components/Pages/PoolBar';
import AboutContainer from './components/Pages/AboutContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/food-drink" component={BarContainer} />
          <Route exact path="/food-drink/food-marchand" component={FoodMarchand} />
          <Route exact path="/food-drink/poolbar" component={PoolBar} />
          <Route exact path="/rooms" component={RoomsContainer} />
          <Route exact path="/rooms/loft-room" component={LoftRoom} />
          <Route exact path="/rooms/pool-villa-room" component={LoftRoom} />
          <Route exact path="/rooms/villa-room" component={LoftRoom} />
          <Route exact path="/rooms/riad-room" component={LoftRoom} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/gallery" component={GalleryContainer} />
          <Route exact path="/about" component={AboutContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
/* <Route exact path="/kitesurf" component={} /> */
/* <Route exact path="/kitesurf/school" component={} /> */
/* <Route exact path="/kitesurf/shop" component={} /> */
/* <Route exact path="/swimming-pool" component={} /> */