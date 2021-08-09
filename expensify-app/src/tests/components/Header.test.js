import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';

// Shallow testing example, using for single component
test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
