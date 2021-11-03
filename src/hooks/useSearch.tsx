import { FormEvent, useState } from 'react'
import { createSearchUrl } from '../api'
import { SearchMoviesResponse } from './../api'

export function useSearch() {
    const [response, setResponse] = useState<SearchMoviesResponse>()

    function onSubmit(e: FormEvent<HTMLFormElement>, query: string) {
        e.preventDefault()
        const url = createSearchUrl({ query })
        fetch(url)
            .then(res => res.json())
            .then(setResponse)
    }

    return { response, onSubmit }
}
