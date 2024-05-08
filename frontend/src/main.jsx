import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Route,Routes} from'react-router-dom'
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Pages/SignUp/Signup.jsx'
import NotFound from './Pages/NotFound.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/signup' element ={<Signup/>}></Route>
      <Route path='/c' element={<App />}/>
      <Route path='*' element ={<NotFound/>}></Route>
    </Routes>
    
  </BrowserRouter>
  ,
)
