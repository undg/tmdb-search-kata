export const SearchButton: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={className ?? ''} data-testid="SearchButtonComponent">
            <button
                className="flex justify-center p-2 text-white align-baseline border border-r-0 rounded-full search-btn transition-colors duration-150 focus:shadow-outline"
                data-testid="search-btn"
            >
                <svg className="svg_magnifier" viewBox="0 0 100 100" width="20" height="20" x="0px" y="0px">
                    <circle cx="45" cy="45" r="35" />
                    <line x1="70" y1="70" x2="100" y2="100" />
                </svg>
            </button>
        </div>
    )
}
