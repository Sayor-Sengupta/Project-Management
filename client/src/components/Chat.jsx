import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      sender: "Current User", // Replace with actual user
      text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="">
      <div className=" border px-2 py-2 text-center min-w-72 bg-green-800 mb-5 rounded-lg">
        <h2 className="text-xl font-semibold text-white-800  ">
           Chat
        </h2>
      </div>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
