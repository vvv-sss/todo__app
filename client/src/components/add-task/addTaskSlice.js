import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "userId": 1,
    "taskTitle": "",
    "groupId": null,
    "groupTitle": "",    
    "taskDescription": "",
    "subtasks": [],
    "isCompleted": false
}

export const addTaskSlice = createSlice({
    name: 'add-task',
    initialState,
    reducers: {
        setInitialTaskState: () => {
            return initialState;
        },
        setUserIdForTask: (state, action) => {
            state.userId = action.payload;
        },
        setTaskTitle: (state, action) => {
            state.taskTitle = action.payload;
        },
        setGroupId: (state, action) => {
            state.groupId = action.payload;
        },
        setGroupTitle: (state, action) => {
            state.groupTitle = action.payload;
        },
        setTaskDescription: (state, action) => {
            state.taskDescription = action.payload;
        },
        addSubtaskFromAddForm: (state, action) => {
            state.subtasks.push(action.payload);
        },
        removeSubtaskFromAddForm: (state, action) => {
            state.subtasks = state.subtasks.filter(subtask => subtask.id !== action.payload);
        }
    }
});

export const { 
    setInitialTaskState, 
    setUserIdForTask,
    setTaskTitle,
    setGroupId,
    setGroupTitle, 
    setTaskDescription,
    addSubtaskFromAddForm, 
    removeSubtaskFromAddForm 

} = addTaskSlice.actions;

export default addTaskSlice.reducer;