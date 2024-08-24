import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="mb-2 flex flex-col flex-wrap ">
      <p className="text-sm text-gray-500">
        <h1 className="text-white">{message.sender}</h1>
      </p>
      <p className="bg-cyan-800 p-2 rounded-lg flex flex-wrap">{message.text}</p>
    </div>
  );
};

export default ChatMessage;
