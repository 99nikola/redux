import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { UserReducer } from "./user/UserReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
    user: UserReducer
});

const composeEnhancers = typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));
