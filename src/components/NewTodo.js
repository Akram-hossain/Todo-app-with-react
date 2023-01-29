import React, {useState} from 'react'

import Button from 'react-bootstrap/Button'; 

function NewTodo(props) {

    const [todo,setTodo] = useState({title: '', desc: ''});

    const {title, desc} = todo;

    const eventHandler = (event) => { 
        const name = event.target.name; 
        setTodo((oldTodo) => {
            return {... oldTodo, [name]: event.target.value};
        })
    }

    const formHandler = (event) => {
        event.preventDefault(); 
        props.todo(todo);
        setTodo({title: '', desc: ''})
    }

  return (
    <div className='row justify-content-center'>
        <div className="col-lg-7">
            <form onSubmit={formHandler}>
                <div className="mb-2">
                    <label htmlFor="">Title:</label>
                    <input type="text" id="title" placeholder="Enter title" value={title} name="title" onChange={eventHandler} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Description:</label>
                    <textarea id="desc" placeholder="Enter desc" name="desc" value={desc} cols="30" rows="10" onChange={eventHandler} /> 
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form> 
        </div>
    </div>
  )
}

export default NewTodo