import React, { useState } from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
                <div className="input-btn">
                    <button className="btn btn-secondary" type="submit"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </form>
    );
};

export default Search;