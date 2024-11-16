import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

test('renders navigation links with correct text in Navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const homeLink = screen.getByText('Home')
  const devicesLink = screen.getByText('Devices')

  expect(homeLink).toBeInTheDocument()
  expect(homeLink).toHaveAttribute('href', '/')
  expect(devicesLink).toBeInTheDocument()
  expect(devicesLink).toHaveAttribute('href', '/devices')
})
