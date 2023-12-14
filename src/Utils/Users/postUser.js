export const usePostUser = (API_URL) => {
  const postUser = async (
    userData,
    setUsers,
    setRegistrationSuccess,
    setIsEmailValid
  ) => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    if (response.ok) { 
      const newUser = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
      setRegistrationSuccess(true); 
    } else if (response.status === 409) {
      setIsEmailValid(false);
    } else {
      console.error('Error al crear el usuario:', response.statusText);
    }
  };

  return postUser;
};