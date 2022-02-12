import React from 'react';
import { Task } from '../models/models';

import './styles.css';

interface Props {
    tasks: Task[];
    setTasks:  React.Dispatch<React.SetStateAction<Array<Task>>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className='todos'>
        {tasks.map((task) => (
            <div className='todo' key={task.id}>{task.todo}</div>
        ))}
    </div>
  )
}

export default TasksList;