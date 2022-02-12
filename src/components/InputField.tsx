import React from 'react'

import './styles.css';

interface Props {
    task: string;
    setTask:  React.Dispatch<React.SetStateAction<string>>;
    addTask: (e: React.FormEvent) => void; // simply stating that this is a function and won't be returning anything
}

const InputField: React.FC<Props> = ({ task, setTask, addTask }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={
        (e) => {
        addTask(e);
        inputRef.current?.blur();
        }
      }
    >
        <input
        ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='input__box'
          type='input'
          placeholder='Enter a task' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField