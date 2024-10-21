import { useState} from 'react'
import './App.css'
import Todo from './components/todo'

function App() {
  const [task,setTask] = useState([])
  const [input,setInput] = useState('')
  function addtask(){
    if (input.trim() !== '') {
      setTask([...task, input])
      setInput('')
    }
  }
  function deltetodo(index){
    const newtask = task.filter((item,index1)=>index1!==index)
    setTask(newtask)
  }
  return (
    <div className='w-full h-screen bg-no-repeat bg-auto bg-center flex justify-center items-center bg-black' style={{backgroundImage:'URL("https://images.pexels.com/photos/7718819/pexels-photo-7718819.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
      <div className=' bg-white rounded-3xl shadow-md  mt-60' style={{width:'28%',height:'65%'}}>
        <div className=' flex mt-10 items-center justify-center'>
          <input placeholder='Enter Your Task' type="text" className='border-4 border-black w-1/2 h-10 shadow-xl' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button className='ml-24 bg-white p-2 rounded-lg border-4 border-black w-14 h-10 shadow-xl'  onClick={addtask}>Add</button>
        </div>
        <div className='bg-cyan-200 mt-4 ml-6 rounded-lg shadow-xl overflow-auto' style={{width:'90%',height:'78%'}}>
          <Todo todos={task} deltetodo={deltetodo}/>
        </div>
      </div>
    </div>
  )
}

export default App
