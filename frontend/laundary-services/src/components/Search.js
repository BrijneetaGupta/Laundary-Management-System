import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/search.css';
import search from '../assets/uploads/icons/search.svg';

const Search = () =>{
    return(
        <>
            <span>
                <img src={search} alt="search" />
            </span>
            <input type='text' className="form-control" />
        </>
    )
}

export default Search