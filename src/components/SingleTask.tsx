import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Task } from "../models/models";

import './styles.css';

type Props = {
    index: number;
    task: Task;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    tasks: Task[];
    drop?: boolean;
};

const SingleTask = ({ drop, index, task, tasks, setTasks }: Props) => {
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = React.useState<string>(task.todo);

    const handleDone = (id: number) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isDone: !task.isDone };
            }
            return task;
        }));
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setIsEditing(false);
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, todo: taskToEdit };
            }
            return task;
        }));
    };

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, [isEditing]);

  return (
      <Draggable draggableId={task.id.toString()} index={index}>
          {(provided, snapshot) => (
              <form
                className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
                onSubmit={(e) => handleEdit(e, task.id)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
              {isEditing ? (
                  <input
                    ref={inputRef}
                    value={taskToEdit}
                    onChange={(e) => setTaskToEdit(e.target.value)}
                    className='todos__single--text'
                  />
              ):(
                  task.isDone ? (
                      <s className='todos__single--text'>
                        {task.todo}
                      </s>
                  ) : (
                      <span className='todos__single--text'>
                        {task.todo}
                      </span>
                  )
              )}
      
              {drop ? (null) : (<div>
                  <span className="icon" onClick={
                      () => {
                          if (!isEditing && !task.isDone) {
                              setIsEditing(!isEditing);
                      }
                  }}>
                      <AiFillEdit />
                  </span>
                  <span className="icon" onClick={() => handleDelete(task.id)}>
                      <AiFillDelete />
                  </span>
                  <span className="icon" onClick={() => handleDone(task.id)}>
                      <MdDone />
                  </span>
              </div>)}
          </form>
          )}
      </Draggable>
  )
}

export default SingleTask;