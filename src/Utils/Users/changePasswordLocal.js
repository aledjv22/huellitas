export const useChangePasswordLocal = (API_URL) => {
    const changePasswordLocal = async (
      email, 
      password,
      newPassword
    ) => {
      const response = await fetch(`${API_URL}/auth/change-password-local`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          email,
          password,
          newPassword
        })
      });
      if (response.ok) {
        console.log('ok');
      } else if (response.status === 401) {
        console.log('Error: Unauthorized');
      }
    };
  
    return changePasswordLocal;
  };