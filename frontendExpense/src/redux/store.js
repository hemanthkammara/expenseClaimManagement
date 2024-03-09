import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as expenseReducer } from "./expense/reducer";

const rootReducer = combineReducers({
  authReducer,
  expenseReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
