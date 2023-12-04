export const usePatchUser = (API_URL) => {
  const patchUser = async (
    id,
    token,
    firstName,
    lastName,
    email
  ) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName,
        lastName,
        email
      })
    });
    if (response.ok) { 
      const newUser = await response.json();
      setPatchSuccess(true); 
      setIsLoggedIn(true);
      console.log(newUser);
      setUserLogged(newUser);
    } else if (response.status === 401) {
        setIsEmailAndPasswordValid(false);
    }
  };

  return patchUser;
}