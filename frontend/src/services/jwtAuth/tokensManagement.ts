import type { JwtTokens } from "./types";

const accessTokenKey = "access-token";
const refreshTokenKey = "refresh-token";

const saveTokens = (tokens: JwtTokens) => {
  localStorage.setItem(accessTokenKey, tokens.accessToken);
  localStorage.setItem(refreshTokenKey, tokens.refreshToken);
};

const deleteTokens = () => {
  localStorage.removeItem(accessTokenKey);
  localStorage.removeItem(refreshTokenKey);
};

const isAuthenticated = () => localStorage.getItem(accessTokenKey) !== null;

const getAccessToken = () => localStorage.getItem(accessTokenKey);
const getRefreshToken = () => localStorage.getItem(refreshTokenKey);

const deleteAccessToken = () => localStorage.removeItem(accessTokenKey);

export { saveTokens, deleteTokens, isAuthenticated, getAccessToken, getRefreshToken, deleteAccessToken };
