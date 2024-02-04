export const usePatchUser = (API_URL) => {
  const patchUser = async (
    id,
    token,
    userData,
    users,
    userLogged,
    setUserLogged,
    setIsEditing,
  ) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    });
    if(response.ok) {
      setUserLogged(null);
      const user = users.find(user => user.id === userLogged.user.id);
      setUserLogged({ user, token: userLogged.token });
      setIsEditing(false);
    } else {
      console.log('Error');
      console.log(response);
    }
  };

  return patchUser;
}