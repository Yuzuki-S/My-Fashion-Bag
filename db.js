const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
 addItem,
 getItems
}

function addItem (item, testConn) {
  const conn = testConn || connection
  return conn('shopping').insert({'item': item})
}

function getItems (id, testConn) {
  const conn = testConn || connection
  return conn('shopping').select()
}
