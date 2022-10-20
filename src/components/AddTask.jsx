import React, { useState ,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tasks from './Tasks';
import Container from "react-bootstrap/Container"

const AddTask = () => {
    const [obj, setObj] = useState({addtask:"",date:""})
    const { addtask, date } = obj
    const [data, setData] = useState([])
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setData(items)
        }
    
    }, [])
    
    
    const Change = (e) => {
        setObj({
            ...obj,
            [e.target.id]: e.target.value,
            id:new Date().getTime(),
            
        })
  }
    console.log(obj)
    console.log(data)
    
    const getTask = (e) => { 
        e.preventDefault()
        setData([...data, obj])
        localStorage.setItem('items', JSON.stringify([...data, obj]))
        setObj({addtask:"",date:""})

       

    }

  
   
    return (
        <Container className='form'>
     <Form onSubmit={getTask} className='text-start'>
          <Form.Group className="mb-3" controlId="addtask" >
            <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Add Task" onChange={Change} value={addtask} />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Day&Time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Add Day&Time" onChange={Change}  />
          </Form.Group>
          
          <Button className='text-center w-100' variant="primary" type="submit" >
            Save
          </Button>
         
      </Form>
      
            {data.lenght ?
                data.map((item, index) => { 
                    return <Tasks index={index} item={item} />
                }) : <p>No task to Show</p>}
   
   
   </Container>
      )
    
    
    }

export default AddTask