import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { SearchComponent } from './'

let component: RenderResult
beforeEach(() => {
    component = render(<SearchComponent />)
})

it('should renders input container with all components', () => {
    expect(component.queryByTestId('SearchComponent')).toBeInTheDocument()
    expect(component.queryByTestId('search-input')).toBeInTheDocument()
    expect(component.queryByTestId('SearchButtonComponent')).toBeInTheDocument()
})

it('should change input', () => {
    const input = component.queryByTestId('search-input') as HTMLInputElement | null
    expect(input).toBeInTheDocument()

    fireEvent.change(input!, { target: { value: '🐵' } })
    expect(input?.value).toBe('🐵')
})
