import React, { useState } from 'react'

const TodoApp = () => {
    let initialState = [
        {name:"Learn Nodjs", id: new Date().getTime(), status:false}
    ]
    const [todo, setTodo] = useState("");
    const [allTodo, setAllTodo] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {name:todo, id: new Date().getTime(), status:false}
        setAllTodo([...initialState, ...newTodo])

    }

    const handleTodoDone = (todo) => {
        let updatedTodo = allTodo.map((itm,i) => {if(todo === itm){
            todo.status = !todo.status;
            return todo;
        }else {
            return itm
        }})
        setAllTodo(updatedTodo);
    }
   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Your Todo' onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add Todo</button>

            <ul>{allTodo.map((item, i) => {
                return (
                    <div key={item.id}>
                        <li >
                            <input type='checkbox' checked={item.status} onChange={() => handleTodoDone(item)}/>
                            <h3>{item.name}</h3>
                        </li>
                    </div>
                )
            })}</ul>
        </form>
    </div>
  )
}

export default TodoApp;