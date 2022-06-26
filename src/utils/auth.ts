const TOKEN_KEY = 'token';
const ID_KEY = 'userID';
const ROLE_KEY = 'userRole';

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const getID = () => {
  return localStorage.getItem(ID_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const setID = (token: string) => {
  localStorage.setItem(ID_KEY, token);
};

const setRole = (token: string) => {
  localStorage.setItem(ROLE_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_KEY);
  localStorage.removeItem(ROLE_KEY);
};

export { isLogin, getToken, getID, setToken, setID, setRole, clearToken };
