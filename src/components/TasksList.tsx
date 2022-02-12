import React from 'react';
import { Task } from '../models/models';
import SingleTask from './SingleTask';

import './styles.css';

interface Props {
    tasks: Task[];
    setTasks:  React.Dispatch<React.SetStateAction<Array<Task>>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className='todos'>
        {tasks.map((task) => (
            <SingleTask
              task={task}
              key={task.id}
              setTasks={setTasks}
              tasks={tasks}
            />
        ))}
    </div>
  )
}

export default TasksList;