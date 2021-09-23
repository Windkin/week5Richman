// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import Entry from '../pages/[id]'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Menu Items/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Entry', () => {
  it('renders text', () => {
    render(<Entry />)
      screen.getByText('back to', {exact: false}) 
  })
})

describe( 'Entry', () => {
  it('renders a link', () => {
    render(<Entry />)
      screen.getByRole('link', )
  })
})

describe( 'Entry', () => {
  it('renders a link', () => {
    render(<Entry />)
      screen.getByRole('link', ),
      screen.getByText('back to', {exact: false}) 
  })
})
//finally got git to accept my repo!!!!!!!!!! yeeeee