
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
