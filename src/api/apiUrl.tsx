import { api } from '../const'

/** more or less https://developers.themoviedb.org/3/search/search-movies */
interface CreateSearchUrl {
    query: string
    language?: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
}

export function createSearchUrl(parms: CreateSearchUrl) {
    const url = new URL(api.endpoint.searchMovie, api.url)
    const query = new URLSearchParams(url.search)

    query.append(api.key.name, api.key.value)
    Object.keys(parms).forEach(key => query.append(key, (parms as any)[key]))

    return url + '?' + query.toString()
}
