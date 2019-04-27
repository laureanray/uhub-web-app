const USER_LOGIN = "USER_LOGIN";
const USER_AUTHENTICATED = "USER_AUTHENTICATED";
const USER_LOGOUT = "USER_LOGOUT";
const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const loginUser = user => ({
  type: USER_LOGIN,
  user
});

export const authenticatedUser = token => ({
  type: USER_AUTHENTICATED,
  token
});

export const logoutUser = () => ({
  type: USER_LOGOUT
});

export const loginFailedUser = error => ({
  type: USER_LOGIN_FAILED,
  error
});
