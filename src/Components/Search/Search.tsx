import { useInput } from '../../hooks'
import './Search.css'
import { SearchButton } from './SearchButton'

export const SearchComponent: React.FC<{ onSubmit: (e: React.FormEvent<HTMLFormElement>, query: string) => void }> = ({
    onSubmit,
}) => {
    const { value, onChange } = useInput('')

    return (
        <div className="search" data-testid="SearchComponent">
            <form className="search__form" onSubmit={e => onSubmit(e, value)}>
                <input className="search__input" data-testid="search-input" value={value} onChange={onChange} />
                <SearchButton className="search__btn" />
            </form>
        </div>
    )
}
