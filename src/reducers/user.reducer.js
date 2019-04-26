const userReducerDefaultState = {
  status: "not logged in"
};

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        status: "logging in",
        email: action.user.email,
        password: action.user.password
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        status: "authenticated",
        token: action.token
      };

    default:
      return state;
  }
};
