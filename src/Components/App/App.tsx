import { SearchComponent, ResultsComponent } from '..'
import {useSearch} from '../../hooks'
import './App.css'

export function App() {
    const {onSubmit, results}  = useSearch()
    return (
        <div className="App" data-testid="search-wrap">
            <SearchComponent onSubmit={onSubmit}/>
            <ResultsComponent />
        </div>
    )
}
