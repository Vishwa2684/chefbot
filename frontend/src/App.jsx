
import './App.css'
import Chat from './Components/Chatbox/Chatbox.jsx'
import SideBar from './Components/Sidebar'
import { useState } from 'react';


function App() {

  const [open,setOpen] =useState(true)


  console.log(`in app: ${open}`)

  const handleSidebarToggle = () => {
       setOpen(!open);
     };

  return (
    <>
    <div className='app-container'>
      <div className='sidebar'>
        <SideBar handleSidebarToggle={handleSidebarToggle} open={open}/>
      </div>

      <div className={`chat${open?'-open':'-closed'}`}>
        <Chat open={open}/>
      </div>
    </div>
    </>
  )
}

export default App



// import React, { useState } from 'react';
// import Sidebar from './Components/Sidebar'

// import Chat from './Pages/Chat/Chat'


// function App() {
//   const [open, setOpen] = useState(true);

//   const handleSidebarToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <div className='app-container'>
//         <div className='sidebar'>
//           <Sidebar handleSidebarToggle={handleSidebarToggle} open={open} />
//         </div>

//         <div className="chat">
//           <Chat open={open} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
