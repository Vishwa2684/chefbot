// import React, { useState ,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';

// import { auth } from '../config/config';
// import { onAuthStateChanged,signOut } from 'firebase/auth';
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({ handleSidebarToggle }) => {

//   const [user, setUser] = useState(null); // State to hold user information
//   const nav = useNavigate()
//   useEffect(() => {
//     // Subscribe to changes in authentication state
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser(user); // Set user state with user information
//       } else {
//         // User is signed out
//         setUser(null); // Clear user state
//       }
//     })
//     }
//   )

//   const handleLogout = async()=>{
//     await signOut(auth)
//     console.log(`logged out successfuly`)
//     nav('/')

//   }

  
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#000" backgroundColor="#FFC765">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={handleSidebarToggle}></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             SanjiLLM
//           </a>
//         </CDBSidebarHeader>
  
//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             className="sidebar-btn-wrapper"
//             style={{
//               borderTop: 'solid #000',
//               padding: '20px 5px',
//             }}
//           >
//             {user ? (
//               // If user is logged in, display username and logout button
//               <>
//                 <span>{user.displayName}</span>
//                 <button onClick={handleLogout}>Logout</button>
//               </>
//             ) : (
//               // If user is not logged in, display login prompt
//               'Please log in'
//             )}
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { auth } from '../config/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ handleSidebarToggle }) => {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    console.log(`logged out successfully`);
    nav('/');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#000" backgroundColor="#FFC765">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={handleSidebarToggle}></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            SanjiLLM
          </a>
        </CDBSidebarHeader>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              borderTop: 'solid #000',
              padding: '20px 5px',
            }}
          >
            {user ? (
              <div className="user-card">
                <img src={user.photoURL} alt="User Avatar" className="user-avatar" />
                <span className="user-name">{user.displayName}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              'Please log in'
            )}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;