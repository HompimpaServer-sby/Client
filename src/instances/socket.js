import { io } from "socket.io-client";

const socket = io("https://game.walldoteid.site", {
// const socket = io("http://localhost:3000", {
  autoConnect: false,
});

export default socket;