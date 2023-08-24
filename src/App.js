import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import BeerCard from './Card';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allBeers, setAllBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const API_URL = 'https://api.punkapi.com/v2/beers';

  const fetchAllBeers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setAllBeers(data);
      setFilteredBeers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchBeer = (title) => {
    const filtered = allBeers.filter(beer => beer.name.toLowerCase().includes(title.toLowerCase()));
    setFilteredBeers(filtered);
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBeers(allBeers);
    } else {
      searchBeer(searchTerm);
    }
  }, [searchTerm, allBeers]);

  return (
    <div className="app">
      <h1>BeerLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Beer"
        />
        <img
          src={SearchIcon}
          alt="search"
        />
      </div>

      {filteredBeers.length > 0 ? (
        <div className="container">
          {filteredBeers.map((beerData) => (
            <BeerCard key={beerData.id} beerData={beerData} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Beer found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
