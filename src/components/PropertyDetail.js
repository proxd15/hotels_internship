// PropertyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail({ properties }) {
  const { id } = useParams();
  const property = properties.find((p) => p.hotel_id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-detail">
      <h2>{property.hotel_name}</h2>
      <img src={property.photo1} alt={property.hotel_name} />
      <p>{property.country}</p>
      <p>Price: {property.price}</p>
    </div>
  );
}

export default PropertyDetail;
