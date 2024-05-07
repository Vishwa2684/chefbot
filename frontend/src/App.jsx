import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './Pages/Chat/Chat'
import SideBar from './Components/Sidebar'
function App() {

  return (
    <>
    <div className='app-container'>
      <div className='sidebar'>
        <SideBar/>
      </div>
      
      <div className="chat">
        <Chat/>
      </div>
    </div>
    </>
  )
}

export default App
