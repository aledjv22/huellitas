export const useChangePassword = (API_URL) => {
  const changePassword = async (
    newPassword, 
    token, 
    setNewPassword, 
    setConfirmedPassword, 
    setIsPasswordChanged
  ) => {
    const response = await fetch(`${API_URL}/auth/change-password`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        token,
        newPassword
      })
    });
    if (response.ok) { 
      setIsPasswordChanged(true);
      setNewPassword('');
      setConfirmedPassword('');
    } else if (response.status === 401) {
      console.log('Error: Unauthorized');
    }
  };

  return changePassword;
};