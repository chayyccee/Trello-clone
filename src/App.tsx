import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import InputField from './components/InputField';
import './App.css';
import { Task } from './models/models';
import TasksList from './components/TasksList';


const App: React.FC = () => {
  const [task, setTask] = React.useState<string>('');
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = React.useState<Task[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (task) {
      setTasks([...tasks, {id: Date.now(), todo: task, isDone: false}]);
      setTask('');
    }
  };

  const endOfDrag = (result: DropResult) => {
    // console.log(result);

    const { destination, source } = result;
    
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;
  
    let add,
        active = tasks,
        completed = completedTasks;

      if(source.droppableId === 'Taskslist') {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = completed[source.index];
        completed.splice(source.index, 1);
      }

      if(destination.droppableId === 'Taskslist') {
        active.splice(destination.index, 0, add);
       // setTasks([...active]);
      } else {
        completed.splice(destination.index, 0, add);
      }
      setCompletedTasks([...completed]);
      setTasks([...active]);
  };

  return (
    <DragDropContext onDragEnd={endOfDrag}>
      <div className="App">
      <span className='heading'>Trello Clone</span>
      <InputField task={task} setTask={setTask} addTask={addTask} />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
    </DragDropContext>
  );
}

export default App;
