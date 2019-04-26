import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/user.reducer";

let reducer = combineReducers({ user: userReducer });
export default () => {
  const store = createStore(
    reducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
