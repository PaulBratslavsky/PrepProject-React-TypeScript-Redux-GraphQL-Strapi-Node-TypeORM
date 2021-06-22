import { combineReducers } from "redux";
import throttle from "lodash/throttle";
import { configureStore }  from "@reduxjs/toolkit";
import { loadPersistedState, savePersistedState } from "../helpers/persist";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./slice/userSlice";

const reducers = combineReducers({
  user: userReducer,
});

const persistedState = loadPersistedState();
const composedEnhancers = composeWithDevTools();

const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
  composedEnhancers,
});

store.subscribe(
  throttle(() => {
    savePersistedState({
      user: store.getState().user,
    });
  }, 1000)
);

export default store;
