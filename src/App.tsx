import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store/store";
import {addTask, toggleTask} from "./store/tasksSlice";
import {MyInput} from "./component/ui/MyInput";
import {MyBtn} from "./component/ui/MyBtn";
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox} from "./component/ui/MyCheckbox";
import {AppStyle} from "./app-style";
import {FilterSelect} from "./component/ui/FilterSelect";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    const [taskName, setTaskName] = useState('');
    const [filter, setFilter] = useState<'all' | 'completed' | 'current'>('all');

    const {items} = useSelector((state: RootState) => state.tasks);


    const handleAddTask = () => {
        if (taskName.length > 0) {
            dispatch(addTask({name: taskName}));
            setTaskName('');
        }
    };

    const handleToggleTask = (id: string) => {
        dispatch(toggleTask({id}));
    };

    const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as 'all' | 'completed' | 'current');
    };

    const filteredTasks = items.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'current') return !task.completed;
        return true;
    });

    const completedCount = items.filter(task => task.completed).length;
    const currentCount = items.filter(task => !task.completed).length;

    return (
        <AppStyle>
            <div>Completed: {completedCount} | Current: {currentCount}</div>
            <div>
                <MyInput
                    value={taskName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)}
                    placeholder="Add new task"
                />
                <MyBtn type="submit" onClick={handleAddTask}>Add Task</MyBtn>
            </div>
            <FilterSelect value={filter} onChange={handleChangeFilter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="current">Current</option>
            </FilterSelect>
            <div>
                {filteredTasks.map((item) => (
                    <div key={item.id} className="item-task">
                        <CheckboxContainer onClick={() => handleToggleTask(item.id)}>
                            <HiddenCheckbox checked={item.completed}/>
                            <StyledCheckbox checked={item.completed}/>
                        </CheckboxContainer>
                        <span> {item.name}</span>
                    </div>
                ))}
            </div>
        </AppStyle>
    );
}

export default App;
