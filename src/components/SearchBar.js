import React from "react";

import { useLocation } from "wouter";
import "./SearchBar.css"

export default function SearchBar ({keyword, setKeyword}) {
    
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim() !== '') {
            pushLocation(`/gif/${keyword}`);
        }
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };


    return (
        <form onSubmit={handleSubmit}>
           <div className="search-container">
            <input
           type="text"
           value={keyword}
           onChange={handleInputChange}
           placeholder="Escribe el nombre de tu gif..."
           />
           <button className="button" type="submit">Buscar</button>
           </div>
           
        </form>
    )
}