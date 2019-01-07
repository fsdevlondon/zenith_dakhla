import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './refactor/home';
import HomeContainer from './components/Pages/HomeContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={HomeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
