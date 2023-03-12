import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        initializeGroupState: (state, action) => {
            return action.payload;
        }
    }
});

export const { initializeGroupState } = groupsSlice.actions;

export default groupsSlice.reducer;