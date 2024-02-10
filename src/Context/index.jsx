import { useState, useEffect, createContext } from 'react';
import { useGetUsers } from '../Utils/Users/getUsers';
import { useGetPets } from '../Utils/Pets/getPets';

const HuellitasContext = createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchByType, setSearchByType] = useState(null);
  const [searchBySex, setSearchBySex] = useState(null);
  const [userLogged, setUserLogged] = useState(null);
  const [users, setUsers] = useState(null);
  const [pets, setPets] = useState([]);

  const API_URL = 'https://db-huellitas-0308351800f8.herokuapp.com/api/v1';

  // get pets from API
  const getPets = useGetPets(API_URL);

  // get users from API
  const getUsers = useGetUsers(API_URL);

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

  useEffect(() => {
    getPets(setPets);
  }, [setPets]);

  useEffect(() => {
    getUsers(setUsers);
  }, [setUsers]);

  return (
    <HuellitasContext.Provider value={{
      isLoggedIn, 
      setIsLoggedIn,
      pets,
      setPets,
      filteredPets,
      setSearchByType,
      setSearchBySex,
      users,
      setUsers,
      userLogged,
      setUserLogged,
      API_URL
    }}>
      {children}
    </HuellitasContext.Provider>
  );
}

export { HuellitasContext, HuellitasProvider };