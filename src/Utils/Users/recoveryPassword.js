export const useRecoveryPassword = (API_URL) => {
  const recoveryPassword = async (email, setEmail, setIsEmailSent, setIsShortRequest) => {
    const response = await fetch(`${API_URL}/auth/recovery`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email,
      })
    });
    if (response.ok) { 
      const newUser = await response.json();
      console.log(newUser);
      setEmail('');
      setIsEmailSent(true);
      setIsShortRequest(false);
    } else {
      const { message } = await response.json();
      if (message === 'You already have a active token.') 
        setIsShortRequest(true);
    }
  };

  return recoveryPassword;
};