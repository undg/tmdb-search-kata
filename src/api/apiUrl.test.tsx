import { createSearchUrl } from './apiUrl'

it('should create url with parms, api key and endpoint', () => {
    expect(createSearchUrl({query: 'frozen'})).toBe(
        'https://api.themoviedb.org/3/search/movie?api_key=6de482bc8c5768aa3648618b9c3cc98a&query=frozen'
    )
})
