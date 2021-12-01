export const initialState = {
    username: "",
    email: "",
    isLogged: false,
    isOnline: false
}

export const fetchUser = () => (
    (dispatch: any) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(user => dispatch(setUser({
                username: user.username,
                email: user.email
            })))
            .catch(error => console.error(error));
    }
);

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
    SET_USER = "SET_USER",
    CHANGE_ONLINE_STATUS = "CHANGE_ONLINE_STATUS",
    LOGOUT = "LOGOUT"
}