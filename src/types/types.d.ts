interface Task {
  id: string
  name: string
  completed: boolean
}

interface TasksState {
  items: Task[]
}
 
interface TaskCheckboxProps {
  completed: boolean
  onToggle: () => void
}