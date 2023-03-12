import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const editTaskSlice = createSlice({
    name: 'edit-task',
    initialState,
    reducers: {
        setTaskStateForEdit: (state, action) => {
            return state = action.payload;
        },
        editTaskTitle: (state, action) => {
            state.taskTitle = action.payload;
        },
        editGroupId: (state, action) => {
            state.groupId = action.payload;
        },
        editGroupTitle: (state, action) => {
            state.groupTitle = action.payload;
        },
        editTaskDescription: (state, action) => {
            state.taskDescription = action.payload;
        },
        addSubtaskFromEditForm: (state, action) => {
            state.subtasks.push(action.payload);
        },
        removeSubtaskFromEditForm: (state, action) => {
            state.subtasks = state.subtasks.filter(subtask => subtask.id !== action.payload);
        },
        updateSubtask: (state, action) => {
            const id = action.payload;
            const subtask = state.subtasks.find(subtask => subtask.id === id);
            subtask.isChecked = !subtask.isChecked;
        }
    }
});

export const { 
    setTaskStateForEdit, 
    editTaskTitle,
    editGroupId,
    editGroupTitle, 
    editTaskDescription, 
    addSubtaskFromEditForm, 
    removeSubtaskFromEditForm,
    updateSubtask 

} = editTaskSlice.actions;

export default editTaskSlice.reducer;