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
    removeTask(state, action) {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export default todosSlice;
