import { AnyAction } from "redux";
import { EUserActions, initialState } from "./UserActions";

export const UserReducer = (state: Record<any, any> = initialState, action: AnyAction) => {
    switch (action.type) {
        case EUserActions.SET_USER:
            return ({
                ...action.payload,
                isOnline: navigator.onLine,
                isLogged: true
            });
        case EUserActions.CHANGE_ONLINE_STATUS:
            return ({
                ...state,
                isOnline: action.payload
            });
        case EUserActions.LOGOUT:
            return ({
                ...action.payload
            });
        default:
            return state;
    }
}