import React from 'react'

const todo = ({todos,deltetodo}) => {
  return (
    <div>
      {
        todos.map((todo,index) => {
          return (
            <div className='flex justify-between ml-8 mt-4 bg-gray-400 p-1 rounded-lg shadow-xl opacity 'style={{width:'80%'}} >
              <h2 className='break-words w-2/3 p-1'>{todo}</h2>
              <button className='bg-red-600 p-1 rounded-lg w-14 h-9' onClick={()=>{deltetodo(index)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default todo
