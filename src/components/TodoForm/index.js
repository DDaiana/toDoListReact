import React, {useState} from 'react';

export default function TodoForm() {
    const [inputText, setInputText] = useState(''); 
    // note first element in the array is a variable, and the second element is used to update the element
    const [submitValue, setSubmitValue] = useState('');
  
    function handleInputText(e) {
      setInputText(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault(); //stops the page from refreshing
      setSubmitValue(inputText);
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
