import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('simulates click events', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state().count).toEqual(1);
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state().count).toEqual(1);
  expect(wrapper.props().color).toEqual('red');
});

it('updates component properly', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(wrapper.state().count).toEqual(0);
  wrapper.setState({ count: 0 });
  expect(wrapper.state().count).toEqual(0);
  wrapper.setState({ count: 1 });
  expect(wrapper.state().count).toEqual(1);
});