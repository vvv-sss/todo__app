import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "groupTitle": "",
    "groupDescription": ""
}

export const addGroupSlice = createSlice({
    name: 'add-group',
    initialState,
    reducers: {
        setInitialGroupState: () => {
            return initialState;
        },
        setGroupTitle: (state, action) => {
            state.groupTitle = action.payload;
        },
        setGroupDescription: (state, action) => {
            state.groupDescription = action.payload;
        }
    }
});

export const { setInitialGroupState, setGroupTitle, setGroupDescription } = addGroupSlice.actions;

export default addGroupSlice.reducer;