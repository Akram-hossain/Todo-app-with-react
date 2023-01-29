import React,{useState} from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

import {v4 as uuidv4} from "uuid";

function Home() {

    const [todos,setTodo] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodo((oldTodos) => {
            return [...oldTodos,{id: uuidv4(), newTodo}]
        })  
    }

    const RemoveTodo = (id) => {
       setTodo((oldTodos) => {
        const filterTodo = oldTodos.filter((todo) => todo.id !== id)
        return filterTodo;
       })
    }

  return (
    <div className='container py-4 bg-light'>
        <h1>Create Todo</h1>
        <NewTodo todo={handleNewTodo} /> 
        <h1>Todos List</h1>
        <Todos todos={todos} onRemoveTodo={RemoveTodo} />
    </div>
  )
}

export default Home