import React, { useState } from 'react'
import {InputComponent, ResultsComponent} from '..'
import './App.css'

export function App() {
    return (
        <div className="App" data-testid="search-wrap">
            <InputComponent />
            <ResultsComponent />
        </div>
    )
}
