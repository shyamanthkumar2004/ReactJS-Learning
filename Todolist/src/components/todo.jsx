import React from 'react'

const todo = ({todos,deltetodo}) => {
  return (
    <div>
      {
        todos.map((todo,index) => {
          return (
            <div className='flex justify-between ml-8 mt-4 bg-gray-400 p-1 rounded-lg shadow-xl opacity'style={{width:'80%'}} >
              <h2 >{todo}</h2>
              <button className='bg-red-600 rounded-lg' onClick={()=>{deltetodo(index)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default todo
