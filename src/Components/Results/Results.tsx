import { SearchMoviesResults } from '../../types'
import './Results.scss'
import cls from 'classnames'
import { useEffect, useState } from 'react'
import {ImagePlaceholderComponent} from './ImagePlaceholder'

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
    // @TODO
    // This variable is magical 💩. It need to be in sync with css animation.
    // With some extra work, useRef() and window.getComputedStyle()
    // should be dynamicaly readed from DOM/css
    const slideTime = 500
    const liDelaySec = 0
    const imgDelaySec = slideTime / 1000
    const timePaddingMs =  150 // smoothening transition between slides
    const currentSlideDelaySec = (idx * slideTime + timePaddingMs) / 1000

    const [loaded, setLoaded] = useState(false)

    const clsWithState = cls('film-list__li', {
        'film-list__li--loaded': loaded,
    })
    useEffect(() => {
        // setLoaded(true)
        return setLoaded(true)
    }, [])

    const Img = () => (movie.backdrop_path ? <img src={createImageUrl(movie.backdrop_path)} alt={movie.title} /> : <ImagePlaceholderComponent />)
    return (
        <li className={clsWithState} style={{ transitionDelay: liDelaySec + currentSlideDelaySec + 's' }}>
            <div className="image" style={{ transitionDelay: imgDelaySec + currentSlideDelaySec + 's' }}>
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
