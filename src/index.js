import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/Reset.scss';
import '../src/scss/common.scss';
import '../src/scss/NavBar.scss';
import '../src/scss/mixins.scss';
import '../src/scss/twin_slider.scss';
import '../src/scss/banner-img.scss';
import '../src/scss/section.scss';
import '../src/scss/media.scss';
import '../src/scss/font-awesome.min.css';

import '../src/scss/contact-form-7.css';
import '../src/scss/magnific-popup.css';
import '../src/scss/owl.carousel.min.css';
import '../src/scss/jquery-ui.min.css';
import '../src/scss/animsition.min.css';
import '../src/scss/colorbox.css';
import '../src/scss/swiper.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
