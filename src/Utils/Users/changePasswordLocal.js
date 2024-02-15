export const useChangePasswordLocal = (API_URL) => {
    const changePasswordLocal = async (
      email, 
      password,
      newPassword,
      setIsCurrentPassword
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
        setIsCurrentPassword(true);
        return 'Password changed';
      } else if (response.status === 401) {
        setIsCurrentPassword(false);
        return 'error';
      }
    };
  
    return changePasswordLocal;
  };