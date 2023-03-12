import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "accessToken": null,
    "userId": null,
    "username": null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        initializeUser: (state, action) => {
            return action.payload
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        }
    }
});

export const { initializeUser, setToken } = authSlice.actions;

export default authSlice.reducer;