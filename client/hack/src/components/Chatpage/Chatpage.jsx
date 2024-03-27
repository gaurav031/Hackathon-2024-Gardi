import React, { useState, useEffect } from 'react';
import './Chatpage.css';

function Chatpage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to generate a random alphabetic code
  const generateCode = () => {
    const length = Math.random() > 0.5 ? 8 : 9;
    const characters = 'AbCDEFGHIjKLMNoPQRStUVwXYZ';
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        sender: 'patient',
        text: newMessage
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');

      // Generate random code
      const code = generateCode();

      // Simulate reply from doctor after sending patient message
      setTimeout(() => {
        const replyMessage = { id: messages.length + 2, sender: 'doctor', text: ` Thank you for reaching out, Your Generated Code is  ${code}.` };
        setMessages(prevMessages => [...prevMessages, replyMessage]);
      }, 1500); // Delay for demonstration purposes
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="messages-container">
          {messages.map(message => (
            <div key={message.id} className={message `${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatpage;