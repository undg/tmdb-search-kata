export type SearchMoviesResponse = ok // @TODO | noOk

interface ok {
    page?: number
    results: SearchMoviesResults[]
}

export interface SearchMoviesResults {
    poster_path?: string | null
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: number[]
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    backdrop_path?: string | null
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
    total_results?: number
    total_pages?: number
}

interface noOk {
    status_message: string
    status_code: number
}
