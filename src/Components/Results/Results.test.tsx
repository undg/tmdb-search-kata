import { render } from '@testing-library/react'
import { ResultsComponent } from './../'
import jsonResponse from './../../mocks/searchApiMock.json'

test('renders container with components', () => {
    const component = render(<ResultsComponent results={jsonResponse.results} />)
    expect(component.queryByTestId('ResultsComponent')).toBeInTheDocument()
    expect(component.queryAllByText('Frozen').length).toBe(3)
})

