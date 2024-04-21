export const login = () => {
  localStorage.setItem("token", "<token>");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const ifAuth = () => {
  return localStorage.getItem("token") === "<token>";
  //   return true;
};
