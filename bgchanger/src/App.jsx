import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('cyan')
  return (
    <>
    <div className='w-full h-screen duration-200'  style={{backgroundColor:color}}>
      <h1 className='bg-cyan-200 text-center'>Hello Welcome to Bg Changer</h1>
      <label style={{color:color=='black'?'white':'black'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quod, at fugit rem, eveniet quae ducimus, aspernatur ipsa nemo autem minus excepturi voluptate ratione ab et ipsam magni cum tempora.</label>
      <div className='fixed flex flex-wrap justify-center top-30 inset-x-0'>
      <div className=' fixed bottom-96 right-auto bg-blue-500 w-32 rounded-3xl p-3 border-2 border-blue-800 grid gap-2 grid-cols-2'>
        <button onClick={()=>setColor('black')} className=' bg-black shadow-md rounded-xl text-white p-1 border-2 border-spacing-3 flex-row col'>Black</button>
        <button onClick={()=>setColor('white')} className=' bg-white shadow-md rounded-xl text-black p-1 border-2 border-black border-spacing-3'>Black</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
