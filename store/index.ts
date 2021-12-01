import { combineReducers, createStore } from "redux";
import { UserReducer } from "./user/UserReducer";

const allReducers = combineReducers({
    user: UserReducer
});

export const store = createStore(allReducers);