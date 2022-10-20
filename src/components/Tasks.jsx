import React from 'react'
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Tasks = ({ index, item, data, setData }) => {
   
    const { id, addtask, date } = item
    console.log(id)
    console.log(date)
    console.log(addtask)
    // const handleDelete = () => {
    //     data = data.filter((e) => {
    //         return (
    //             id !== Number(e.target.id)
    //         )
    //     })
    //     setData(data);
    //     localStorage.setItem('items', JSON.stringify(data));
    // }
   


 
    return (
      <div className='card mt-3'>
        <Card key={index}>
                <Row>
                    <Col >
                        <p>{addtask}</p>
                        <p>{date}</p>
                    </Col>
                    <Col >x</Col>
                </Row>     
        </Card>
    </div>
  )
}

export default Tasks