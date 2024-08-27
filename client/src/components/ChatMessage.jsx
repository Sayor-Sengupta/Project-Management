import React from "react";
import { useAuthStore } from "../zustand/useAuth";
import { extractTime } from "../utils/extractTime";

const ChatMessage = ({ message }) => {
  const { authUser } = useAuthStore();
  return (
    <div className="mb-2 flex flex-col">
      {authUser.userName === message.sender ? (
        <>
          {/* <h1 className="text-white">{message.sender}</h1>
          <p className="bg-cyan-800 p-2 rounded-lg">{message.message}</p> */}
          <div className="chat chat-start">
            <div className="chat-header">
              {message.sender}
              {" "}
              <time className="text-xs opacity-50">{extractTime(message.createdAt)}</time>
            </div>
            <div className="chat-bubble ">
              <div className="chat-message">{message.message}</div>
            </div>
            
          </div>
        </>
      ) : (
        <>
          {/* <h1 className="text-black">{message.sender}</h1>
          <p className="bg-cyan-800 p-2 rounded-lg">{message.message}</p>: */}
          <div className="chat chat-end">
            <div className="chat-header">
              {message.sender} 
              { "    "}
              <time className="text-xs opacity-50">{extractTime(message.createdAt)}</time>
            </div>

            <div className="chat-bubble">{message.message}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
