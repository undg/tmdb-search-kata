import { SearchMoviesResults } from '../../types'
import './Results.css'

export const ResultsComponent: React.FC<{ results?: SearchMoviesResults[] }> = props => {
    if (!props.results) return null

    return (
        <div className='film-list' data-testid="ResultsComponent">
            <ul className='film-list__ul'>
                {props.results.map(el => (
                    <MovieListElement key={el.id} {...el} />
                ))}
            </ul>
        </div>
    )
}

export const MovieListElement: React.FC<SearchMoviesResults> = props => {
    const Img = () => (props.backdrop_path ? <img src={createImageUrl(props.backdrop_path)} alt={props.title} /> : null)
    return (
        <li className='film-list__li'>
            <div className="image">
                <Img />
            </div>
            <div className="details">
                <h2 className="text-2xl font-bold">{props.title}</h2>
                <p className="opacity-70">{props.release_date}</p>
                <p className="">{props.overview}</p>
            </div>
        </li>
    )
}

function createImageUrl(poster_path: string) {
    return `https://www.themoviedb.org/t/p/w500_and_h282_face/${poster_path}`
}
