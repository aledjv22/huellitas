export const usePostPet = (API_URL) => {
  const postPet = async (
    petData,
    token,
    setPets,
    setRegistrationSuccess,
  ) => {
    const response = await fetch(`${API_URL}/pets`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(petData)
    });
    if (response.ok) { 
      const newPet = await response.json();
      setPets(prevPets => [...prevPets, newPet]);
      setRegistrationSuccess(true); 
    } else {
      console.error('Error al crear la mascota:', response.statusText);
    }
  };

  return postPet;
};