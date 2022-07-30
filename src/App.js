import {TodoForm, TodoList} from './components';
import './App.css';

function App() {

  return (
    <div className="App">
      <header role="header">
        <h1>Tom's To do list</h1>
      </header>
      <TodoForm />
      <TodoList />      
    </div>
  );
}

export default App;
