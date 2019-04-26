const USER_LOGIN = "USER_LOGIN";
const USER_AUTHENTICATED = "USER_AUTHENTICATED";

export const loginUser = user => ({
  type: USER_LOGIN,
  user
});

export const authenticatedUser = token => ({
  type: USER_AUTHENTICATED,
  token
});
