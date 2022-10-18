import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tasks from './Tasks';

const AddTask = () => {
const [save, setSave] = useState(0)
    const getTask = (e) => { 
   e.preventDefault()
setSave(save+1)
    }
  return (
     <Form className='text-start'>
          <Form.Group className="mb-3" controlId="addtask">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Add Task" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="daytime">
            <Form.Label>Day&Time</Form.Label>
            <Form.Control type="text" placeholder="Add Day&Time" />
          </Form.Group>
          
          <Button className='text-center w-100' variant="primary" type="submit" onClick={getTask}>
            Save
          </Button>
          { save?  <Tasks/> :null}
      </Form>
      
  )
    }

export default AddTask