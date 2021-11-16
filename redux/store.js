import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./reducers/users";
import transactionReducer from "./reducers/transaction"

const reducers = combineReducers({
  users: usersReducer,
  transaction: transactionReducer
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

export default store;
