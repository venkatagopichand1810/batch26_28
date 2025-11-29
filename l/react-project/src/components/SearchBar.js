import { useState } from "react";

function SearchBar({onSearch}) {
    const[searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                placeholder="search your movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )

} 

export default SearchBar