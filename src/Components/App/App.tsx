import { SearchComponent, ResultsComponent } from '..'
import { useSearch } from '../../hooks'
import './App.css'

export function App() {
    const { response, onSubmit } = useSearch()
    return (
        <div className="App" data-testid="search-wrap">
            <SearchComponent onSubmit={onSubmit} />
            <ResultsComponent results={response?.results} />
        </div>
    )
}
