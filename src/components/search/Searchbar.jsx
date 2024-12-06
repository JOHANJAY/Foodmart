import { useRef } from 'react'
import { useState } from "react"
import { FaSearch } from "react-icons/fa"


const Searchbar = () => {
    const [query, setQuery] = useState('')
    const inputref = useRef(null)
  return (
    <div className="h-[30px] flex items-center">
        <input type="text" placeholder="Search for items or a vendor" value={query}
        onChange={(e) => setQuery(e.target.value)} ref={inputref} className="w-56 h-full px-4 text-xs  bg-gray-300 focus:outline-none" /> 
        <FaSearch className="text-3xl p-2 bg-[#00B207] cursor-pointer" onClick={() => inputref.current.focus()} />
    </div>
  )
}
export default Searchbar