import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        className="  flex-grow p-2 border bg-gray-700 border-gray-300 rounded-l-lg focus:outline-none "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        required
      />
      <button
        type="submit"
        className="bg-green-800 border text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
