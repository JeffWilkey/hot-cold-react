import React from 'react';
import {shallow, mount} from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  it('Renders without crashing', () => {
    shallow(<Button />);
  });

  it('Displays correct text', () => {
    const BUTTON_TEXT = "Button Text";

    const wrapper = shallow(<Button text={BUTTON_TEXT}/>);
    expect(wrapper.text()).toEqual(BUTTON_TEXT);
  });
});
