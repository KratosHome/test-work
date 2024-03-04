import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface Task {
  id: string
  name: string
  completed: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  'tasks': [],
}

export const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    'addTask': (state, action: PayloadAction<{ name: string }>) => {
      state.tasks.push({
        'id': `${state.tasks.length + 1}`,
        'name': action.payload.name,
        'completed': false,
      })
    },
    'toggleTask': (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((taskItem) => {
        return taskItem.id === action.payload.id
      })
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { addTask, toggleTask } = tasksSlice.actions

export const selectTasks = (state: RootState): Task[] => state.tasks.tasks
export default tasksSlice.reducer
