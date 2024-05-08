import React, { useState, useRef } from 'react';
import './Chatbox.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { IoSendSharp } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

const API_ROUTE = 'import.meta.env.VITE_ANTHROPIC';

export default function Chatbox() {
  const [prompt, setPrompt] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null); // Create a ref

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
        setLoading(false);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('Error occurred while processing your request');
      setLoading(false);
    }
    
    // Clear input value
    setPrompt('');
    inputRef.current.value = '';
  };

  return (
    <>
      <div className={`container`}>
        <ToastContainer />
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role === 'user' ? 'message-user' : 'message-bot'}`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="search">
          <input
            ref={inputRef} // Assign ref to input element
            type="text"
            id="search"
            placeholder="Enter ingredients or your recipe....."
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey) {
                setPrompt((prevPrompt) => prevPrompt + '\n');
              } else if (e.key === 'Enter') {
                action();
              }
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