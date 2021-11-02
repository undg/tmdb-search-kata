import { FormEvent, useState } from 'react'
import { createSearchUrl } from '../api'
import { SearchMoviesResponse } from '../types'

export function useSearch() {
    const [response, setResponse] = useState<SearchMoviesResponse>()

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const url = createSearchUrl({ query: 'frozen' })
        fetch(url)
            .then(res => res.json())
            .then(setResponse)
    }

    return { response, onSubmit }
}
