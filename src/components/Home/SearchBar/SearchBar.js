import React from 'react';
import './SearchBar.css'
import logo from '../../../images/logo-hn-search.png'
import logoAlgolia from '../../../images/logo-algolia.svg'

const SearchBar = () => {
    return (
        <div className="searcharGrand">
            <div className="d-flex  SearchHeader searchBar-div ">
                <div className="d-flex align-items-center mx-3">
                    <a className="SearchHeader_logo" href="#">
                        <img src={logo} alt="Logo" />
                    </a>

                    <div className="SearchHeader_label">
                        Search<br />Hacker News
                    </div>
                </div>

                <div className="SearchHeader_container align-self-center align-items-center d-flex">
                    <span className="SearchIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff742b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                    <input type="search" placeholder="Search stories by title, url or author" class="SearchInput"></input>
                    <div className="PoweredBy align-items-center  d-flex">
                        <span>Search by</span>
                        <img className="logo-algolia" src={logoAlgolia} alt="Algolia Logo" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SearchBar;