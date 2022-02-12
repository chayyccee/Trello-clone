import React from 'react'

import './styles.css';

function InputField() {
  return (
    <form className='input'>
        <input className='input__box' type='input' placeholder='Enter a task' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField