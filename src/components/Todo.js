import React from 'react'

import Button from 'react-bootstrap/Button';

function Todo(props) { 

  const {title,desc} = props.todo; 
  let todoid = 5;

  const deleteHandleTodo = (todoid) => {
    props.onRemoveTodo(todoid);
  }

  return (
    <article>
        <div className='todositem'>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <Button variant="danger" onClick={()=>{ deleteHandleTodo(todoid) }}>Delete</Button>{' '}
            </div>
        </div>
    </article>
  )
}

export default Todo