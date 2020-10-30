const events = require('./events.js');
let faker = require('faker');
require('dotenv').config();

function newOrder() {
  let order={
    storeName:process.env.STORENAME,
    orderId:faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('pickup',order );
  events.on('delivered', (order)=>{
    console.log(`Thank you for delivring ${order.orderId}`);
  });
}

setInterval(newOrder,5000);

// function thankYou(order){
  
// }

  


