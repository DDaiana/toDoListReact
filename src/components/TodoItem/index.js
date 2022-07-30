import React from 'react';


export default function TodoItem({todo}) {
  return (
    <div>
        <li>{todo.text}</li>
    </div>
  )
}
