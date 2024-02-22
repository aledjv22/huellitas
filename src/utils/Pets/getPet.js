export const useGetPet = (API_URL) => {
  const getPet = async (id, setPet, setIsEditing) => {
    const response = await fetch(`${API_URL}/pets/${id}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    if(response.ok) {
      const petFound = await response.json();
      setPet(petFound);
      setIsEditing(false);
      return petFound;
    } else {
      console.log("Error");
      return null;
    }
  };

  return getPet;
}