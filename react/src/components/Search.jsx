import React, { useState } from 'react';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className="d-flex navbar-search" role="search" onSubmit={handleSubmit}>
            <div className="input-group">
                <input className="form-control" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
                <div className="input-btn">
                    <button className="search-box-btn" type="submit"><img className="search-icon" src="/search.png" /></button>
                </div>
            </div>
        </form>
    );
};

export default Search;