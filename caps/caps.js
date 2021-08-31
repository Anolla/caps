/* eslint-disable quotes */
"use strict";

const port = 5000;
const io = require("socket.io")(port); // http://localhost:5000
// namespace
const capsSystem = io.of("/caps"); // http://localhost:5000/health

// io.on("connection", (socket) => {
//   console.log("connected to caps");
// });


function logIt(event, payload) {
  const time = new Date();
  console.log('EVENT',{ event, time, payload });
}

capsSystem.on("connection", (socket) => {
    
  console.log("connected to namespace caps");

  socket.on("pickup", (order) => {
    // process data
    // Broadcast the events and payload back out to the appropriate clients in the caps namespace
    logIt('pickup', order);
    capsSystem.emit('pickup',order);
    
  });
  socket.on("in-transit", (order) => {
    logIt('in-transit', order);
    
  });
  socket.on("delivered", (order) => {
    logIt('delivered', order);
    capsSystem.emit('delivered',order);

  });
});
