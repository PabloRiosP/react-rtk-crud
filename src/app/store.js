import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';

export const store = configueStore({
    tasks: tasksReducer,
});

