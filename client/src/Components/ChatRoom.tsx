import React from 'react';

const ChatRoom = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Chat Room</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;
