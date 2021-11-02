const api = {
    /**  https://developers.themoviedb.org/3/ */
    url: 'https://api.themoviedb.org/3/',
    /**
     * compose it as 'https://url?api_key=value3sdf',
     */
    keyName: {
        name: 'api_key',
        value: '6de482bc8c5768aa3648618b9c3cc98a',
    },
    endpoint: {
        /**  https://developers.themoviedb.org/3/search/search-movies */
        searchMovie: '/search/movie',
        /**
         * https://developers.themoviedb.org/3/movies/get-movie-details
         *'/movie/{movie_id}'
         */
        movie: '/movie/{movie_id}',
    },
}
