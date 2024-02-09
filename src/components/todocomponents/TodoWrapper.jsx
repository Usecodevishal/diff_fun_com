import React, { useState } from 'react'
import TodoFrom from './TodoFrom';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let newTodo = {
            id: new Data().getTime(),
            task: todo,
            isEditing: false,
            status: false
        }

        setTodos([...todos,newTodo]);
    }
  return (
    <div>
        <TodoFrom addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper