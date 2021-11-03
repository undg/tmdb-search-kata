import { useEffect, useState } from 'react'
import { Movie } from './../api'

export function useRenderCounter(results: Movie[]) {
    const [renderCount, setRenderCount] = useState(0)
    useEffect(() => {
        if (results.length) setRenderCount(old => old + 1)
    }, [results])

    return { renderCount }
}
