import React from 'react';
import InputField from './components/InputField';
import './App.css';
import { Task } from './models/models';
import TasksList from './components/TasksList';


const App: React.FC = () => {
  const [task, setTask] = React.useState<string>('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (task) {
      setTasks([...tasks, {id: Date.now(), todo: task, isDone: false}]);
      setTask('');
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <span className='heading'>Trello Clone</span>
      <InputField task={task} setTask={setTask} addTask={addTask} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
