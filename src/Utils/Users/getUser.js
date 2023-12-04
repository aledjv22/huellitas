export const useGetUser = (API_URL) => {
  const getUser = async (
    id, 
    token
  ) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if(response.ok) {
      const user = await response.json();
      return { user, token };
    } else {
      console.log('Error');
      return null;
    }
  };

  return getUser;
}