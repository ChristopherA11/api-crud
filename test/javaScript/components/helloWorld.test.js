
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from '../../../app/javascript/common/HelloWorld';

test('renders hello message', () => {
  const { getByText } = render(<HelloWorld />);
  const helloText = getByText(/Hello, React on Rails!/i);
  expect(helloText).toBeInTheDocument();
});
