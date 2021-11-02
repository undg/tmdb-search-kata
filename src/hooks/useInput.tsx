import { ChangeEvent, useState } from 'react'

export function useInput(defaultValue: string) {
    const [value, setValue] = useState(defaultValue)
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }
    return { value, onChange }
}
