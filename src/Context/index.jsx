import React, { useState } from "react";

const HuellitasContext = React.createContext();

function HuellitasProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HuellitasContext.Provider value={{
      isLoggedIn, 
      setIsLoggedIn 
    }}>
      {children}
    </HuellitasContext.Provider>
  );
}

export { HuellitasContext, HuellitasProvider };