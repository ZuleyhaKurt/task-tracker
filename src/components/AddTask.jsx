import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tasks from './Tasks';

const AddTask = () => {
    const [save, setSave] = useState(0)
    const[obj,setObj]=useState({})

    const Change = (e) => { 
       setObj(obj.add = e.target.value) 
        
    }
    const ChangeDate = (e) => {
        setObj(obj.date = e.target.value )
    }

    console.log(obj)
    const getTask = (e) => { 
   e.preventDefault()
        setSave(save + 1)
       

    }

  
   
  return (
     <Form className='text-start'>
          <Form.Group className="mb-3" controlId="addtask" >
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Add Task" onChange={Change} />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="daytime">
            <Form.Label>Day&Time</Form.Label>
            <Form.Control type="text" placeholder="Add Day&Time" onChange={ChangeDate}/>
          </Form.Group>
          
          <Button className='text-center w-100' variant="primary" type="submit" onClick={getTask}>
            Save
          </Button>
          {save ? <Tasks obj={obj}/> : null}
      </Form>
      
  )
    }

export default AddTask