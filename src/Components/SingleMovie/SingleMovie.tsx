import './SingleMovie.scss'
import { ImagePlaceholderComponent } from '..'
import { createImageUrl, Movie } from '../../api'

export const SingleMovieComponent: React.FC<{ movie: Movie }> = props => {
    const { movie } = props
    const Img = () =>
        movie.backdrop_path ? (
            <img src={createImageUrl(movie.backdrop_path)} alt={movie.title} />
        ) : (
            <ImagePlaceholderComponent />
        )
    return (
        <div className="single-movie" data-testid="SingleMovieComponent">
            <Img />
            <h2 className='mt-3 mb-3 text-2xl font-bold'>{movie?.title}</h2>
            <p>{movie?.overview}</p>
        </div>
    )
}
