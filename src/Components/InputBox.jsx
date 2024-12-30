import React, { useState } from "react";

const ChatInputBox = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center border w-96 border-gray-300 rounded-lg p-2 shadow-md my-5 justify-between bg-gray-300">
      <input
        type="text"
        placeholder="Message ChatGPT"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" outline-none text-gray-700 bg-transparent px-2"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-900 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInputBox;
