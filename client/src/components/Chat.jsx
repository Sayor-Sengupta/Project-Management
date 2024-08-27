import React, { useEffect, useState } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import axios from "axios";
import {useAuthStore} from "../zustand/useAuth"

const Chat = ({ projectId, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const {authUser} = useAuthStore();

  // Fetch messages when the component mounts or when projectId changes
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/project/chat/${projectId}`,
          { withCredentials: true }

        );
        console.log("res", res.data.messages);
        setMessages(res.data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [projectId]);
  console.log(("authUser",  authUser.userName));

  // Handle sending a new message
  const handleSendMessage = async (text) => {
    

    try {
      const res = await axios.post(
        `http://localhost:3000/api/project/chat/${projectId}`,
        {sender: authUser.userName,
        message:text },
        { withCredentials: true }
      );

      // Append the newly sent message to the message list
      setMessages([...messages, res.data.message]); // Assuming the response includes the saved message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="">
      <div className="border px-2 py-2 text-center min-w-72 bg-green-800 mb-5 rounded-lg">
        <h2 className="text-xl font-semibold text-white-800">Chat</h2>
      </div>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
