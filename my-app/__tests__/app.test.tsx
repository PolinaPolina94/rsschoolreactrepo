import React from 'react';
import { render } from '@testing-library/react';

describe('MyApp', () => {
  it('render app', () => {
    const Component = () => <div>Test Component</div>;

    const { asFragment } = render(<Component />);

    expect(asFragment());
  });

  it('render with Provider', () => {
    const Component = () => <div>Test Component</div>;

    const { asFragment } = render(<Component />);

    expect(asFragment());

    expect(document.querySelector('div')).toHaveTextContent('Test Component');
  });
});
