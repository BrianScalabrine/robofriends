import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});

it('does not update header text after first render', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});