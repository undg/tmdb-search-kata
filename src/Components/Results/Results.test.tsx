import { fireEvent, render } from '@testing-library/react'
import { ResultsComponent } from './../'
import jsonResponse from './../../mocks/searchApiMock.json'

it('renders container with components', () => {
    const component = render(<ResultsComponent results={jsonResponse.results} />)
    expect(component.queryByTestId('ResultsComponent')).toBeInTheDocument()
    expect(component.queryAllByText('Frozen').length).toBe(3)
})

it('should open modal', () => {
    const component = render(<ResultsComponent results={jsonResponse.results} />)

    fireEvent.click(component.queryAllByRole('button')[0])
    expect(component.queryByTestId('ModalComponent')).toBeInTheDocument()
})
