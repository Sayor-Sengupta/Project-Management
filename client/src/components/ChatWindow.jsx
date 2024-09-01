import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
 
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-96 overflow-y-auto shadow-lg max-w-[500px] w-[500px]">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages yet.</p>
      ) : (
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))
      )}

      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatWindow;
