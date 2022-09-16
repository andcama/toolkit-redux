import React, { useState } from 'react'
import { useGetTodosQuery,useGetTodobyIdQuery } from './store/apis/todosApi'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  const {isLoading,data:todo=[]} = useGetTodobyIdQuery(todoId);

  const prevTodo = () =>{
    if(todoId === 1) return ;
    setTodoId(todoId-1);
  }
  const nextTodo = () =>{
   
    setTodoId(todoId+1);
  }
  return (
    <>
    <h1>Todos - RTK Query</h1>
  <hr />
  <h4>is Loading{isLoading ? 'True' : 'False'}</h4>
  <pre>{JSON.stringify(todo)}</pre>
  
  <button onClick={prevTodo}>Prev ToDo</button>
  <button onClick={nextTodo}>Next ToDo</button>
{/* <ul>
  {
todos.map(todo =>(
  <li key={todo.id}><strong>{todo.completed ? 'DONE' : 'Pending'} </strong>{todo.title}</li>
))
  }
</ul> */}

    </>
  
  )
}
