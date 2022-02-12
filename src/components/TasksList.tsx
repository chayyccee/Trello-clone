import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Task } from '../models/models';
import SingleTask from './SingleTask';

import './styles.css';

interface Props {
    tasks: Task[];
    setTasks:  React.Dispatch<React.SetStateAction<Array<Task>>>;
    completedTasks: Task[];
    setCompletedTasks:  React.Dispatch<React.SetStateAction<Array<Task>>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks, completedTasks, setCompletedTasks }) => {
  return (
    <div className='container'>
        <Droppable droppableId='Taskslist'>
            {(provided, snapshot) => (
                <div
                  className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                <span className="todos__heading">
                    Active Tasks
                </span>
                {tasks.map((task, index) => (
                  <SingleTask
                    index={index}
                    task={task}
                    key={task.id}
                    setTasks={setTasks}
                    tasks={tasks}
                   />
                 ))
                }
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        <Droppable droppableId='CompletedTasks'>
            {(provided, snapshot) => (
                <div
                  className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                <span className="todos__heading">
                        Completed Tasks
                    </span>
                    {completedTasks.map((task, index) => (
                      <SingleTask
                        index={index}
                        task={task}
                        key={task.id}
                        setTasks={setCompletedTasks}
                        tasks={completedTasks}
                        drop={true}
                       />
                     ))
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
  )
}

export default TasksList;