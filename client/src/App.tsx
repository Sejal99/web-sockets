import { useEffect } from "react";
import { io } from "socket.io-client";
import ChatRoom from "./Components/ChatRoom";
function App() {
  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
      socket.on("welcome", (s) => {
        console.log(s);
      });
    });
  }, []);
  return (
    <div>
      <ChatRoom/>
    </div>
  );
}

export default App;
