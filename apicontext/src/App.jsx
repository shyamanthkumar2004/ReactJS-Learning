import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import Usercontextprovider from './assets/context/contextprovider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
