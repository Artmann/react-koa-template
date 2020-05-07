import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import CorgiCard from './corgi-card';

describe('CorgiCard', () => {
  it('Shows a picture of a Corgi', () => {
    render(<CorgiCard image='corgi.png' text='Describing text.' />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('alt', 'Describing text.');
    expect(image).toHaveAttribute('src', '/statics/images/corgi.png');
  });

  it('Has a describing text.', () => {
    render(<CorgiCard image='corgi.png' text='Describing text.' />);

    const text = screen.getByText('Describing text.');

    expect(text).not.toBeNull();
  });
});
