// Save the authentication token to local storage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  // Retrieve the authentication token from local storage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  // Remove the authentication token from local storage (logout or session expiry)
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  