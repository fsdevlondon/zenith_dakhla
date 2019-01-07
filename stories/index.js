import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/scss/Reset.scss';
import '../src/scss/common.scss';
import '../src/scss/NavBar.scss';
import '../src/scss/mixins.scss';

import NavHam from '../src/components/Header/components/NavHam';
import NavHeader from '../src/components/Header';


storiesOf('NavHam', module)
  .add('default', () => <NavHam onClick={action('clicked')} />);


storiesOf('Nav Header', module)
  .add('default', () => <NavHeader />);