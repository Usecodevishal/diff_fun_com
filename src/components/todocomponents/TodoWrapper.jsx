import React, { useState } from 'react'
import TodoFrom from './TodoFrom';
import TodoList from './TodoList';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      if(todo !== ""){
        let newTodo = {
          id: new Date().getTime(),
          task: todo,
          isEditing: false,
          status: false
      }

      setTodos([...todos,newTodo]);
      }
        
    }
  return (
    <div>
        <TodoFrom addTodo={addTodo}/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default TodoWrapper