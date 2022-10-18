
import  { useState } from 'react'
import Container from 'react-bootstrap/Container'
import AddTask from './AddTask'



const Header = () => {
    
const [click, setClick] = useState(true)
    
const handleClick = () => {
            setClick(!click)
        }
  return (
        <Container className='m-auto text-center mt-4 p-4 w-50' >
          <h1>Task Tracker</h1>
            <button onClick={handleClick}>{click ? "Show Add Task Bar" : "Close Add Task Bar"}</button>
          {!click && <AddTask />}
    </Container>
  )
}

export default Header