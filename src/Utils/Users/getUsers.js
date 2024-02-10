export const useGetUsers = (API_URL) => {
  const getUsers = async (setUsers) => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
      const users = await response.json();
      setUsers(users);
    } else {
      console.log('Error');
      return null;
    }
  };

  return getUsers;
}