import { useState} from 'react'
import './App.css'
import Todo from './components/todo'
//Moksheswar

function App() {
  const [task,setTask] = useState([])
  const [input,setInput] = useState('')
  const [color,setColor] = useState('black')
  const [bg,setbg] = useState('')
  function addtask(){
    if (input.trim() !== '') {
      setTask([...task, input])
      setInput('')
    }
  }
  function deltetodo(index){
    const newtask = task.filter((item,index1)=>index1!==index)
    setTask(newtask)
    /*hello*/
  }
  return (
    <>
    <div className='w-full h-screen bg-no-repeat bg-auto bg-center flex justify-center items-center' style={{backgroundColor:color,backgroundImage:'URL("https://images.pexels.com/photos/7718819/pexels-photo-7718819.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
        <h2 className='fixed top-24 text-2xl text-red-600 shadow-2xl'>Change Your Theme</h2>
      <div className='fixed h-12 top-32 p-2 flex justify-center' style={{left:'40%',width:'20%'}}>
        <input placeholder='Enter Your Fav Color' className='rounded-lg border-4 border-black' type="text" value={bg} onChange={(e)=>{setbg(e.target.value)}}/>
        <button className='border-black border-4 ml-4 rounded-lg px-1' onClick={()=>{setColor(bg)}}>Apply</button>
      </div>
      <div className='fixed bg-slate-300 rounded-3xl shadow-md  mt-60' style={{width:'28%',height:'65%'}}>
        <div className=' flex mt-10 items-center justify-center'>
          <input placeholder='Enter Your Task' type="text" className='rounded-lg border-4 border-black w-1/2 h-10 shadow-xl' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button className='ml-24 bg-white p-2 rounded-lg border-4 border-black w-14 h-10 shadow-xl'  onClick={addtask}>Add</button>
        </div>
        <div className='bg-slate-950 backdrop-blur-lg bg-opacity-30 backdrop-filter mt-4 ml-6 rounded-lg shadow-xl overflow-auto' style={{width:'90%',height:'78%'}}>
          <Todo todos={task} deltetodo={deltetodo}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
