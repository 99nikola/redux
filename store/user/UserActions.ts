export const initialState = {
    username: "",
    email: "",
    isLogged: false,
    isOnline: false
}

export const setUser = (user: Record<any, any>) => ({
    type: EUserActions.SET_USER,
    payload: user
});

export const setOnlineStatus = (isOnline: boolean) => ({
    type: EUserActions.CHANGE_ONLINE_STATUS,
    payload: isOnline
});

export const logoutUser = () => ({
    type: EUserActions.LOGOUT,
    payload: initialState
    
});

export enum EUserActions {
    SET_USER,
    CHANGE_ONLINE_STATUS,
    LOGOUT
}