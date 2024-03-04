import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { addTask, toggleTask } from './store/tasks-slice'
import { MyInput } from './component/ui/my-input'
import { MyBtn } from './component/ui/my-btn'
import { AppStyle } from './app-style'
import { FilterSelect } from './component/ui/filter-select'
import MyCheckbox from './component/Checkbox/my-checkbox'

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [taskName, setTaskName] = useState<string>('')
  const [filter, setFilter] = useState<'all' | 'completed' | 'current'>('all')

  const { tasks } = useSelector((state: RootState) => state.tasks)

  const handleAddTask = (): void => {
    if (taskName.length > 0) {
      dispatch(addTask({ 'name': taskName }))
      setTaskName('')
    }
  }

  const handleToggleTask = (id: string): void => {
    dispatch(toggleTask({ id }))
  }

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>):
  void => {
    setFilter(event.target.value as 'all' | 'completed' | 'current')
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'current') return !task.completed
    return true
  })

  const completedCount = tasks.filter((task) => task.completed).length
  const currentCount = tasks.filter((task) => !task.completed).length

  return (
    <AppStyle>
      <div>Completed: {completedCount} | Current: {currentCount}</div>
      <div>
        <MyInput
          value={taskName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setTaskName(event.target.value)
          }}
          placeholder="Add new task"
        />
        <MyBtn type="button" onClick={handleAddTask}>Add Task</MyBtn>
      </div>
      <FilterSelect value={filter} onChange={handleChangeFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="current">Current</option>
      </FilterSelect>
      <div>
        {filteredTasks.map((task) => <div key={task.id} className="item-task">
          <MyCheckbox
            completed={task.completed}
            onToggle={(): void => handleToggleTask(task.id)}
          />
          <span>{task.name}</span>
        </div>)}
      </div>
    </AppStyle>
  )
}

export default App
