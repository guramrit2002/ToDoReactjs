// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import ButtonArea from './components/ButtonArea';
import TodoList from './components/TodoList';

function App() {
  const [activeButton, setActiveButton] = useState('todo');
  const [alltodo, setAllTodo] = useState([]);
  const [completedTodos, setCompleteTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handletabbutton = (buttonname) => {
    setActiveButton(buttonname);
  }

  const handleAddTodo = (newTodo) => {
    let updatedTodo = [...alltodo, newTodo];
    setAllTodo(updatedTodo);
    localStorage.setItem('todolist', JSON.stringify(updatedTodo));
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'))
    if (savedTodo) {
      setAllTodo(savedTodo)
    }

    let savedCompletedTodos = JSON.parse(localStorage.getItem('completedlist'))
    if (savedCompletedTodos) {
      setCompleteTodo(savedCompletedTodos)
    }
  }, [])

  const handelDeleteTodo = (index) => {
    const reducedTodo = [...alltodo]
    reducedTodo.splice(index, 1)
    localStorage.setItem('todolist', JSON.stringify(reducedTodo))
    setAllTodo(reducedTodo)
  }

  const handelCompleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDate()
    let mm = now.getMonth() + 1
    let yyyy = now.getFullYear()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;
    let filteredTodo = {
      ...alltodo[index],
      completedOn: completedOn
    }
    let updatedComletedArray = [...completedTodos, filteredTodo]
    setCompleteTodo(updatedComletedArray)
    const updatedAllTodo = [...alltodo];
    updatedAllTodo.splice(index, 1);
    setAllTodo(updatedAllTodo);
    localStorage.setItem('todolist', JSON.stringify(updatedAllTodo));
    localStorage.setItem('completedlist', JSON.stringify(updatedComletedArray))
    handletabbutton('done')
  }

  return (
    <div className="App">
      <h1>My Todos </h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      <ButtonArea activeButton={activeButton} handletabbutton={handletabbutton} />
      <TodoList
        activeButton={activeButton}
        alltodo={alltodo}
        completedTodos={completedTodos}
        handelDeleteTodo={handelDeleteTodo}
        handelCompleteTodo={handelCompleteTodo}
      />
    </div>
  );
}

export default App;
