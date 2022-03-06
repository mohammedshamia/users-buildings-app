import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { listReducer } from "./List/reducer";

const reducers = combineReducers({
  listReducer,
});

const middleware = [thunk];

export type AppState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
