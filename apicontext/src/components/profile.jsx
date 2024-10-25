import React,{useContext} from 'react'
import Contextapi from '../assets/context/contextapi';
const profile = () => {
const {user} = useContext(Contextapi);
  return (
    <div>
      <h1>User Name:{user}</h1>
    </div>
  )
}

export default profile
