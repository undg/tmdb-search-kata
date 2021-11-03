import { render } from '@testing-library/react'
import jsonMovie from './../../mocks/movieApiMock.json'
import { SingleMovieComponent } from './'

it('should renders container with components', () => {
    const component = render(<SingleMovieComponent movie={jsonMovie} />)
    expect(component.queryByTestId('SingleMovieComponent')).toBeInTheDocument()
    expect(component.queryByText('Mad Max: Fury Road')).toBeInTheDocument()
    expect(component.queryByText('An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.')).toBeInTheDocument()
})
