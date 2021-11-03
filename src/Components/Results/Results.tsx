import { useEffect, useState } from 'react'
import cls from 'classnames'
import './Results.scss'
import { createImageUrl, Movie } from './../../api'
import { ImagePlaceholderComponent, ModalComponent, SingleMovieComponent } from './..'

export const ResultsComponent: React.FC<{ results?: Movie[] }> = ({results = []}) => {
    if (!results.length) return null

    return (
        <div className="film-list" data-testid="ResultsComponent">
            <ul className="film-list__ul">
                {results.map((movie, idx) => (
                    <MovieComponent key={movie.id} movie={movie} idx={idx} numberOfElements={results.length + 1} />
                ))}
            </ul>
        </div>
    )
}

export const MovieComponent: React.FC<{ movie: Movie; idx: number; numberOfElements: number }> = ({ movie, idx, numberOfElements }) => {
    // @TODO
    // `slideTime` is magical variable 💩. It need to be in sync with css animation.
    // With some extra work, useRef() and window.getComputedStyle()
    // should be dynamicaly readed from DOM/css
    const slideTime = 500
    const liDelaySec = 0
    const imgDelaySec = slideTime / 1000
    const timePaddingMs = 150 // smoothening transition between slides
    const currentSlideDelaySec = (idx * slideTime + timePaddingMs) / 1000
    const dateDelaySec = (numberOfElements * (slideTime * 2 + timePaddingMs)) / 1000

    const [loaded, setLoaded] = useState(false)
    const [isOpenModal, setOpenModal] = useState(false)

    const clsWithState = cls('film-list__li', {
        'film-list__li--loaded': loaded,
    })
    useEffect(() => {
        setLoaded(true)
        return setLoaded(true)
    }, [])

    const Img = () =>
        movie.backdrop_path ? (
            <img src={createImageUrl(movie.backdrop_path)} alt={movie.title} />
        ) : (
            <ImagePlaceholderComponent />
        )

    return isOpenModal ? (
        <ModalComponent close={() => setOpenModal(false)}>
            <SingleMovieComponent movie={movie} />
        </ModalComponent>
    ) : (
        <li
            className={clsWithState}
            style={{ transitionDelay: liDelaySec + currentSlideDelaySec + 's' }}
            onClick={() => setOpenModal(true)}
            role="button"
            tabIndex={0}
            aria-pressed="false"
        >
            <div className="image" style={{ transitionDelay: imgDelaySec + currentSlideDelaySec + 's' }}>
                <Img />
            </div>
            <div className="details">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="date opacity-70" style={{ animationDelay: dateDelaySec + 's' }}>
                    {movie.release_date}
                </p>
                <p>{movie.overview}</p>
            </div>
        </li>
    )
}
