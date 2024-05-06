import React, { useState } from 'react'
import './Chat.css'
import RecipeCard from '../../Components/RecipeCard'
import axios from 'axios'

import  Button  from 'react-bootstrap/Button'

const API_ROUTE='import.meta.env.VITE_ANTHROPIC'

export default function Chat() {
    const [prompt,setPrompt] = useState(null)
    // const [results,setResults] = useState([])
    const [messages,setMessages]=useState([])
    const [loading,setLoading]=useState(false)

    const action = async ()=>{
      if (!prompt) return; // Don't proceed if prompt is empty

      // Add user's input message to the messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: prompt, role: 'user' },
      ]);
      setLoading(true)
      const response = await axios.post('http://localhost:3001/api/test',
          { "messages":[{
            "role": "user",
            "content": [
                        {
                        "type": "text",
                        "text": `${prompt}`
                        }
                    ]               
        }]}
      );
      if(response.status === 200){
        const data= await response.data
        // const msg= data.msg.content[0].text
        const msg = data.message /*this is for test*/
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: `${msg}`, role: 'bot' },
        ]);
        console.log(`response ok`)
        setLoading(false)
        // setResults(data.hits)
      }else{
        console.log('response not ok: ',response.status)
      }
    }

    
    return (
      <div className="container">

          {/* ALL I NEED NOW IS A MESSAGES CONTAINER TO DISPLAY USER AND BOT MESSAGES HERE */}
          {messages.map((message, index) => (
            <div className='message'>
              <div key={index} className={message.role}>
                {message.content}
              </div>
            </div>
          ))}


            <div className='search'>
                <input type="text" id="search" placeholder="Enter ingredients or your recipe....." onChange={(e)=>{
                    setPrompt(e.target.value)
                  }}/>
                
                  {loading?<p>loading...</p>:<Button onClick={action}>search</Button>}
            </div>
              
      </div>

  )
}




