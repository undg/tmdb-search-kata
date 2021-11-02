import React from 'react'
import { render } from '@testing-library/react'
import { App } from './../'

test('renders container with components', () => {
    const c = render(<App />)
    expect(c.queryByTestId('search-wrap')).toBeInTheDocument()
    expect(c.queryByTestId('search-input')).toBeInTheDocument()
    // fireEvent search
    // expect(c.queryByTestId('ResultsComponent')).toBeInTheDocument()
})
