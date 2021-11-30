import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        isOnline: false
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isOnline = navigator.onLine;
        },
        setOnlineStatus: (state, action) => {
            state.isOnline = action.payload.isOnline;
        },
        logoutUser: (state) => {
            state.username = "";
            state.email = "";
            state.isOnline = false;
        }
    }
});

export const { setOnlineStatus, setUser, logoutUser } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(increme ntByAmount(amount));
//     }, 1000);
// };

// the outside "thunk creator" function
// const fetchUserById = userId => {
//     // the inside "thunk function"
//     return async (dispatch, getState) => {
//       try {
//         // make an async call in the thunk
//         const user = await userAPI.fetchById(userId)
//         // dispatch an action when we get the response back
//         dispatch(userLoaded(user))
//       } catch (err) {
//         // If something went wrong, handle it here
//       }
//     }
//   }