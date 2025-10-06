import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
}

type TaskState = {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{title: string}>) => {
            state.tasks.push({
                id: crypto.randomUUID(),
                title: action.payload.title,
                completed: false
            })
        },
        deleteTask: (state, action: PayloadAction<{id: string}>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        toggleTask: (state, action: PayloadAction<{id: string}>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if(task) {
                task.completed = !task.completed
            }
        }
    }
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;