// src/components/Chat.jsx
import React from 'react';

function Chat({ messages, message, setMessage, sendMessage }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto p-2 bg-gray-100 mb-4 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 bg-blue-100 my-2 rounded">
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 border rounded"
        />
        <button onClick={sendMessage} className="p-2 bg-green-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
