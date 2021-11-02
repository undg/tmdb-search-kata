import React from 'react'
import { render } from '@testing-library/react'
import { App } from './../'

test('renders container for app', () => {
    const c = render(<App />)

    
    expect(c.queryByTestId('search-wrap')).toBeInTheDocument()
})
