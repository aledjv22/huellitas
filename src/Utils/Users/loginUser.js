export const useLoginUser = (API_URL) => {
  const loginUser = async (
    setIsLoggedIn,
    setUserLogged,
    setLoginSuccess, 
    setIsEmailAndPasswordValid, 
    email, 
    password
  ) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password 
      })
    });
    if (response.ok) { 
      const newUser = await response.json();
      setLoginSuccess(true); 
      setIsLoggedIn(true);
      console.log(newUser);
      setUserLogged(newUser);
    } else if (response.status === 401) {
        setIsEmailAndPasswordValid(false);
    }
  };

  return loginUser;
};