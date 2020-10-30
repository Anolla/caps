const events = require('./events.js');

function pickUp(){
  events.on('pickup',(order)=>{
    console.log(`DRIVER: picked up ${order.orderId}`);
    events.emit('in-transit',order);
  },
  );
}

function delievered(){
  events.on('pickup',(order)=>{
    console.log(`delivered up ${order.orderId}`);
    events.emit('delivered',order);
  },
  );
}
setTimeout(pickUp,1000);
setTimeout(delievered,3000);
