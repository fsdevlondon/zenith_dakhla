import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/Reset.scss';
import '../src/scss/common.scss';
import '../src/scss/NavBar.scss';
import '../src/scss/mixins.scss';
import '../src/scss/twin_slider.scss';
import '../src/scss/media.scss';
import '../src/scss/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
