import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./inventory.css"
import SearchInventory from "./SearchInventory"; 

const Inventory = () => {
    const location = useLocation();
    const results = location.state ? location.state.results : null; // Check if location.state exists
   
    console.log(results);

    // Access data and render it accordingly
    return (
            <>
                {/* <title>Responsive Card Design using HTML & CSS</title> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                   <SearchInventory/>
                
                <div className="card-container">
                    {results.map((results, index) => (
                        <div className="card" key={index}>
                            <img src={results.image} alt={results.name} />
                            <div className="card-content">
                                <h3>{results.name}</h3>
                                <p>{results.description}</p>
                                <Link to={`${results.link}/${results.id}`} className="btn">
                                    Read More
                                </Link>

                                {/* <a href={results.link} className="btn">
                                    Read More
                                </a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </>
    );
};

export default Inventory;
