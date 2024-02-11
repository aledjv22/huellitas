export const useGetUser = (API_URL) => {
  const getUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
      const user = await response.json();
      return user;
    } else {
      console.log('Error');
      return null;
    }
  };

  return getUser;
}