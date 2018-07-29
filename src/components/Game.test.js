import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './Game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Should be able to start a new game', () => {
    const wrapper = mount(<Game />);

    wrapper.setState({
      temperature: "Boo ya",
      answer: -1,
      prevGuesses: []
    });

    wrapper.find('.button').simulate('click');

    expect(wrapper.state('temperature')).toEqual('Make your Guess!');
    expect(wrapper.state('answer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('answer')).toBeLessThanOrEqual(100);
  });

  it('Should render previous guesses', () => {
    const wrapper = mount(<Game />);

    wrapper.setState({
      prevGuesses: [1, 23, 36]
    });

    const items = wrapper.find('li');
    expect(items.length).toEqual(wrapper.state('prevGuesses').length);
  });
});
