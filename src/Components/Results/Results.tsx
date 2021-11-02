import { SearchMoviesResults } from '../../types'
import './Results.css'
import cls from 'classnames'
import { useState } from 'react'

const animation = {
    fade: 300,
    slide: 300,
}

export const ResultsComponent: React.FC<{ results?: SearchMoviesResults[] }> = props => {
    if (!props.results) return null

    return (
        <div className="film-list" data-testid="ResultsComponent">
            <ul className="film-list__ul">
                {props.results.map((movie, idx) => (
                    <Movie key={movie.id} movie={movie} idx={idx} />
                ))}
            </ul>
        </div>
    )
}

export const Movie: React.FC<{ movie: SearchMoviesResults; idx: number }> = ({ movie, idx }) => {
    const [loaded, setLoaded] = useState(false)
    const [slided, setSlided] = useState(false)

    const clsWithState = cls('film-list__li', {
        img_loaded: loaded,
        slided: slided,
    })

    const Img = () => (movie.backdrop_path ? <img src={createImageUrl(movie.backdrop_path)} alt={movie.title} /> : null)
    return (
        <li className={clsWithState}>
            <div className="image">
                <Img />
            </div>
            <div className="details">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="opacity-70">{movie.release_date}</p>
                <p className="">{movie.overview}</p>
            </div>
        </li>
    )
}

function createImageUrl(poster_path: string) {
    return `https://www.themoviedb.org/t/p/w500_and_h282_face/${poster_path}`
}
