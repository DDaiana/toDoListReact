import React, {useState} from 'react';
import {TodoForm, TodoList} from './components';
import './App.css';

function App() {

  const [inputText, setInputText] = useState(''); 
  // note first element in the array is a variable, and the second element is used to update the element
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header role="header">
        <h1>Tom's To do list</h1>
      </header>
      <TodoForm inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos}/>      
    </div>
  );
}

export default App;
