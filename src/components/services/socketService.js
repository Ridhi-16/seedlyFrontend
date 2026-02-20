
import { io } from "socket.io-client";

const socket = io("https://seedlybknd.onrender.com", {
  transports: ["websocket"],
  autoConnect: true
});

export default socket;
