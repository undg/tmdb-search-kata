import { useInput } from '../../hooks'
import './Input.css'

export const InputComponent: React.FC = () => {
    const { value, onChange } = useInput('')

    return (
        <div className="input-component" data-testid="InputComponent">
            <form>
            <input
                className="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
                data-testid="search-input"
                value={value}
                onChange={onChange}
            />
            </form>
        </div>
    )
}
