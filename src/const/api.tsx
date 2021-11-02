export const api = {
    /**  doc: https://developers.themoviedb.org/3/ */
    url: 'https://api.themoviedb.org/',
    /** tldr:  'https://url?api_key=value3sdf', */
    key: {
        name: 'api_key',
        value: '6de482bc8c5768aa3648618b9c3cc98a',
    },
    endpoint: {
        /** doc: https://developers.themoviedb.org/3/search/search-movies */
        searchMovie: '/3/search/movie',
        /**
         * doc: https://developers.themoviedb.org/3/movies/get-movie-details
         * tldr: '/movie/{movie_id}'
         */
        movie: '/3/movie/{movie_id}',
    },
}
