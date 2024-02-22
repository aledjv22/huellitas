export const usePatchPet = (API_URL) => {
  const patchPet = async (
    id,
    token,
    petData
  ) => {
    const response = await fetch(`${API_URL}/pets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(petData)
    });
    if(!response.ok) {
      console.log("Error");
      console.log(response);
    }
  };

  return patchPet;
}