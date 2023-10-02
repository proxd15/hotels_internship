import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { useParams } from 'react-router-dom';

function PropertyList({ properties }) {
  const { city } = useParams();
  const [visibleProperties, setVisibleProperties] = useState([]);

  useEffect(() => {
    // Fetch data based on the city parameter or any other logic you need
    const cityFilteredProperties = properties.filter((property) => property.city === city);
    setVisibleProperties(cityFilteredProperties.slice(0, 6));
  }, [city, properties]);

  const showMoreProperties = () => {
    const currentCount = visibleProperties.length;
    const newProperties = properties.slice(currentCount, currentCount + 3);
    setVisibleProperties([...visibleProperties, ...newProperties]);
  };

  return (
    <div className="property-list">
      {visibleProperties.map((property) => (
        <PropertyCard key={property.hotel_id} property={property} />
      ))}
      <div className='col-12 text-center'>
      {visibleProperties.length < properties.length && (
        <button onClick={showMoreProperties} className='btn btn-primary'><i class="fa-solid fa-hourglass-start mx-1"></i>Show More</button>
      )}
      </div>
    </div>
  );
}

export default PropertyList;
