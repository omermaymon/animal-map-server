require('dotenv').config()
const keys = require('./keys') 
const PORT = keys.PORT 
let MONGODB_URL = keys.TEST_MONGODB_URL

// if (process.env.NODE_ENV === 'test') {
//   MONGODB_URL = process.env.TEST_MONGODB_URL
// }

module.exports = {
  MONGODB_URL,
  PORT
}