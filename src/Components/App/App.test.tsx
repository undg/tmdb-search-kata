import { render } from '@testing-library/react'
import { App } from './../'

it('renders container with components', () => {
    const c = render(<App />)
    expect(c.queryByTestId('search-wrap')).toBeInTheDocument()
    expect(c.queryByTestId('search-input')).toBeInTheDocument()
})
