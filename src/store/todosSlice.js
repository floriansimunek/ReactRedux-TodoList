const { createSlice } = require('@reduxjs/toolkit');

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTask(state, action) {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false,
            };

            state.push(newTask);
        },
        toggleTask(state, action) {
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask(state, action) {
            return state.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTask, toggleTask, deleteTask } = todosSlice.actions;

export default todosSlice;
