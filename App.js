import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import countriesData from './countries.json'; // Import the JSON data

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (query) {
      const filteredResults = countriesData.filter((country) => {
        // Check if country.name and country.capital exist and convert them to lowercase for comparison
        const countryName = country.name ? country.name.toLowerCase() : '';
        const countryCapital = country.capital ? country.capital.toLowerCase() : '';

        // Return true if the query matches either the country name or capital
        return (
          countryName.includes(query.toLowerCase()) ||
          countryCapital.includes(query.toLowerCase())
        );
      });
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]); // Clear results if no query
    }
  };

  return (
    <div className="App">
      <h1>Fast Finder Search Bar</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((country) => (
              <li key={country.name}>
                <strong>{country.name}</strong> - {country.capital}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default App;
