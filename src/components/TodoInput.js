// TodoInput.js
import React, { useState } from 'react';

function TodoInput({ handleAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddButton = () => {
    let newTodo = {
      newtitle: title,
      newdescription: description,
    };
    handleAddTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='todo-input'>
      <div className='todo-inp'>
        <div className='todo-input-item'>
          <label>Title</label>
          <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="what's the task title?"></input>
        </div>
        <div className='todo-input-item'>
          <label>Description</label>
          <input type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="what's the task description?"></input>
        </div>
      </div>
      <div className='btn'>
        <div className='todo-input-item'>
          <button type='reset' onClick={handleAddButton}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
