import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import App from '@src/App'
import { render, screen } from './utils/test-utils'

describe('App', () => {
  it('renders title', () => {
    const title = /Number Converter/i

    render(<App />, { wrapper: MemoryRouter })
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })
})
