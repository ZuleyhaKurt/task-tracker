import React from 'react'

const Tasks = (obj) => {
    console.log(obj)
    const{add,date}=obj
  return (
      <div>
          <h1>merhaba</h1>
          <p>{add}</p>
          <p>{date}</p>
    </div>
  )
}

export default Tasks