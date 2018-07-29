import React from 'react';
import {shallow} from 'enzyme';

import Guess from './Guess';


describe('<Guess />', () => {
  it('Renders without crashing', () => {
    shallow(<Guess />);
  });
});
