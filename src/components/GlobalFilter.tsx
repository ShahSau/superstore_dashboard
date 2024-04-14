import { Search } from 'lucide-react'
import React from 'react'

const GlobalFilter = ({ filter, setFilter }: { filter: string, setFilter: any }) => {
    return (
        <div className=" bg-gray-100 z-0">
            <div className="max-w-md mx-auto flex">
                <Search className="h-6 w-6 text-gray-500" aria-hidden="true" />
                <input
                    name="global-filter" id="global-filter" className="px-4 appearance-none outline-none text-gray-800 w-full z-0"
                    value={filter || ''}
                    onChange={(e) => setFilter(String(e.target.value))}
                    placeholder='Search Whole Table...'
                />
            </div>
        </div>
    )
}

export default GlobalFilter