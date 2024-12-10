import { useState } from "react"

export default function Search({search, setSearch, handleSearch}){
    // const [search, setSearch] = useState('')
    return(
        <div className="searchbar"
        >
           <div className="grad">
           <input type="text"
            className="cities"
            placeholder="Enter City Name"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
             />
           </div>
            <button
            onClick={()=> handleSearch()}
            >Search</button>
        </div>
    )
}