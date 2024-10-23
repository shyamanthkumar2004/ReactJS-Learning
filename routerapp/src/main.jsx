import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './assets/layout.jsx'
import Home from './assets/components/home/home.jsx'
import About from './assets/components/about/about.jsx'
import Github from './assets/components/github/github.jsx'
import User from './assets/components/user/user.jsx'
import { githubInfoLoader } from './assets/components/github/github.jsx'
import Contactus from './assets/components/contactus/contactus.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contactus/>} />
      <Route path='github' element={<Github/>} loader={githubInfoLoader} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
