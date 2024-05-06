// import React, { useState } from 'react'
// import './Chat.css'
// // import RecipeCard from '../../Components/RecipeCard'
// import axios from 'axios'
// import { toast, ToastContainer}from 'react-toastify'
// import { IoSendSharp } from "react-icons/io5";
// import 'react-toastify/dist/ReactToastify.css';

// import  Button  from 'react-bootstrap/Button'

// const API_ROUTE='import.meta.env.VITE_ANTHROPIC'

// export default function Chat() {
//     const [prompt,setPrompt] = useState(null)
//     // const [results,setResults] = useState([])
//     const [messages,setMessages]=useState([])
//     const [loading,setLoading]=useState(false)

//     const action = async ()=>{
//       if (!prompt) {
//         toast.error('Enter a prompt')
//         return;
//       } // Don't proceed if prompt is empty

//       // Add user's input message to the messages array
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { content: prompt, role: 'user' },
//       ]);
//       setLoading(true)
//       const response = await axios.post('http://localhost:3001/api/test',
//           { "messages":[{
//             "role": "user",
//             "content": [
//                         {
//                         "type": "text",
//                         "text": `${prompt}`
//                         }
//                     ]               
//         }]}
//       );
//       if(response.status === 200){
//         const data= await response.data
//         // const msg= data.msg.content[0].text
//         const msg = data.message /*this is for test*/
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { content: `${msg}`, role: 'bot' },
//         ]);
//         console.log(`response ok`)
//         setLoading(false)
//         // setResults(data.hits)
//       }else{
//         console.log('response not ok: ',response.status)
//         toast.error('INTERNAL SERVER ERROR (500)')
//       }
//     }

    
//     return (
//       <>
//       <div className="container">
//         <ToastContainer/>
//           {/* ALL I NEED NOW IS A MESSAGES CONTAINER TO DISPLAY USER AND BOT MESSAGES HERE */}
//           {messages.map((message, index) => (
//             <div className='message'>
//               <div key={index} className={message.role}>
//                 {message.content}
//               </div>
//             </div>
//           ))}


//             <div className='search'>
//                 <input type="text" id="search" placeholder="Enter ingredients or your recipe....." onChange={(e)=>{
//                     setPrompt(e.target.value)
//                   }}/>
                
//                   {loading?<p>loading...</p>:<Button className='send-button' onClick={action}><IoSendSharp /></Button>}
//             </div>
              
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react';
import './Chat.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { IoSendSharp } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

const API_ROUTE = 'import.meta.env.VITE_ANTHROPIC';

export default function Chat() {
  const [prompt, setPrompt] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const action = async () => {
    if (!prompt) {
      toast.error('Enter a prompt');
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: prompt, role: 'user' },
    ]);
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/test', {
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `${prompt}`,
              },
            ],
          },
        ],
      });
      if (response.status === 200) {
        const data = response.data;
        const msg = data.message;
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: `${msg}`, role: 'bot' },
        ]);
        setLoading(false);
      } else {
        console.log('response not ok: ', response.status);
        toast.error('INTERNAL SERVER ERROR (500)');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('Error occurred while processing your request');
    }
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role === 'user' ? 'user' : 'bot'}`}
            >
              {message.content}
            </div>
          ))}
        

        <div className="search">
          <input
            type="text"
            id="search"
            placeholder="Enter ingredients or your recipe....."
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />

          {loading ? (
            <p>loading...</p>
          ) : (
            <Button className="send-button" onClick={action}>
              <IoSendSharp />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}