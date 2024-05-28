
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import GeneralItemsDataService from "../services/general.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./searchinventory.css"
import Inventory from './Inventory';


const SearchForm = () => {


    //update state of 'searchText' with user entered value
    const [searchText, setSearchText] = useState('');
    const [GeneralItemResults, setGeneralItemResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    //Handle search submit
    const handleSearchClick = (event) => {
        event.preventDefault();
        // Handle the search action here
        console.log("Search button clicked with text:", searchText);
        
       
        
        GeneralItemsDataService.findByTitle(searchText)
        .then(response => {
            setGeneralItemResults(response.data);
            console.log(response.data);
             // Redirect to search results component with data as prop
            //  history.push({
            //     pathname: '/Inventory',
            //     state: { data: GeneralItemResults }
            // });
            navigate('/SearchResults',{ state: { results: response.data } })
        })
        .catch(e => {
            console.log(e);
        });
    };
    

    return (
        <div className="search" id="searchform">
            <form className="search-form">
                <div className="input-container">
                    <input
                        type="text"
                        className="text-field"
                        placeholder="Search for cars, parts, rentals and more.."
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="search-button" onClick={handleSearchClick} >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>
            
        </div>
    );
};

export default SearchForm;
