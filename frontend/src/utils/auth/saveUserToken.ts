export const saveUserToken = (token: string) =>
  localStorage.setItem("auth-token", token);
