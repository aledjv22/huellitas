import { useState, useEffect } from "react";

export const getPets = (API_URL) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/pets`)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error(error));
  }, []);

  return { pets };
}