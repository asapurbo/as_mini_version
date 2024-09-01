import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    accessToken: null,
    user: null
}

// create slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userInfo: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        logOut: (state) => {
            state.accessToken = undefined
            state.user = undefined
        }
    }
})


// export module
export const {userInfo, logOut} = userSlice.actions;

export default userSlice.reducer
