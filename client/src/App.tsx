import { useEffect } from "react";
import { io } from "socket.io-client";
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
  return <div></div>;
}

export default App;
