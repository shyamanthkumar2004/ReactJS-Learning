import React,{useContext,useState} from 'react'
import Contextapi from '../assets/context/contextapi'

const login = () => {
    const [username, setUsername] = useState('');
    const {setUser} = useContext(Contextapi);
    const handle = (e) => {
        e.preventDefault();
        setUser(username);
    }
  return (
    <div>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <button onClick={handle}>Submit</button>
    </div>
  )
}

export default login
