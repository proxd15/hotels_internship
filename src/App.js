// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import hotelData from './hotelData';
import './App.css'


function App() {
  const cities = [...new Set(hotelData.map((property) => property.city))];
  const [activeCity, setActiveCity] = useState('London');

  // const filteredProperties = hotelData.filter((property) => property.city === activeCity);

  const handleCityChange = (city) => {
    setActiveCity(city);
  };

  return (
    
    <div className="App">
      <Header cities={cities} activeCity={activeCity} onCityChange={handleCityChange} />
      <Routes>
        {/* <Route path="/proprties/London" element={<PropertyList properties={hotelData} />} /> */}
        <Route path="/" element={<PropertyList properties={hotelData} />} /> 
        <Route path="/properties/:city" element={<PropertyList properties={hotelData} />} />
        <Route path="/property/:id" element={<PropertyDetail properties={hotelData} />} />
      </Routes>
    </div>
  
  );
}

export default App;
