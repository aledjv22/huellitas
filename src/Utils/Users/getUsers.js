import React, { useState, useEffect } from "react";

export const getUsers = (API_URL) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);

  return { users };
}