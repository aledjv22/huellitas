import React, { useState, useEffect } from "react";

const HuellitasContext = React.createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pets, setPets] = useState([]);
  const [searchByType, setSearchByType] = useState(null);
  const [searchBySex, setSearchBySex] = useState(null);
  const [users, setUsers] = useState([]);

  const API_URL = 'https://db-huellitas-0308351800f8.herokuapp.com/api/v1';

  useEffect(() => {
    fetch(`${API_URL}/pets`)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.log(error));
  },[]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  },[]);

  // filtering section
  const [filteredPets, setFilteredPets] = useState(null);

  const filteredByType = (pets, searchByType) => {
    return pets?.filter(pet => pet.type === searchByType);
  }

  const filteredBySex = (pets, searchBySex) => {
    return pets?.filter(pet => pet.sex.toLowerCase() === searchBySex.toLowerCase());
  }

  const filterBy = (searchType, pets, searchByType, searchBySex) => {
    if (searchType === 'type') 
      return filteredByType(pets, searchByType);

    if (searchType === 'sex')
      return filteredBySex(pets, searchBySex); 

    if (searchType === 'typeAndSex')
      return filteredByType(filteredBySex(pets, searchBySex), searchByType);

    if(!searchType)
      return pets;
  }

  useEffect(() => {
    if (searchByType && searchBySex)
      setFilteredPets(filterBy('typeAndSex', pets, searchByType, searchBySex));

    if (searchByType && !searchBySex)
      setFilteredPets(filterBy('type', pets, searchByType, searchBySex));

    if (!searchByType && searchBySex)
      setFilteredPets(filterBy('sex', pets, searchByType, searchBySex));

    if (!searchByType && !searchBySex)
      setFilteredPets(filterBy(null, pets, searchByType, searchBySex));
  },[pets, searchByType, searchBySex]);

  return (
    <HuellitasContext.Provider value={{
      isLoggedIn, 
      pets,
      filteredPets,
      setSearchByType,
      setSearchBySex,
      setUsers,
      API_URL
    }}>
      {children}
    </HuellitasContext.Provider>
  );
}

export { HuellitasContext, HuellitasProvider };