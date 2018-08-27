exports.up = (knex, Promise) => {
  return knex.schema.createTable('shopping', (table) => {
    table.increments('id').primary()
    table.string('item')
 
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shopping')
}
