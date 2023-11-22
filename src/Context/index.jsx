import React, { useState, useEffect } from "react";

const HuellitasContext = React.createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pets, setPets] = useState([]);

  const API_URL = 'https://db-huellitas-0308351800f8.herokuapp.com/api/v1';

  useEffect(() => {
    fetch(`${API_URL}/pets`)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.log(error));
  },[]);

  

  return (
    <HuellitasContext.Provider value={{
      isLoggedIn, 
      setIsLoggedIn,
      pets,
      setPets
    }}>
      {children}
    </HuellitasContext.Provider>
  );
}

export { HuellitasContext, HuellitasProvider };