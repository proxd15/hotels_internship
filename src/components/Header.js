// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cities, activeCity, onCityChange }) {
  const displayedCities = cities.slice(0, 4);
  return (
    <header>
      <div className='main-city'>
      <div className="city-tabs mx-4">
        {displayedCities.map((city) => (
          <Link
            key={city}
            to={`/properties/${city}`} // Use the city as a route parameter
            className={city === activeCity ? 'active' : 'mx-4'}
            onClick={() => onCityChange(city)}
          >
            {city}
          </Link>
        ))}
      </div>
      <div className='view-all mx-4'>
        View all &rarr;
      </div>
      </div>
    </header>
  );
}

export default Header;
