import { FormEvent, useState } from 'react'
import { createSearchUrl } from '../api'
import { SearchMoviesRes } from '../types'

export function useSearch() {
    const [results, setResults] = useState<SearchMoviesRes | null>()

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const url = createSearchUrl({ query: 'frozen' })
        fetch(url)
            .then(res => res.json())
            .then(setResults)
    }

    return { results, onSubmit }
}
