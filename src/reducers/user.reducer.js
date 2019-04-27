const userReducerDefaultState = {
  isAuthenticated: "false",
  status: undefined,
  token: undefined
};

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        status: "LOGGING_IN"
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        status: "AUTH_OK",
        isAuthenticated: true,
        token: action.token
      };
    case "USER_LOGOUT":
      return {
        ...state,
        status: undefined,
        isAuthenticated: false,
        token: undefined
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        status: "AUTH_FAILED",
        error: action.error
      };

    default:
      return state;
  }
};
