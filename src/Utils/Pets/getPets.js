export const useGetPets = (API_URL) => {
  const getPets = async (setPets) => {
    const response = await fetch(`${API_URL}/pets`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
      const pets = await response.json();
      setPets(pets);
    } else {
      console.log('Error');
      return null;
    }
  };

  return getPets;
}