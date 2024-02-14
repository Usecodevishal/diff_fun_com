import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        {todos.length > 0 ? <div>
           <ul>
           {todos.map((item,i) => <li key={item.id}>{item.task}</li> )}</ul> 
        </div> : <h3>No Items Added</h3>}
    </div>
  )
}

export default TodoList