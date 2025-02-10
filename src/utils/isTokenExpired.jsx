import {jwtDecode} from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) return true; // No token means expired

  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // Compare expiration time
  } catch (error) {
    console.log(error);
    return true; // Token is invalid
  }
};