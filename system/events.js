const EE = require('events');
//Global Event Pool (shared by all modules) / singleton
module.exports = new EE();