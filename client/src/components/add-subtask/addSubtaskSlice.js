import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "id": null,
    "subtaskTitle": "",
    "isChecked": false
}

export const addSubtaskSlice = createSlice({
    name: 'add-subtask',
    initialState,
    reducers: {
        setInitialSubtaskState: () => {
            return initialState;
        },
        setSubtaskId: (state, action) => {
            state.id = action.payload;
        },
        setSubtaskTitle: (state, action) => {
            state.subtaskTitle = action.payload;
        },
        setSubtaskIsChecked: (state, action) => {
            state.isChecked = action.payload;
        }
    }
});

export const { setInitialSubtaskState, setSubtaskId, setSubtaskTitle, setSubtaskIsChecked } = addSubtaskSlice.actions;

export default addSubtaskSlice.reducer;