import React, {useState} from 'react'
import Todo from './Todo'

function Todos(props) { 
 
  return (
    <section className='main-list'> 
        <div className="row justify-content-center">
            <div className="col-lg-8">
               {
                props.todos.map((todo) => (
                  <Todo todo={todo.newTodo} todoid={todo.id} key={todo.id} onRemoveTodo={props.onRemoveTodo}/>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Todos