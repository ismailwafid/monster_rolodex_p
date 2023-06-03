import React from "react";
import './search-box.style.css'

export const SearchBox =({placeholder, handleChange}) =>{
    return(
        <input 
        className="search"
        type='seach' placeholder={placeholder}
        onChange={handleChange}/>
    )
}