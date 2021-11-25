export const loginService = {
  login,
};
function login(username, password) {
  if (username === "admin" && password === "admin@007") {
    return true;
  } else {
    return false;
  }
}
