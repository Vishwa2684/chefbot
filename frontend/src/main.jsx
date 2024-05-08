import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Route,Routes} from'react-router-dom'
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/c' element={<App />}/>
    </Routes>
    
  </BrowserRouter>
  ,
)
