// TodoList.js
import React from 'react';

function TodoList({ activeButton, alltodo, completedTodos, handelDeleteTodo, handelCompleteTodo }) {
  return (
    <div className='todo-list-area'>
      {activeButton === 'todo' && alltodo.map((item, index) => {
        return (
          <div className='todo-list-item' key={index}>
            <h3>{item.newtitle}</h3>
            <p>{item.newdescription}</p>
            <button type='button' onClick={() => { handelDeleteTodo(index) }} className='deletebutton'>Delete</button>
            <button type='button' onClick={() => { handelCompleteTodo(index) }} className='deletebutton'>Done</button>
          </div>
        )
      })}
      {activeButton === 'done' && completedTodos.map((item, index) => {
        console.log(completedTodos)
        return (
          <div className='todo-list-item' key={index}>
            <h3>{item.newtitle}</h3>
            <p>{item.newdescription}</p>
            <p><small>Completed on: {item.completedOn}</small></p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
