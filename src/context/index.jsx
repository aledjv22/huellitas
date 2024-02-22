import { useState, useEffect, createContext } from "react";
import { useGetUsers } from "../utils/Users/getUsers";
import { useGetPets } from "../utils/Pets/getPets";

const HuellitasContext = createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchByType, setSearchByType] = useState(null);
  const [searchBySex, setSearchBySex] = useState(null);
  const [searchByState, setSearchByState] = useState(null);
  const [searchBySize, setSearchBySize] = useState(null);
  const [userLogged, setUserLogged] = useState(null);
  const [users, setUsers] = useState(null);
  const [pets, setPets] = useState([]);

  const API_URL = "https://db-huellitas-0308351800f8.herokuapp.com/api/v1";

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

  const filteredByState = (pets, searchByState) => {
    return pets?.filter(pet => pet.state.toLowerCase() === searchByState.toLowerCase());
  }

  const filteredBySize = (pets, searchBySize) => {
    return pets?.filter(pet => pet.size.toLowerCase() === searchBySize.toLowerCase());
  }

  const filterBy = (searchType, pets, searchByType, searchBySex, searchByState, searchBySize) => {
    switch (searchType) {
      case "typeSexStateSize":
        return filteredByType(filteredBySex(filteredByState(filteredBySize(pets, searchBySize), searchByState), searchBySex), searchByType);
      case "sexStateSize":
        return filteredBySex(filteredByState(filteredBySize(pets, searchBySize), searchByState), searchBySex);
      case "typeStateSize":
        return filteredByType(filteredByState(filteredBySize(pets, searchBySize), searchByState), searchByType);
      case "typeSexSize":
        return filteredByType(filteredBySex(filteredBySize(pets, searchBySize), searchBySex), searchByType);
      case "typeSexState":
        return filteredByType(filteredBySex(filteredByState(pets, searchByState), searchBySex), searchByType);
      case "stateSize":
        return filteredByState(filteredBySize(pets, searchBySize), searchByState);
      case "sexSize":
        return filteredBySex(filteredBySize(pets, searchBySize), searchBySex);
      case "sexState":
        return filteredBySex(filteredByState(pets, searchByState), searchBySex);
      case "typeSize":
        return filteredByType(filteredBySize(pets, searchBySize), searchByType);
      case "typeState":
        return filteredByType(filteredByState(pets, searchByState), searchByType);
      case "typeSex":
        return filteredByType(filteredBySex(pets, searchBySex), searchByType);
      case "size":
        return filteredBySize(pets, searchBySize);
      case "state":
        return filteredByState(pets, searchByState);
      case "sex":
        return filteredBySex(pets, searchBySex);
      case "type":
        return filteredByType(pets, searchByType);
      default:
        return pets;
    }
  }

  useEffect(() => {
    if (!searchByType && !searchBySex && !searchByState && !searchBySize)
      setFilteredPets(filterBy(null, pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && !searchBySex && !searchByState && !searchBySize)
      setFilteredPets(filterBy("type", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && searchBySex && !searchByState && !searchBySize)
      setFilteredPets(filterBy("sex", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && !searchBySex && searchByState && !searchBySize)
      setFilteredPets(filterBy("state", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && !searchBySex && !searchByState && searchBySize)
      setFilteredPets(filterBy("size", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && searchBySex && !searchByState && !searchBySize)
      setFilteredPets(filterBy("typeSex", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && !searchBySex && searchByState && !searchBySize)
      setFilteredPets(filterBy("typeState", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && !searchBySex && !searchByState && searchBySize)
      setFilteredPets(filterBy("typeSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && searchBySex && searchByState && !searchBySize)
      setFilteredPets(filterBy("sexState", pets, searchByType, searchBySex, searchByState, searchBySize));
  
    if (!searchByType && searchBySex && !searchByState && searchBySize)
      setFilteredPets(filterBy("sexSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && !searchBySex && searchByState && searchBySize)
      setFilteredPets(filterBy("stateSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && searchBySex && searchByState && !searchBySize)
      setFilteredPets(filterBy("typeSexState", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && searchBySex && !searchByState && searchBySize)
      setFilteredPets(filterBy("typeSexSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && !searchBySex && searchByState && searchBySize)
      setFilteredPets(filterBy("typeStateSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (!searchByType && searchBySex && searchByState && searchBySize)
      setFilteredPets(filterBy("sexStateSize", pets, searchByType, searchBySex, searchByState, searchBySize));

    if (searchByType && searchBySex && searchByState && searchBySize)
      setFilteredPets(filterBy("typeSexStateSize", pets, searchByType, searchBySex, searchByState, searchBySize));
  },[pets, searchByType, searchBySex, searchByState, searchBySize]);

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
      setSearchByState,
      setSearchBySize,
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