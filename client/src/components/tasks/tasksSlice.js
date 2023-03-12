import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initializeState: (state, action) => {
            if (Array.isArray(action.payload)) {
                return action.payload;
            }
        },
        completeTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            task.isCompleted = true;
        },
        removeTask: (state, action) => {
            return state = state.filter(task => task.id !== action.payload);
        }
    }
});

export const { initializeState, completeTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;