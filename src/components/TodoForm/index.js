import React from 'react';


export default function TodoForm({inputText, setInputText, setTodos, todos}) {
  
    function handleInputText(e) {
      setInputText(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault(); //stops the page from refreshing
      setTodos([ ...todos,
        {text: inputText, completed: false, id: Math.random() * 100}
      ])
      setInputText('');
    }

  return (
    <div>
      <form>
        <label htmlFor='todo'>Todo</label>
        <input id="todo" name="todo" value={inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={handleSubmit} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
      </form>

    </div>
  )
}
