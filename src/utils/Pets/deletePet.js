export const useDeletePet = (API_URL) => {
  const deletePet = async (id, token, setPets, setDeleteSuccess) => {
    const response = await fetch(`${API_URL}/pets/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if(response.ok) {
      setPets(prevPets => prevPets.filter(pet => pet.id !== id));
      setDeleteSuccess(true);
    } else {
      console.error("Error al eliminar la mascota:", response.statusText);
    }
  };

  return deletePet;
}