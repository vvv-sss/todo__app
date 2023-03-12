import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/auth/authSlice';
import tasksReducer from '../components/tasks/tasksSlice';
import addTaskReducer from '../components/add-task/addTaskSlice';
import editTaskReducer from '../components/edit-task/editTaskSlice';
import addSubtaskReducer from '../components/add-subtask/addSubtaskSlice';
import groupsReducer from '../components/groups/groupsSlice';
import addGroupReducer from '../components/add-group/addGroupSlice';
import editGroupReducer from '../components/edit-group/editGroupSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
        addTask: addTaskReducer,
        editTask: editTaskReducer,
        addSubtask: addSubtaskReducer,
        groups: groupsReducer,
        addGroup: addGroupReducer,
        editGroup: editGroupReducer
    }
});