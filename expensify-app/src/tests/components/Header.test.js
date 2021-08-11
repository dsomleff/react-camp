import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// Shallow testing example, using for single component
test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
