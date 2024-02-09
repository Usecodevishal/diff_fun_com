import React from 'react'

const TodoFrom = ({addTodo}) => {
   const [value, setValue] = React.useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
   }
  return (
    <div>
        <form>
            <input type='text' placeholder='Add Todo...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TodoFrom