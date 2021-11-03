import { render } from '@testing-library/react'
import { ModalComponent } from './'

it('should should render modal', () => {
    const component = render(<ModalComponent><p>😈</p></ModalComponent>)
    expect(component.queryByTestId('ModalComponent')).toBeInTheDocument()
    expect(component.queryByText('😈')).toBeInTheDocument()
})

