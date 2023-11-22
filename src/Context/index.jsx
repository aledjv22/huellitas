import React, { useState, useEffect } from "react";

const HuellitasContext = React.createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pets, setPets] = useState([]);
  const [searchByType, setSearchByType] = useState(null);

  const API_URL = 'https://db-huellitas-0308351800f8.herokuapp.com/api/v1';

  useEffect(() => {
    fetch(`${API_URL}/pets`)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.log(error));
  },[]);

  // filtering section
  const [filteredPets, setFilteredPets] = useState(null);

  const filteredByType = (pets, searchByType) => {
    return pets?.filter(pet => pet.type.toLowerCase() === searchByType.toLowerCase());
  }

  const filterBy = (searchType, pets, searchByType) => {
    if (searchType === 'type') {
      return filteredByType(pets, searchByType);
    }

    if(!searchType) {
      return pets;
    }
  }

  useEffect(() => {
    if (searchByType)
      setFilteredPets(filterBy('type', pets, searchByType));

    if (!searchByType)
      setFilteredPets(filterBy(null, pets, searchByType));
  },[pets, searchByType]);

  return (
    <HuellitasContext.Provider value={{
      isLoggedIn, 
      pets,
      filteredPets,
      setSearchByType
    }}>
      {children}
    </HuellitasContext.Provider>
  );
}

export { HuellitasContext, HuellitasProvider };