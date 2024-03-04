import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './store'

interface Task {
  id: string
  name: string
  completed: boolean
}

interface TasksState {
  items: Task[]
}

const initialState: TasksState = {
  items: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      state.items.push({
        id: `${state.items.length + 1}`,
        name: action.payload.name,
        completed: false,
      })
    },
    toggleTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.items.find(task => task.id === action.payload.id)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const {addTask, toggleTask} = tasksSlice.actions

// Додавання явного типу повернення для селектора
export const selectTasks = (state: RootState): Task[] => state.tasks.items

export default tasksSlice.reducer
