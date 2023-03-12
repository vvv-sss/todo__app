import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "groupTitle": "",
    "groupDescription": "",
    "todos": []
}

export const editGroupSlice = createSlice({
    name: 'edit-group',
    initialState,
    reducers: {
        setGroupStateForEdit: (state, action) => {
            return state = action.payload;
        },
        editGroupTitle: (state, action) => {
            state.groupTitle = action.payload;
        },
        editGroupDescription: (state, action) => {
            state.groupDescription = action.payload;
        },
        removeTodoFromGroupView: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id === action.payload);
        }
    }
});

export const { setGroupStateForEdit, editGroupTitle, editGroupDescription, removeTodoFromGroupView } = editGroupSlice.actions;

export default editGroupSlice.reducer;