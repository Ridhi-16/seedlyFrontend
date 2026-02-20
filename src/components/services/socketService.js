import { io } from "socket.io-client";



const socket = io("https://seedlybackend.onrender.com", {
  transports: ["websocket"],
  autoConnect: true
});

export default socket;
