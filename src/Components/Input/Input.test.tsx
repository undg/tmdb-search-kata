import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { InputComponent } from './'

let component: RenderResult
beforeEach(() => {
    component = render(<InputComponent />)
})

it('shoutd renders input container', () => {
    expect(component.queryByTestId('InputComponent')).toBeInTheDocument()
})

it('shoutd change input', () => {
    expect(component.queryByTestId('InputComponent')).toBeInTheDocument()

    const input = component.queryByTestId('search-input') as HTMLInputElement | null
    expect(input).toBeInTheDocument()

    fireEvent.change(input!, { target: { value: '🐵' } })
    expect(input?.value).toBe('🐵')
})
