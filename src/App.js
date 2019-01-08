import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './components/Pages/HomeContainer';
import BarContainer from './components/Pages/BarContainer';
import RoomsContainer from './components/Pages/RoomsContainer';
import LoftRoom from './components/Pages/Room/LoftRoom';
import FoodMarchand from './components/Pages/FoodMarchand';
import ContactContainer from './components/Pages/ContactContainer';
import GalleryContainer from './components/Pages/GalleryContainer';
import MiniBar from './components/Pages/MiniBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/food-drink" component={BarContainer} />
          <Route exact path="/food-drink/food-marchand" component={FoodMarchand} />
          <Route exact path="/food-drink/minibar" component={MiniBar} />
          <Route exact path="/rooms" component={RoomsContainer} />
          <Route exact path="/rooms/loftroom" component={LoftRoom} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/gallery" component={GalleryContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
